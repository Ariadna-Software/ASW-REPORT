var validate_languages = function () {
    var vl = {
        "es": {
            required: "Este campo es obligatorio.",
            remote: "Por favor, rellena este campo.",
            email: "Por favor, escribe una dirección de correo válida.",
            url: "Por favor, escribe una URL válida.",
            date: "Por favor, escribe una fecha válida.",
            dateISO: "Por favor, escribe una fecha (ISO) válida.",
            number: "Por favor, escribe un número válido.",
            digits: "Por favor, escribe sólo dígitos.",
            creditcard: "Por favor, escribe un número de tarjeta válido.",
            equalTo: "Por favor, escribe el mismo valor de nuevo.",
            extension: "Por favor, escribe un valor con una extensión aceptada.",
            maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
            minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
            rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
            range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
            max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
            min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}."),
            nifES: "Por favor, escribe un NIF válido.",
            nieES: "Por favor, escribe un NIE válido.",
            cifES: "Por favor, escribe un CIF válido."
        },
		"fr": {
            required: "Ce champ est obligatoire.",
            remote: "S'il vous plaît, remplisez ce champ.",
            email: "S'il vous plaît, entrez une adresse e-mail valide.",
            url: "S'il vous plaÎt, entrez une URL valide.",
            date: "S'il vous plaît, entrez une date valide.",
            dateISO: "S'il vous plaît, entrez une date (ISO) valide.",
            number: "S'il vous plaît, entrez un numéro valide.",
            digits: "S'il vous plaît, entrez chiffres seulement.",
            creditcard: "S'il vous plaît, entrez un numéro de carte valide.",
            equalTo: "S'il vous plaît, entrez le même valeur encore une fois.",
            extension: "S'il vous plaît, entrez un valeur avec une extension acceptée.",
            maxlength: $.validator.format("S'il vous plaît, ne pas entrer plus de {0} caractères."),
            minlength: $.validator.format("S'il vous plaît, ne pas entrer moins de {0} caractères."),
            rangelength: $.validator.format("S'il vous plaît, entrez un valeur entre {0} et {1} caractères."),
            range: $.validator.format("S'il vous plaît, entrez un valeur entre {0} et {1}."),
            max: $.validator.format("S'il vous plaît, entrez un valeur inférieure ou égale à {0}."),
            min: $.validator.format("S'il vous plaît, entrez un valeur supérieure ou égale à {0}."),
            nifES: "S'il vous plaît, entrez un NIF valide.",
            nieES: "S'il vous plaît, entrez un NIE valide.",
            cifES: "S'il vous plaît, entrez un CIF valide."
        },
        "en": {
            required: "Required field.",
            remote: "Please, fill in the field.",
            email: "Please, enter a valid email address.",
            url: "Please, enter a valid URL link.",
            date: "Please, enter a valid date.",
            dateISO: "Please, enter a valid ISO date.",
            number: "Please, enter a valid number.",
            digits: "Accepting only digit characters.",
            creditcard: "Please, enter a valid creditcard.",
            equalTo: "Please, enter again.",
            extension: "Please, fill in with a valdid extention.",
            maxlength: $.validator.format("Please, enter no more than {0} characters."),
            minlength: $.validator.format("Please, enter no less than {0} characters."),
            rangelength: $.validator.format("Please, enter a value between {0} & {1} characters."),
            range: $.validator.format("Please, enter a value between {0} & {1}."),
            max: $.validator.format("Please, enter a value less than or equal to {0}."),
            min: $.validator.format("Please, enter a value more than or equal to {0}."),
            nifES: "Please, enter a valid VAT number.",
            nieES: "Please, enter a valid VAT number.",
            cifES: "Please, enter a valid VAT number."
        }
    };
    return vl;
}


function validator_languages(lang) {
    if (validate_languages()[lang]) {
        $.extend($.validator.messages, validate_languages()[lang]);
    }
}

