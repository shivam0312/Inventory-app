from django.db import models
from datetime import datetime

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    vendor = models.CharField(max_length=200)
    mrp = models.IntegerField()
    batch_num = models.IntegerField()
    quantity = models.IntegerField()
    is_approved = models.BooleanField(default= False)

    def __str__(self):
        return self.name