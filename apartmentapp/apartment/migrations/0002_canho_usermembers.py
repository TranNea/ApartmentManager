# Generated by Django 5.0.4 on 2024-05-29 02:11

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apartment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='canho',
            name='userMembers',
            field=models.ManyToManyField(null=True, related_name='thanh_vien_can_ho', to=settings.AUTH_USER_MODEL),
        ),
    ]
