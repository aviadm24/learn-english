from django.shortcuts import render
import os
from django.http import JsonResponse


def get_words(request):
    print(os.getcwd())

    return JsonResponse({'foo': 'bar'})

