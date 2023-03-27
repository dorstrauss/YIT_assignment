from django.urls import path
from website.views import InsertDataView, select_data_view, component_view

# the urls for the pages rendering
urlpatterns = [
    path('insert_data/', InsertDataView.as_view(), name='insert_data'),
    path('select_data/', select_data_view, name='select_data'),
    path('component/', component_view, name='component')
]
        