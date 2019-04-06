from rest_framework import serializers
from django.contrib.auth.models import User
from webapp.models import Product, Photo, Category, Order


class InlinePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'product', 'photo')


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class ProductSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:product-detail')
    photos = InlinePhotoSerializer(many=True, read_only=True)
    categories = InlineCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('url', 'id', 'categories', 'name', 'description', 'release_date', 'price', 'photos')

class PhotoSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:photo-detail')
    product_name = serializers.SerializerMethodField(read_only=True)

    def get_product_name(self, photo):
        return photo.product.name

    class Meta:
        model = Photo
        fields = ('url', 'id', 'photo', 'product', 'product_name')


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:category-detail')

    class Meta:
        model = Category
        fields = ('url', 'name', 'description')


class OrderSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:order-detail')
    user_name = serializers.SerializerMethodField(read_only=True)

    def get_user_name(self, order):
        return order.user.username

    class Meta:
        model = Order
        fields = ('url', 'user', 'product', 'phone', 'address', 'comment', 'created')


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']