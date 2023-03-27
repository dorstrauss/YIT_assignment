from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


# model that holds the data the user entered in the form
class ComponentData(models.Model):

    image = models.ImageField(upload_to='static/users_images/')
    image_name = models.CharField(default='', max_length=50)
    category = models.CharField(max_length=50)
    title = models.CharField(max_length=150)
    subtitle = models.CharField(max_length=500)
    credit = models.CharField(max_length=50)

    # overriding the string representation of the class
    def __str__(self):
        return self.title
'''
 Receiver that listen to the ComponentData, once a new instance is saved we save the image name.
 We do so, inorder to give the images names to the selection template
'''
@receiver(post_save, sender=ComponentData)
def update_image_name(sender, instance, **kwargs):
    if instance.image and not instance.image_name:
        instance.image_name = instance.image.name
        instance.save()


# model that holds the selection of the user
class CurrentComponent(models.Model):

    image_name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    title = models.CharField(max_length=150)
    subtitle= models.CharField(max_length=500)
    credit = models.CharField(max_length=50)

    # overriding the string representation of the class
    def __str__(self):
        return self.title
