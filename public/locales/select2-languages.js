var select2_languages = {
    "es": {
        allowClear: true,
        language: {
            errorLoading: function () {
                return "La carga falló";
            },
            inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                    n = "Por favor, elimine " + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            inputTooShort: function (e) {
                var t = e.minimum - e.input.length,
                    n = "Por favor, introduzca " + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            loadingMore: function () {
                return "Cargando más resultados…";
            },
            maximumSelected: function (e) {
                var t = "Sólo puede seleccionar " + e.maximum + " elemento";
                return e.maximum != 1 && (t += "s"), t;
            },
            noResults: function () {
                return "No se encontraron resultados";
            },
            searching: function () {
                return "Buscando…";
            }
        }
    },
	"fr": {
        allowClear: true,
        language: {
            errorLoading: function () {
                return "Échec du chargement";
            },
            inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                    n = "S'il vous plaît, supprimez " + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            inputTooShort: function (e) {
                var t = e.minimum - e.input.length,
                    n = "s'il vous plaît, entrez" + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            loadingMore: function () {
                return "Chargement de plus des résultats en cours…";
            },
            maximumSelected: function (e) {
                var t = "Seulement vous pouvez sélectionner" + e.maximum + " élément";
                return e.maximum != 1 && (t += "s"), t;
            },
            noResults: function () {
                return "Aucun résultat trouvé";
            },
            searching: function () {
                return "Recherche en cours…";
            }
        }
    },
    "en": {
		allowClear: true,
        language: {
            errorLoading: function () {
                return "failed";
            },
            inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                    n = "Please, delete " + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            inputTooShort: function (e) {
                var t = e.minimum - e.input.length,
                    n = "Please, introduce " + t + " car";
                return t == 1 ? n += "ácter" : n += "acteres", n;
            },
            loadingMore: function () {
                return "Charging results…";
            },
            maximumSelected: function (e) {
                var t = "You can select " + e.maximum + " element";
                return e.maximum != 1 && (t += "s"), t;
            },
            noResults: function () {
                return "No results found";
            },
            searching: function () {
                return "Searching…";
            }
        }
    }
};