from django.urls import path
from .views import category_list, product_list, products_by_category,product_detail, category_detail

urlpatterns = [
    path('api/products/', product_list),
    path('api/products/<int:id>', product_detail),
    path('api/categories/', category_list),
    path('api/categories/<int:id>', category_detail),
    path('api/categories/<int:id>/products/', products_by_category)
]