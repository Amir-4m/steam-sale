import logging
from celery.schedules import crontab
from celery.task import periodic_task
from datetime import datetime

from .models import NextSale

logger = logging.getLogger(__name__)


@periodic_task(run_every=(crontab(minute='*/1')), name="update_sale", ignore_result=True)
def update_sale():
    sale = NextSale.objects.order_by('sale_date').filter(is_enable=True).first()
    logger.info(f'checking sale status {sale.id}')
    if sale.sale_date <= datetime.date(datetime.now()) <= sale.end_date:
        logger.info(f'updating sale {sale.id} in sale status to True')
        sale.in_sale = True
        sale.save()
    elif sale.sale_date > sale.end_date:
        logger.info(f'deactivating sale {sale.id}')
        sale.is_enable = False
        sale.in_sale = False
        sale.save()
