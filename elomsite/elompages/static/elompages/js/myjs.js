// JavaScript Document
$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });

/*MODAL VIDEO*/
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
});

/*********************************************************************************************/
/*CONTACTO*/
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor, indique su Nombre'
                    }
                }
            },
             apellido: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor, indique su Apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, indique su Correo Electrónico'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, indique su número de teléfono'
                    },
                    regexp: {
                        regexp: /^(9[6-9][0-9]{7})$/,
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            direccion: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor, indique su Dirección'
                    }
                }
            },
            region: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Por favor, indique su Región'
                    }
                }
            },
            comuna: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, seleccione su Comuna'
                    }
                }
            },
			
			motivo: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, seleccione un Motivo'
                    }
                }
            },

            consulta: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 500,
                        message:'Introduzca al menos 10 caracteres y no más de 500'
                    },
                    notEmpty: {
                        message: 'Por favor, ingresar una consulta'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

/***************************************************************************************************************/