from django.shortcuts import render
from rest_framework import generics
from API.serializers import SaveFormDataSerializer, ComponentSerializer


# view that saves the data form to the database, and render the page
class SaveFormDataView(generics.CreateAPIView):

    serializer_class = SaveFormDataSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return render(request, 'insert_data.html', {'successful_save': True})  # adding a success flag

    def perform_create(self, serializer):
        serializer.save()


# view that saves the selection data to the database
class SaveComponent(generics.CreateAPIView):

    serializer_class = ComponentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return render(request, 'select_data.html', {'successful_save': True})  # adding a success flag

    def perform_create(self, serializer):
        serializer.save()
