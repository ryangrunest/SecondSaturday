# Generated by Django 2.2.4 on 2019-08-22 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_author', models.CharField(max_length=50)),
                ('blog_text', models.TextField()),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
    ]
