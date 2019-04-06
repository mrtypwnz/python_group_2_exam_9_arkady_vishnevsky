from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(max_length=2000, blank=True, null=True)
    release_date = models.DateField()
    categories = models.ManyToManyField('Category', related_name='categories', blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Photo(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=False, related_name='photos')
    photo = models.ImageField(upload_to='uploads', null=True, blank=True)

    def __str__(self):
        return str(self.photo)


class Category(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(max_length=2000, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Order(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product, related_name='product', blank=False)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=500, null=True, blank=True)
    comment = models.TextField(max_length=500, null=True, blank=True)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s, %s" % (self.pk, self.user)