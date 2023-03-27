from django.urls import path
from API.views import SaveFormDataView, SaveComponent

urlpatterns = [
    path('save_form/', SaveFormDataView.as_view(), name='save_form_data'),
    path('save_component/', SaveComponent.as_view(), name='save_component'),
]
