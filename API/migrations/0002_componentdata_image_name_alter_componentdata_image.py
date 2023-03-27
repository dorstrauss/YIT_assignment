# Generated by Django 4.1.7 on 2023-03-26 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='componentdata',
            name='image_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='componentdata',
            name='image',
            field=models.ImageField(upload_to='users_images/'),
        ),
    ]
