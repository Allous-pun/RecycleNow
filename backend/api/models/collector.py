from django.db import models
from .user import User

class Collector(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    vehicle_number = models.CharField(max_length=50)
    region = models.CharField(max_length=255)

    def __str__(self):
        return self.vehicle_number
