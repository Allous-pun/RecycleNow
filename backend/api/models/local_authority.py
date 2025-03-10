from django.db import models

class LocalAuthority(models.Model):
    name = models.CharField(max_length=255)
    jurisdiction = models.TextField()

    def __str__(self):
        return self.name
