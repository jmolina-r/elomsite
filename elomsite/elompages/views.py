from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

# Create your views here.
def home(request):
    return render(request,'elompages/home.html', {})

def quienes_somos(request):
    return render(request,'elompages/quienes-somos.html', {})

def programas_servicios(request):
    return render(request,'elompages/programas-servicios.html', {})

def hazte_socio(request):
    return render(request,'elompages/hazte-socio.html', {})

def contacto(request):
    return render(request,'elompages/contacto.html', {})


def send_email(request):
    if request.method == 'POST':
        form = ContactForm(request.POST or None)
        if form.is_valid():
            form_nombre= form.cleaned_data.get("nombre")
            form_apellido= form.cleaned_data.get("apellido")
            form_correo= form.cleaned_data.get("correo")
            form_telefono= form.cleaned_data.get("telefono")
            form_direccion= form.cleaned_data.get("direccion")
            form_region= form.cleaned_data.get("region")
            form_motivo=form.cleaned_data.get("motivo")
            form_consulta= form.cleaned_data.get("consulta")

            asunto='Formulario de Contacto: Web Elom'
            from_email=settings.EMAIL_HOST_USER
            to_email=[from_email,]

            mensaje = "Has recibido un nuevo mensaje del formulario, los datos son los siguiente: \n\nNombre: %s\nApellido: %s \nCorreo: %s \nTeléfono: %s \nMotivo de consulta: %s \nConsulta: %s" % (
                form_nombre,
                form_apellido,
                form_correo,
                form_telefono,
                form_motivo,
                form_consulta
            )

            send_mail(asunto,
                      mensaje,
                      from_email,
                      to_email,
                      fail_silently=True
                      )
            return HttpResponseRedirect('/contacto')
    else:
        form = ContactForm()

    return render(request, 'elompages/contacto.html', {'form': form})


