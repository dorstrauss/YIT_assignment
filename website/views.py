import os
from django.shortcuts import render
from django.views.generic import TemplateView
from API.models import ComponentData, CurrentComponent
from yit_project.settings import BASE_DIR


class InsertDataView(TemplateView):
    template_name = 'insert_data.html'


# view that will render the select_data.html and will attach all the values from the database to the dropdown lists
def select_data_view(request):

    # getting all the distinct non-empty values of each field from the database
    images_names = []
    images_full_names = ComponentData.objects.exclude(image_name='').values_list('image', flat=True).distinct()
    for images_full_name in images_full_names:  # for each image getting the name without prefix
        image_name_without_prefix = images_full_name.split('/', 2)[2]
        images_names.append(image_name_without_prefix)
    categories = ComponentData.objects.exclude(category='').values_list('category', flat=True).distinct()
    titles = ComponentData.objects.exclude(title='').values_list('title', flat=True).distinct()
    subtitles = ComponentData.objects.exclude(subtitle='').values_list('subtitle', flat=True).distinct()
    credits = ComponentData.objects.exclude(credit='').values_list('credit', flat=True).distinct()
    dropdown_values = {'images': images_names, 'categories': categories, 'titles': titles,
    'subtitles': subtitles, 'credits': credits}

    # rendering the select_data page with the dropdown values
    return render(request, 'select_data.html', dropdown_values)


# view that render the home page component
def component_view(request):

    # Retrieve data from the server
    current_component_data = CurrentComponent.objects.last()  # getting the last selection
    image_name = current_component_data.image_name
    image_url = os.path.join(BASE_DIR, 'static', 'users_images', image_name)
    category_text = current_component_data.category
    title_text = current_component_data.title
    subtitle_text = current_component_data.subtitle
    credit_text = current_component_data.credit

    # Pass data to the template context
    context = {
        'image_url': image_url,
        'category_text': category_text,
        'title_text': title_text,
        'subtitle_text': subtitle_text,
        'credit_text': credit_text,
    }

    # rendering the component page with the values the user selected
    return render(request, 'component.html', context)

