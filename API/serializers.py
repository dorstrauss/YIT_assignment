from rest_framework import serializers
from django.core.validators import MaxLengthValidator
from API.models import ComponentData, CurrentComponent


class SaveFormDataSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(required=False)
    image_name = serializers.CharField(required=False)
    category = serializers.CharField(required=False, validators=[MaxLengthValidator(50)])
    title = serializers.CharField(required=False, validators=[MaxLengthValidator(150)])
    subtitle = serializers.CharField(required=False, validators=[MaxLengthValidator(500)])
    credit = serializers.CharField(required=False, validators=[MaxLengthValidator(50)])

    class Meta:
        model = ComponentData
        fields = ('image', 'image_name', 'category', 'title', 'subtitle', 'credit')

    # making sure that not all the fields are empty, so we woud not save an empty instance
    def validate(self, attrs):
        if len(attrs) == 0:
            raise serializers.ValidationError("All the fields are empty.")
        else:
            return attrs


class ComponentSerializer(serializers.ModelSerializer):

    class Meta:
        model = CurrentComponent
        fields = '__all__'
