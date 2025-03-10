from django.db import models
from .collector import Collector
from .recycler import Recycler

class Waste(models.Model):
    TYPE_CHOICES = [
        ('plastic', 'Plastic'),
        ('organic', 'Organic'),
        ('metal', 'Metal'),
        ('glass', 'Glass'),
    ]

    waste_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    quantity = models.FloatField()
    collector = models.ForeignKey(Collector, on_delete=models.CASCADE)
    recycler = models.ForeignKey(Recycler, on_delete=models.SET_NULL, null=True, blank=True)
    collected_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} kg of {self.waste_type}"
