from rest_framework import routers
from django.urls import include, path
from .views import category_list, product_list, products_by_category,product_detail, category_detail, CategoryViewSet, ProductViewSet
from . import views

router = routers.DefaultRouter()

router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]