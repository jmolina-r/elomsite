from django import forms


LIST_REGIONES_CHILE = (
    ('XV Arica y Parinacota', 'XV Arica y Parinacota'),
    ('I Tarapacá', 'I Tarapacá'),
    ('II Antofagasta', 'II Antofagasta'),
    ('III Atacama', 'III Atacama',),
    ('IV Coquimbo', 'IV Coquimbo'),
    ('V Valparaíso', 'V Valparaísoo'),
    ('Región Metropolitana', 'Región Metropolitana'),
    ('VI OHiggins', 'VI OHiggins'),
    ('VII Maule', 'VII Maule'),
    ('VIII Biobío', 'VIII Biobío'),
    ('IX La Araucan', 'IX La Araucan'),
    ('XIV Los Ríos', 'XIV Los Ríos'),
    ('X Los Lago', 'X Los Lago'),
    ('XI Aysén', 'XI Aysén'),
    ('XII Magallanes y Antártica', 'XII Magallanes y Antártica'),
)

LIST_MOTIVO = (
    ('Usuaria requiere orientación o información', 'Usuaria requiere orientación o información'),
    ('Empresa o Institución solicita información', 'Empresa o Institución solicita información'),
     )

class ContactForm(forms.Form):
    nombre= forms.CharField(max_length=100)
    apellido= forms.CharField(max_length=200)
    correo = forms.EmailField(label='Correo Electrónico')
    telefono = forms.CharField(max_length=100)
    #direccion= forms.CharField(max_length=300, label='Dirección')
    #region = forms.ChoiceField(choices=LIST_REGIONES_CHILE, label='Región')
    #comuna = forms.CharField(max_length=200)
    motivo = forms.ChoiceField(choices=LIST_MOTIVO, label='Motivo de consulta')
    consulta = forms.CharField(widget=forms.Textarea)