(function ($) {

	var countries = ['AFGANISTAN',
		'ALBANIA',
		'ARGELIA',
		'SAMOA AMERICANA',
		'ANDORRA',
		'ANGOLA',
		'ANGUILLA',
		'ANTARCTIDA',
		'ANTIGUA Y BARBUDA',
		'ARGENTINA',
		'ARMENIA',
		'ARUBA',
		'AUSTRALIA',
		'AUSTRIA',
		'AZERBAIJAN',
		'BAHAMAS',
		'BAHRAIN',
		'BANGLADESH',
		'BARBADOS',
		'BELARUS',
		'BELGICA',
		'BELIZE',
		'BENIN',
		'BERMUDA',
		'BHUTAN',
		'BOLIVIA',
		'BONAIRE',
		'BOSNIA Y HERZEGOVINA',
		'BOTSWANA',
		'BRASIL',
		'BRUNEI',
		'BULGARIA',
		'BURKINA FASO',
		'BURUNDI',
		'CAMBODIA',
		'CAMEROON',
		'CANADA',
		'CABO VERDE',
		'ISLAS CAIMAN',
		'REP CENTRO AFRICANA',
		'CHAD',
		'CHILE',
		'CHINA',
		'ISLAS CHRISTMA',
		'ISLAS COCOS KEELING',
		'COLOMBIA',
		'COMOROS',
		'CONGO',
		'REP DEM CONGO',
		'ISLAS COOK',
		'COSTA RICA',
		'COSTA DE MARFIL',
		'CROACIA',
		'CUBA',
		'CURACAO',
		'CHIPRE',
		'REP CHECA',
		'DINAMARCA',
		'DJIBOUTI',
		'DOMINICA',
		'REP DOMINICANA',
		'ECUADOR',
		'EGIPTO',
		'EL SALVADOR',
		'GUINEA ECUATORIAL',
		'ERITREA',
		'ESTONIA',
		'ETIOPIA',
		'ISLAS FAROE',
		'FIJI',
		'FINLANDIA',
		'FRANCIA',
		'GUYANA FRANCESA',
		'POLINESIA FRANCESA',
		'GABON',
		'GAMBIA',
		'GEORGIA',
		'ALEMANIA',
		'GHANA',
		'GIBRALTAR',
		'GRECIA',
		'GROENLANDIA',
		'GRENADA',
		'GUADELUPE',
		'GUAM',
		'GUATEMALA',
		'GUERNSEY',
		'GUINEA',
		'GUINEA-BISSAU',
		'GUYANA',
		'HAITI',
		'ISLAS MCDONALD',
		'VATICANO',
		'HONDURAS',
		'HONG KONG',
		'HUNGARY',
		'ISLANDIA',
		'INDIA',
		'INDONESIA',
		'IRAN',
		'IRAK',
		'IRLANDA',
		'ISLA DE MAN',
		'ISRAEL',
		'ITALIA',
		'JAMAICA',
		'JAPAN',
		'JERSEY',
		'JORDANIA',
		'KAZAKHSTAN',
		'KENIA',
		'KIRIBATI',
		'NORKOREA',
		'SURKOREA',
		'KUWAIT',
		'KIRGYZSTAN',
		'LAO',
		'LETONIA',
		'LIBANO',
		'LESOTHO',
		'LIBERIA',
		'LIBIA',
		'LIECHTENSTEIN',
		'LITHUANIA',
		'LUXEMBURGO',
		'MACAO',
		'MACEDONIA',
		'MADAGASCAR',
		'MALAWI',
		'MALASIA',
		'MALDIVAS',
		'MALI',
		'MALTA',
		'ISLAS MARSHALL',
		'MARTINICA',
		'MAURITANIA',
		'MAURICIOS',
		'MAYOTE',
		'MEXICO',
		'MICRONESIA',
		'MOLDOVIA',
		'MONACO',
		'MONGOLIA',
		'MONTENEGRO',
		'MONTSERRAT',
		'MARRUECOS',
		'MOZAMBIQUE',
		'MYANMAR',
		'NAMIBIA',
		'NAURU',
		'NEPAL',
		'PAISES BAJOS',
		'NUEVA CALEDONIA',
		'NUEVA ZELANDA',
		'NICARAGUA',
		'NIGER',
		'NIGERIA',
		'ISLAS NORFOLK',
		'ISLAS MARIANAS',
		'NORUEGA',
		'OMAN',
		'PAKISTAN',
		'PALAU',
		'PALESTINA',
		'PANAMA',
		'PAPUA NUEVA GUINEA',
		'PARAGUAY',
		'PERU',
		'FILIPINAS',
		'POLONIA',
		'PORTUGAL',
		'PUERTO RICO',
		'QATAR',
		'REUNION',
		'RUMANIA',
		'RUSIA',
		'RUANDA',
		'SAN KITTS Y NEVIS',
		'SANTA LUCIA',
		'SAN PIERRE Y MIQUELON',
		'SAN VINCENTE Y GRENADINES',
		'SAMOA',
		'SAN MARINO',
		'SAN TOME Y PRINCIPE',
		'ARABIA SAUDI',
		'SENEGAL',
		'SERBIA',
		'SEYCHELLES',
		'SIERRA LEON',
		'SINGAPORE',
		'SAN MAARTEN',
		'ESLOVAKIA',
		'ESLOVENIA',
		'ISLAS SOLOMON',
		'SOMALIA',
		'SUDAFRICA',
		'SUDAN DEL SUR',
		'ESPAÑA',
		'SRI LANKA',
		'SUDAN',
		'SURINAM',
		'SUAZILANDIA',
		'SUECIA',
		'SUIZA',
		'SYRIA',
		'TAIWAN',
		'TAJIKISTAN',
		'TANZANIA',
		'TAILANDIA',
		'TIMOR-LESTE',
		'TOGO',
		'TOKELAU',
		'TONGA',
		'TRINIDAD Y TOBAGO',
		'TUNES',
		'TURQUIA',
		'TURKMENISTAN',
		'TURKS Y CAICOS',
		'TUVALU',
		'UGANDA',
		'UCRANIA',
		'EMIRATES ARABES',
		'REINO UNIDO',
		'ESTADOS UNIDOS',
		'URUGUAY',
		'UZBEKISTAN',
		'VANUATU',
		'VENEZUELA',
		'VIETNAM',
		'WALLIS Y FUTUNA',
		'SAHARA OCCIDENTAL',
		'YEMEN',
		'ISLAS VIRGENES UK',
		'ISLAS VIRGENES US',
		'ZAMBIA',
		'ZIMBABUE'],

		sx = ['Masculino', 'Femenino'],

		parentesco = ['Tia-o', 'Prima-o', 'Esposa-o', 'Hija-o', 'Padre', 'Madre', 'Abuela-o', 'Hermana-o', 'Cuñada-o', 'Nuera-o', 'Yerna-o', 'Suegra-o', 'Concubina-o', 'Padrino', 'Madrina', 'Ahijada-o'],

		siNo = ['Si', 'No'],

		ec = ['Casada-o', 'Soltera-o', 'Divorciada-o', 'Viuda-o'],

		spinTimeHide = 150, spinTimeHideMain = 850;

	hideSpinner = function(t) {
		$('#loadStart').fadeOut(t);
	};

	showSpinner = function(t) {
		$('#loadStart').fadeIn(t);
	}

	Array.prototype.toArrayArray = function() {
		var tmp = [];

		if (this !== undefined && this.length > 0) {
			for (var i = 0; i <= this.length - 1; i++) {
				var item = this[i];

				if (item.indexOf('|') >= 0) {
					var parts = item.split('|');

					if (parts.length > 0) {
						var tmpParts = [];

						for (var j = 0; j <= parts.length - 1; j++) {
							tmpParts.push(parts[j]);
						}

						tmp.push(tmpParts);
					}
				}
			}
		}
		else {
			tmp = this;
		}

		return tmp;
	}

	String.prototype.replaceAll = function(str1, str2, ignore) {
    	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
	};

	String.prototype.asStr = function() {
		return (this === undefined || this === null) ? '' : this;
	}

	parseJsonResult = function (result) {
		var jsonStr = JSON.stringify(result);
  		return eval('(' + jsonStr + ')');
	};

	findInPipedStr = function(str, find) {
		var result = false,
			parts = str.split('|');

		for (var i = 0; i <= parts.length - 1; i++) {
			if (parts[i].toLowerCase().indexOf(find.toLowerCase()) >= 0) {
				result = true;
				break;
			}
		}

		return result;
	};

	isValidPhoneNumber = function(ph) {
		var result = true;
		ph = ph.trim();

		if (ph.length > 1 && ph.length <= 15) {
			if (ph[0] !== '+') {
				result = false;
			}
			else {
				for (var i = 1; i <= ph.length - 1; i++) {
					if (isNaN(ph[i])) {
						result = false;
						break;
					}
				}
			}
		}
		else {
			result = false;
		}

		return result;
	};

	isValidPhoneNumbers = function(e) {
		return isValidWithCommas(e, isValidPhoneNumber);
	};

	isValidCountry = function(c) {
		var result = false;

		for (var i = 0; i <= countries.length - 1; i++) {
			var item = countries[i];

			if (c.toLowerCase() === item.toLowerCase()) {
				result = true;
				break;
			}
		}

		return result;
	};

    isValidCedula = function(cedula) {
    	var pattern = new RegExp(/^[[V|E|J|G]\d\d\d\d\d\d\d\d]{0,9}$/);

        return pattern.test(cedula);
    };

    isValidAlphaNum = function(str) {
    	var pattern = new RegExp(/^[0-9a-zA-Z]+$/);

    	return pattern.test(str);
    };

    isValidLetter = function(str) {
    	var pattern = new RegExp(/^[a-zA-Z]+$/);

    	return pattern.test(str);
    };

    isValidASpaces = function(str) {
    	var pattern = new RegExp(/[a-zA-Z ]+/);

    	return pattern.test(str);
    };

    isValidSexo = function(str) {
    	var result = false;

    	for (var i = 0; i <= sx.length - 1; i++) {
    		if (str.toLowerCase() === sx[i].toLowerCase()) {
    			result = true;
    			break;
    		}
    	}

    	return result;
    };

    isValidEstadoCivil = function(str, sexo) {
    	var result = false,
    		arr = ec;

    	for (var i = 0; i <= arr.length - 1; i++) {
    		if (str.toLowerCase() === arr[i].toLowerCase()) {
    			result = true;
    			break;
    		}
    	}

    	return result;
    };

    isValidAlphaSpaces = function(str) {
    	var result = true;

    	if (str.length > 1) {
    		if (isValidLetter(str[0])) {
    			for (var i = 1; i <= str.length - 1; i++) {
    				if (str[i] !== ' ') {
    					if (!isValidAlphaNumLatin(str[i])) {
    						result = false;
    						break;
    					}
    				}
    			}
    		}
    		else {
    			return false;
    		}
    	}
    	else {
    		return false;
    	}

    	return result;
    };

    isValidAlphaSpacesExt = function(str) {
    	var result = true;

    	if (str.length > 1) {
    		if (isValidLetter(str[0])) {
    			for (var i = 1; i <= str.length - 1; i++) {
    				if (str[i] !== ' ') {
    					if (isNaN(str[i])) {
    						if (!isValidAlphaNumLatin(str[i])) {
    							console.log(str[i]);
    							result = false;
    							break;
    						}
    					}
    				}
    			}
    		}
    		else {
    			return false;
    		}
    	}
    	else {
    		return false;
    	}

    	return result;
    };

    isValidEmail = function(e) {
    	var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

        return pattern.test(e);
    };

    isValidWeb = function(w) {
    	var pattern = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);

    	return pattern.test(w);
    };

    isValidWithCommas = function(e, func) {
    	if (e !== '') {
			var es = [],
				result = true;

			if (e.indexOf(',') >= 0) {
				es = e.split(',');
			}
			else {
				es.push(e);
			}

			for (var i = 0; i <= es.length - 1; i++) {
				var item = es[i].trim();

				if (!func(item)) {
					result = false;
					break;
				}
			}

			return result;
		}
		else {
			return false;
		}
    };

    isValidSiNo = function(v) {
    	return (v.toLowerCase() === 'si' || v.toLowerCase() === 'no') ? true : false;
    };

    isValidParentesco = function(p) {
    	var result = false;

    	for (var i = 0; i <= parentesco.length - 1; i++) {
    		if (parentesco[i].toLowerCase() === p.toLowerCase()) {
    			result = true;
    			break;
    		}
    	}

    	return result;
    };

    isValidWebs = function(e) {
    	return (e === '') ? true : isValidWithCommas(e, isValidWeb);
    };

    isValidEmails = function(e) {
    	return (e === '') ? true : isValidWithCommas(e, isValidEmail);
    };

    isValidAlphaNumLatin = function(str) {
    	var pattern = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/);

    	return pattern.test(str);
    };

    normalizeDate = function(s) {
    	return s.replace('/', '-').replace('/', '-');
    };

    //var pattern = new RegExp(/^(?=\d{2}([-.,\/])\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/);
    //return pattern.test(str);

    isValidDate = function(str) {
    	str = Date.parse(str, 'dd/mm/yyyy');
    	return (str !== null) ? true : false;
    }

    getAge = function(dateString) {
    	var dates = dateString.split('/');
	    var d = new Date();

	    var userday = dates[0];
	    var usermonth = dates[1];
	    var useryear = dates[2];

	    var curday = d.getDate();
	    var curmonth = d.getMonth()+1;
	    var curyear = d.getFullYear();

	    var age = curyear - useryear;

	    if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday   )){
	        age--;
	    }

	    return age;
	};

	isValidWorkingAge = function(age) {
		var a = getAge(age);
		return (a >= 18 && a <= 75) ? true : false;
	};

	isValidDateWorkingAge = function(str) {
		return (isValidDate(str) && isValidWorkingAge(str)) ? true : false;
	};

	isValidFloat = function(n) {
		return (!isNaN(n)) ? true : false;
	};

	isValidInt = function(n) {
		if (n.length > 0) {
 			var result = true;

			for (var i = 0; i <= n.length - 1; i++) {
				if (isNaN(n[i])) {
					result = false;
					break;
				}
			}

			return result;
		}
		else {
			return false;
		}
	};	

    fieldOnKey = function(e, isValidFunc, field, extraField, msg, nextField, canEmptyStr) {
    	var str = $(field).val(),
    		exStr = (extraField === undefined) ? $(extraField).val() : '',
    		result = false;

		if (str !== '') {
			var funcRes = (extraField === undefined) ? isValidFunc(str) : isValidFunc(str, exStr);

			if (!funcRes) {
				$(msg).show();	
			}
			else {
				$(msg).hide();

				if (e !== undefined && e.which === 13 && nextField !== undefined) {
					if (!$(nextField).is(':disabled')) {
						$(nextField).focus();
					}
				}

				result = true;
			}
		}
		else {
			$(msg).hide();
			
			result = (canEmptyStr) ? true : false;

			if (canEmptyStr) {
				if (e !== undefined && e.which === 13 && nextField !== undefined) {
					if (!$(nextField).is(':disabled')) {
						$(nextField).focus();
					}
				}
			}
		}

		return result;
    };

	// Login
	(function (login, $, undefined) {
	
		var _l = {
		};
		
		//
	
	}(window.login = window.login || {}, window.jQuery));

		// Main
	(function (main, $, undefined) {
	
		var _m = {
			
			showHidefd_MainBtnsDiv : function(div, opc) {
				if (opc) {
					$('#' + div).show();
				}
				else {
					$('#' + div).hide();
				}
			},

			hideDangerText : function() {
				// Tripulantes
				$('#fd_TripulantesEstadoCivilNoValida').hide();
				$('#fd_TripulantesSexoNoValida').hide();
				$('#fd_TripulantesProfesionNoValida').hide();
				$('#fd_TripulantesPaisNacimientoNoValida').hide();
				$('#fd_TripulantesProvinciaNacimientoNoValida').hide();
				$('#fd_TripulantesLugarNacimientoNoValida').hide();
				$('#fd_TripulantesFechaNacimientoNoValida').hide();
				$('#fd_TripulantesNombreCompletoNoValida').hide();
				$('#fd_TripulantesCedulaMarinaNoValida').hide();
				$('#fd_TripulantesCedulaNoValida').hide();

				// Datos-personales
				$('#fd_DatosPersonalesWebsNoValida').hide();
				$('#fd_DatosPersonalesEmailsNoValida').hide();
				$('#fd_DatosPersonalesDireccionNoValida').hide();
				$('#fd_DatosPersonalesTelefonosNoValida').hide();
				$('#fd_DatosPersonalesCedulaNoValida').hide();

				// Embarques
				$('#fd_EmbarquesBanderaBuqueNoValida').hide();
				$('#fd_EmbarquesPuertoBuqueNoValida').hide();
				$('#fd_EmbarquesCausaDesembarqueNoValida').hide();
				$('#fd_EmbarquesFechaDesembarqueNoValida').hide();
				$('#fd_EmbarquesFechaEmbarqueNoValida').hide();
				$('#fd_EmbarquesCargoBuqueNoValida').hide();
				$('#fd_EmbarquesClaseBuqueNoValida').hide();
				$('#fd_EmbarquesBuqueNoValida').hide();
				$('#fd_EmbarquesCapitanNoValida').hide();
				$('#fd_EmbarquesCedulaNoValida').hide();

				// Idiomas
				$('#fd_IdiomasLugarAprendizajeNoValida').hide();
				$('#fd_IdiomasAcentoNoValida').hide();
				$('#fd_IdiomasNivelHabladoNoValida').hide();
				$('#fd_IdiomasNivelEscritoNoValida').hide();
				$('#fd_IdiomasNivelLecturaNoValida').hide();
				$('#fd_IdiomasNombreNoValida').hide();
				$('#fd_IdiomasCedulaNoValida').hide();

				// Certificados
				$('#fd_CertificadosLugarExpedicionNoValida').hide();
				$('#fd_CertificadosNumeroCertificadoNoValida').hide();
				$('#fd_CertificadosFechaCaducidadNoValida').hide();
				$('#fd_CertificadosFechaExpedicionNoValida').hide();
				$('#fd_CertificadosNombreNoValida').hide();
				$('#fd_CertificadosCedulaNoValida').hide();

				// Datos-fisicos
				$('#fd_DatosFisicosZapatosNoValida').hide();
				$('#fd_DatosFisicosTallaNoValida').hide();
				$('#fd_DatosFisicosEstaturaNoValida').hide();
				$('#fd_DatosFisicosPesoNoValida').hide();
				$('#fd_DatosFisicosCedulaNoValida').hide();

				// Nacionalidades
				$('#fd_NacionalidadesLugarExpedicionNoValida').hide();
				$('#fd_NacionalidadesFechaCaducidadNoValida').hide();
				$('#fd_NacionalidadesFechaExpedicionNoValida').hide();
				$('#fd_NacionalidadesApellidosPasaporteNoValida').hide();
				$('#fd_NacionalidadesNombresPasaporteNoValida').hide();
				$('#fd_NacionalidadesNumeroPasaporteNoValida').hide();
				$('#fd_NacionalidadesNombreNoValida').hide();
				$('#fd_NacionalidadesCedulaNoValida').hide();

				// Visas
				$('#fd_VisasNumeroEntradasNoValida').hide();
				$('#fd_VisasFechaCaducidadNoValida').hide();
				$('#fd_VisasFechaExpedicionNoValida').hide();
				$('#fd_VisasLugarExpedicionNoValida').hide();
				$('#fd_VisasTipoVisaNoValida').hide();
				$('#fd_VisasNumeroPasaporteNoValida').hide();
				$('#fd_VisasCedulaNoValida').hide();

				// Familiares
				$('#fd_FamiliaresFechaDefuncionNoValida').hide();
				$('#fd_FamiliaresParentescoFamiliarNoValida').hide();
				$('#fd_FamiliaresCohabitaFamiliarNoValida').hide();
				$('#fd_FamiliaresDependienteFamiliarNoValida').hide();
				$('#fd_FamiliaresWebsFamiliarNoValida').hide();
				$('#fd_FamiliaresEmailsFamiliarNoValida').hide();
				$('#fd_FamiliaresDireccionFamiliarNoValida').hide();
				$('#fd_FamiliaresTelefonosFamiliarNoValida').hide();
				$('#fd_FamiliaresProfesionFamiliarNoValida').hide();
				$('#fd_FamiliaresPaisNacimientoFamiliarNoValida').hide();
				$('#fd_FamiliaresProvinciaNacimientoFamiliarNoValida').hide();
				$('#fd_FamiliaresLugarNacimientoFamiliarNoValida').hide();
				$('#fd_FamiliaresFechaNacimientoFamiliaNoValida').hide();
				$('#fd_FamiliaresNumeroHijosNoValida').hide();
				$('#fd_FamiliaresHastaFamiliarNoValida').hide();
				$('#fd_FamiliaresDesdeFamiliarNoValida').hide();
				$('#fd_FamiliaresSexoFamiliarNoValida').hide();
				$('#fd_FamiliaresApellidosFamiliarNoValida').hide();
				$('#fd_FamiliaresNombreFamiliarNoValida').hide();
				$('#fd_FamiliaresCedulaFamiliarNoValida').hide();
				$('#fd_FamiliaresCedulaNoValida').hide();

				// Cargos
				$('#fd_CargosDiasPagoNoValida').hide();
				$('#fd_CargosDiasDisfruteNoValida').hide();
				$('#fd_CargosMesesNoValida').hide();
				$('#fd_CargosBonoNoValida').hide();
				$('#fd_CargosSueldoNoValida').hide();
				$('#fd_CargosCargoNoValida').hide();
				$('#fd_CargosCedulaNoValida').hide();

				// Examenes
				$('#fd_ExamenesResultadoExamenNoValida').hide();
				$('#fd_ExamenesFechaCaducidadNoValida').hide();
				$('#fd_ExamenesFechaExamenNoValida').hide();
				$('#fd_ExamenesNombreExamenNoValida').hide();
				$('#fd_ExamenesCedulaNoValida').hide();

				// Clinicas
				$('#fd_ClinicasWebsClinicaNoValida').hide();
				$('#fd_ClinicasEmailsClinicaNoValida').hide();
				$('#fd_ClinicasTelefonosClinicaNoValida').hide();
				$('#fd_ClinicasDireccionClinicaNoValida').hide();
				$('#fd_ClinicasNombreClinicaNoValida').hide();
				$('#fd_ClinicasCedulaNoValida').hide();
			},

			hideTables : function() {
				_m.showHidefd_MainBtnsDiv('fd_TripulantesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_TripulantesTable', false);
			},

			hideForms : function() {
				_m.showHidefd_MainBtnsDiv('fd_TripulantesFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosFisicosFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosPersonalesFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_EmbarquesFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_IdiomasFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_CertificadosFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_NacionalidadesFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_VisasFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_FamiliaresFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_CargosFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_ExamenesFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_ClinicasFieldsDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_Main404Div', false);

				_m.showHidefd_MainBtnsDiv('fd_TripulantesTable', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosFisicosTable', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosPersonalesTable', false);
				_m.showHidefd_MainBtnsDiv('fd_EmbarquesTable', false);
				_m.showHidefd_MainBtnsDiv('fd_IdiomasTable', false);
				_m.showHidefd_MainBtnsDiv('fd_CertificadosTable', false);
				_m.showHidefd_MainBtnsDiv('fd_NacionalidadesTable', false);
				_m.showHidefd_MainBtnsDiv('fd_VisasTable', false);
				_m.showHidefd_MainBtnsDiv('fd_FamiliaresTable', false);
				_m.showHidefd_MainBtnsDiv('fd_CargosTable', false);
				_m.showHidefd_MainBtnsDiv('fd_ExamenesTable', false);
				_m.showHidefd_MainBtnsDiv('fd_ClinicasTable', false);

				$('#stackable_fd_TripulantesTableBuscar').val('');
				$('#stackable_fd_DatosFisicosTableBuscar').val('');
				$('#stackable_fd_DatosFisicosTableBuscar').val('');
				$('#stackable_fd_DatosPersonalesTableBuscar').val('');
				$('#stackable_fd_EmbarquesTableBuscar').val('');
				$('#stackable_fd_IdiomasTableBuscar').val('');
				$('#stackable_fd_CertificadosTableBuscar').val('');
				$('#stackable_fd_NacionalidadesTableBuscar').val('');
				$('#stackable_fd_VisasTableBuscar').val('');
				$('#stackable_fd_FamiliaresTableBuscar').val('');
				$('#stackable_fd_CargosTableBuscar').val('');
				$('#stackable_fd_ExamenesTableBuscar').val('');
				$('#stackable_fd_ClinicasTableBuscar').val('');
			},

			hideBtns : function() {
				_m.showHidefd_MainBtnsDiv('fd_MainTripulanteDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainDatosFisicosDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainDatosPersonalesDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainEmbarquesDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainIdiomasDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainCertificadosDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainNacionalidadesDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainVisasDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainFamiliaresDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainCargosDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainExamenesDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_MainClinicasDiv', false);
				_m.showHidefd_MainBtnsDiv('fd_Main404Div', false);

				_m.showHidefd_MainBtnsDiv('fd_TripulantesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosFisicosExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_DatosPersonalesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_EmbarquesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_IdiomasExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_CertificadosExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_NacionalidadesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_VisasExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_FamiliaresExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_CargosExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_ExamenesExtrasBtns', false);
				_m.showHidefd_MainBtnsDiv('fd_ClinicasExtrasBtns', false);
			},

			setCaptions : function(cMain) {
				$('#captionMain').html(cMain);
			}
		};

		main.hideBtns = function() {
			_m.hideBtns();
		};

		main.hideForms = function() {
			_m.hideForms();
			_m.hideDangerText();
		};

		main.setCaptions = function(cMain, cSmall) {
			_m.setCaptions(cMain, cSmall);
		};

		main.showHidefd_MainBtnsDiv = function(div, opc) {
			_m.showHidefd_MainBtnsDiv(div, opc);
		};
		
		_m.hideBtns();
		_m.hideForms();
		_m.hideTables();
	
	}(window.main = window.main || {}, window.jQuery));

	//Clinicas
	(function (main, clinicas, $, undefined) {

		var cedulas = [], dClinicas = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _c = {

			cleanFields : function() {
				$('#fd_ClinicasWebsClinica').val('');
				$('#fd_ClinicasEmailsClinica').val('');
				$('#fd_ClinicasTelefonosClinica').val('');
				$('#fd_ClinicasDireccionClinica').val('');
				$('#fd_ClinicasNombreClinica').val('');
				$('#fd_ClinicasCedula').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainClinicasDiv').hide();
			},

			cancelarClinicas : function() {
				_c.cleanFields();

				$('#fd_MainClinicasDiv').show();

				$('#fd_ClinicasFieldsDiv').hide();
				$('#fd_ClinicasFieldsDivMain').hide();
			},

			showfd_ClinicasFieldsDivMain : function(caption) {
				$('#fd_ClinicasFieldsDivCaption').text(caption);

				_c.hideMainBtns();
				_c.cleanFields();

				$('#fd_ClinicasFieldsDiv').show();
				$('#fd_ClinicasFieldsDivMain').show();
			},

			isValidClinicas : function() {
				var webs = $('#fd_ClinicasWebsClinica').val(),
					emails = $('#fd_ClinicasEmailsClinica').val(),
					telefonos = $('#fd_ClinicasTelefonosClinica').val(),
					direccion = $('#fd_ClinicasDireccionClinica').val(),
					nombre = $('#fd_ClinicasNombreClinica').val(),
					cedula = $('#fd_ClinicasCedula').val();

				return (isValidCedula(cedula) && isValidWebs(webs) && isValidEmails(emails) &&
					isValidPhoneNumbers(telefonos) && isValidAlphaSpaces(direccion) &&
					isValidAlphaNumLatin(nombre));
			},

			checkIsValidClinicas : function() {
				if (_c.isValidClinicas()) {
					$('#fd_GuardarClinicas').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarClinicas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadClinicas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.nombre !== '') {
							dClinicas.push(obj.cedula + '|' + obj.nombre + '|' + 
								obj.telefonos + '|' + obj.emails + '|' + 
								obj.webs);
						}
					}
				}
			},

			loadCedulasClinicas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessClinicas : function(result, optionsSuccess, msg) {
				_c.loadClinicas(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessClinicas : function(result, optionsSuccess, msg) {
				_c.loadCedulasClinicas(result);

				optionsSuccess();
			},

			onGAllNotSuccessClinicas : function(optionsNotSuccess, msg) {
				if (dClinicas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessClinicas : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarClinicasSuccess : function(result, optionsNotSuccess, msg) {
				swal('Clinica con esta cedula y nombre ya existe');
			},

			onGuardarClinicasNotSuccess : function(optionsNotSuccess, msg) {
				_c.commitClinicas();
			},

			guardarClinicas : function() {
				var cedula = $('#fd_ClinicasCedula').val(),
					nombre = $('#fd_ClinicasNombreClinica').val(),
					results = [];

				mytables.db.itemQueryAnd('clinicas', undefined, 'cedula', cedula, 'nombre', nombre, 
    				results, onSuccessOptions, onNotSuccessOptions, _c.onGuardarClinicasSuccess, 
    				_c.onGuardarClinicasNotSuccess, false, false);
			},

			onCommitClinicasSuccess : function(result, optionsSuccess, msg) {
				swal('Clinica ha sido guardada');

				$('#fd_GuardarClinicas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_c.cleanFields();
			},

			onCommitClinicasNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Clinica NO ha sido guardada');
			},

			commitClinicas : function() {
				var webs = $('#fd_ClinicasWebsClinica').val().replaceAll('http://', '').replaceAll('https://', ''),
					emails = $('#fd_ClinicasEmailsClinica').val(),
					telefonos = $('#fd_ClinicasTelefonosClinica').val(),
					direccion = $('#fd_ClinicasDireccionClinica').val(),
					nombre = $('#fd_ClinicasNombreClinica').val(),
					cedula = $('#fd_ClinicasCedula').val(),

					obj = {"cedula": cedula, "nombre": nombre, "direccion": direccion, "telefonos": telefonos,
						"emails": emails, "webs": webs};

				mytables.db.itemCreate('clinicas', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_c.onCommitClinicasSuccess, _c.onCommitClinicasNotSuccess);
			},

			cancelarClinicas : function() {
				_c.cleanFields();

				$('#fd_MainClinicasDiv').show();

				$('#fd_ClinicasFieldsDiv').hide();
				$('#fd_ClinicasFieldsDivMain').hide();
			}
		};

		gAllClinicas = function(onSuccessOptions) {
			dClinicas = [];

			mytables.db.listAll('clinicas', dClinicas, onSuccessOptions, onSuccessOptions, 
				_c.onGAllSuccessClinicas, _c.onGAllNotSuccessClinicas, true);
		};

		gAllCedulasClinicas = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessClinicas, _c.onGAllCedulasNotSuccessClinicas, true);
		};

		tACedulaClinicas = function() {
			$('#fd_ClinicasCedula').typeahead('destroy');
			
			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_ClinicasCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessClinicas = function(result, optionsSuccess, msg) {
			_c.onGAllCedulasSuccessClinicas(result, optionsSuccess, msg);
			
			tACedulaClinicas();
		};

		$('#fd_ClinicasCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_ClinicasCedula', undefined, '#fd_ClinicasCedulaNoValida', '#fd_ClinicasNombreClinica', false);

			_c.checkIsValidClinicas();
		});

		$('#fd_ClinicasNombreClinica').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNumLatin, '#fd_ClinicasNombreClinica', undefined, '#fd_ClinicasNombreClinicaNoValida', '#fd_ClinicasDireccionClinica', false);

			_c.checkIsValidClinicas();
		});

		$('#fd_ClinicasDireccionClinica').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_ClinicasDireccionClinica', undefined, '#fd_ClinicasDireccionClinicaNoValida', '#fd_ClinicasTelefonosClinica', false);

			_c.checkIsValidClinicas();
		});

		$('#fd_ClinicasTelefonosClinica').keyup(function (e) {
			fieldOnKey(e, isValidPhoneNumbers, '#fd_ClinicasTelefonosClinica', undefined, '#fd_ClinicasTelefonosClinicaNoValida', '#fd_ClinicasEmailsClinica', false);

			_c.checkIsValidClinicas();
		});

		$('#fd_ClinicasEmailsClinica').keyup(function (e) {
			fieldOnKey(e, isValidEmails, '#fd_ClinicasEmailsClinica', undefined, '#fd_ClinicasEmailsClinicaNoValida', '#fd_ClinicasWebsClinica', false);

			_c.checkIsValidClinicas();
		});

		$('#fd_ClinicasWebsClinica').keyup(function (e) {
			fieldOnKey(e, isValidWebs, '#fd_ClinicasWebsClinica', undefined, '#fd_ClinicasWebsClinicaNoValida', '#fd_GuardarClinicas', false);

			_c.checkIsValidClinicas();
		});

		nuevoClinica = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_c.showfd_ClinicasFieldsDivMain('Nueva Clinica');
				$('#fd_ClinicasCedula').focus();

				$('#fd_GuardarClinicas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		onSuccessExecuteEliminarClinicasTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllClinicas(modificarClinica);
		};

		executeEliminarClinicasTabla = function(cedula) {
			var nombre = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('clinicas', 'cedula', cedula, 'nombre', nombre, 
    			cedula, cedula, onSuccessExecuteEliminarClinicasTabla, 
    			function() {});
		};

		eliminarTableClinicas = function(cedula) {
			swal({title: 'Eliminar clinica de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar esta clinica.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarClinicasTabla(cedula);
				}
			);
		};

		modificarTablaClinicas = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_ClinicasTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CliModificar', '');
				$('#' + cedula + '_CliMenu').dropdown('toggle');

				modificarTablaClinicas(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CliEliminar', '');
				$('#' + cedula + '_CliMenu').dropdown('toggle');

				eliminarTableClinicas(cedula);

				return false;
			}
		});

		$('#stackable_fd_ClinicasTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_ClinicasTableBuscar').val();

			displayClinicas(fld);
		});

		displayClinicas = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_ClinicasTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Nom. Clinica</th><th>Nombre</th><th>Telefonos</th><th>Emails</th><th>Webs</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dClinicas.length - 1; i++) {
				if (buscarStr === '' || dClinicas[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dClinicas[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_CliMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_CliModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_CliEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_ClinicasTable').html(html);

			$('#stackable_fd_ClinicasTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		showBuscarClinicas = function(buscarStr) {
			if (dClinicas.length > 1) {
				$('#stackable_fd_ClinicasTableBuscar').show();

				$('#stackable_fd_ClinicasTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dClinicas.length.toString() + ' registros...');

				$('#stackable_fd_ClinicasTableCount').text(dClinicas.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_ClinicasTableBuscar').hide();
				$('#stackable_fd_ClinicasTableCount').text('0 registros');
			}
		};

		modificarClinica = function() {
			hideSpinner(spinTimeHide);

			if (dClinicas.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_ClinicasExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_ClinicasTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainClinicasDiv', false);

				showBuscarClinicas();
				displayClinicas('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_ClinicasExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_ClinicasTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainClinicasDiv', true);

				swal('No existen clinicas');
			}
		};

		$('#fd_NuevoClinica').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasClinicas(nuevoClinica);

			return false;
		});

		$('#fd_ModificarClinica').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllClinicas(modificarClinica);

			return false;
		});

		$('#fd_VolverClinica').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_ClinicasExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_ClinicasTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainClinicasDiv', true);

			return false;
		});

		$('#fd_CancelarClinicas').click(function(e) {
			e.preventDefault();

			_c.cancelarClinicas();

			return false;
		});
		
		$('#fd_GuardarClinicas').click(function(e) {
			e.preventDefault();

			_c.guardarClinicas();

			return false;
		});

		$('#fd_CancelarClinicas').keyup(function(e) {
			var enabled = !$('#fd_CancelarClinicas').is(':disabled');

			if (enabled && e.which === 13) {
				_c.cancelarClinicas();
			}
		});

		$('#fd_GuardarClinicas').keyup(function(e) {
			var enabled = !$('#fd_GuardarClinicas').is(':disabled');

			if (enabled && e.which === 13) {
				_c.guardarClinicas();
			}
		});

	}(window.main, window.clinicas = window.clinicas || {}, window.jQuery));
	
	//Examenes
	(function (main, examenes, $, undefined) {

		var cedulas = [], dExamenes = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _e = {
			cleanFields : function() {
				$('#fd_ExamenesResultadoExamen').val('');
				$('#fd_ExamenesFechaCaducidad').val('');
				$('#fd_ExamenesFechaExamen').val('');
				$('#fd_ExamenesNombreExamen').val('');
				$('#fd_ExamenesCedula').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainExamenesDiv').hide();
			},

			cancelarExamenes : function() {
				_e.cleanFields();

				$('#fd_MainExamenesDiv').show();

				$('#fd_ExamenesFieldsDiv').hide();
				$('#fd_ExamenesFieldsDivMain').hide();
			},

			showfd_ExamenesFieldsDivMain : function(caption) {
				$('#fd_ExamenesFieldsDivCaption').text(caption);

				_e.hideMainBtns();
				_e.cleanFields();

				$('#fd_ExamenesFieldsDiv').show();
				$('#fd_ExamenesFieldsDivMain').show();
			},

			isValidExamenes : function() {
				var cedula = $('#fd_ExamenesCedula').val(),
					resultadoExamen = $('#fd_ExamenesResultadoExamen').val(),
					fechaCaducidad = $('#fd_ExamenesFechaCaducidad').val(),
					fechaExamen = $('#fd_ExamenesFechaExamen').val(),
					nombreExamen = $('#fd_ExamenesNombreExamen').val();

				return (isValidCedula(cedula) && isValidAlphaNum(nombreExamen) && 
					isValidDate(fechaExamen) && _e.isValidDateExamen(fechaCaducidad) &&
					isValidAlphaSpaces(resultadoExamen));
			},

			checkIsValidExamenes : function() {
				if (_e.isValidExamenes()) {
					$('#fd_GuardarExamenes').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarExamenes').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadExamenes : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.fechaExamen !== '') {
							dExamenes.push(obj.cedula + '|' + obj.fechaExamen + '|' +
								obj.nombreExamen + '|' + obj.fechaCaducidad + '|' +
								obj.resultadoExamen);
						}
					}
				}
			},

			loadCedulasExamenes : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessExamenes : function(result, optionsSuccess, msg) {
				_e.loadExamenes(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessExamenes : function(result, optionsSuccess, msg) {
				_e.loadCedulasExamenes(result);

				optionsSuccess();
			},

			onGAllNotSuccessExamenes : function(optionsNotSuccess, msg) {
				if (dExamenes.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessExamenes : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarExamenesSuccess : function(result, optionsNotSuccess, msg) {
				swal('Examen con esta cedula y fecha de expedicion ya existe');
			},

			onGuardarExamenesNotSuccess : function(optionsNotSuccess, msg) {
				_e.commitExamenes();
			},

			guardarExamenes : function() {
				var cedula = $('#fd_ExamenesCedula').val(),
					fechaExamen = normalizeDate($('#fd_ExamenesFechaExamen').val()),
					results = [];

				mytables.db.itemQueryAnd('examenes', undefined, 'cedula', cedula, 'fechaExamen', fechaExamen, 
    				results, onSuccessOptions, onNotSuccessOptions, _e.onGuardarExamenesSuccess, 
    				_e.onGuardarExamenesNotSuccess, false, false);
			},

			onCommitExamenesSuccess : function(result, optionsSuccess, msg) {
				swal('Examen ha sido guardado');

				$('#fd_GuardarExamenes').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_e.cleanFields();
			},

			onCommitExamenesNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Examen NO ha sido guardado');
			},

			commitExamenes : function() {
				var cedula = $('#fd_ExamenesCedula').val(),
					resultadoExamen = $('#fd_ExamenesResultadoExamen').val(),
					fechaCaducidad = normalizeDate($('#fd_ExamenesFechaCaducidad').val()),
					fechaExamen = normalizeDate($('#fd_ExamenesFechaExamen').val()),
					nombreExamen = $('#fd_ExamenesNombreExamen').val(),

					obj = {"cedula": cedula, "resultadoExamen": resultadoExamen, "fechaCaducidad": fechaCaducidad,
						"fechaExamen": fechaExamen, "nombreExamen": nombreExamen};

				mytables.db.itemCreate('examenes', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_e.onCommitExamenesSuccess, _e.onCommitExamenesNotSuccess);
			},

			cancelarExamenes : function() {
				_e.cleanFields();

				$('#fd_MainExamenesDiv').show();

				$('#fd_ExamenesFieldsDiv').hide();
				$('#fd_ExamenesFieldsDivMain').hide();
			},

			isValidDateExamen : function(fe) {
				var fc = $('#fd_ExamenesFechaExamen').val();

				var end = Date.parse(fe, 'dd/mm/yyyy'),
					start = Date.parse(fc, 'dd/mm/yyyy');

				return (end >= start) ? true : false;
			}		
		};

		gAllExamenes = function(onSuccessOptions) {
			dExamenes = [];

			mytables.db.listAll('examenes', dExamenes, onSuccessOptions, onSuccessOptions, 
				_e.onGAllSuccessExamenes, _e.onGAllNotSuccessExamenes, true);
		};

		gAllCedulasExamenes = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessExamenes, _e.onGAllCedulasNotSuccessExamenes, true);
		};

		tACedulaExamenes = function() {
			$('#fd_ExamenesCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_ExamenesCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessExamenes = function(result, optionsSuccess, msg) {
			_e.onGAllCedulasSuccessExamenes(result, optionsSuccess, msg);
			
			tACedulaExamenes();
		};

		$('#fd_ExamenesCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_ExamenesCedula', undefined, '#fd_ExamenesCedulaNoValida', '#fd_ExamenesNombreExamen', false);

			_e.checkIsValidExamenes();
		});

		$('#fd_ExamenesNombreExamen').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNum, '#fd_ExamenesNombreExamen', undefined, '#fd_ExamenesNombreExamenNoValida', '#fd_ExamenesFechaExamen', false);

			_e.checkIsValidExamenes();
		});

		$('#fd_ExamenesFechaExamen').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_ExamenesFechaExamen', undefined, '#fd_ExamenesFechaExamenNoValida', '#fd_ExamenesFechaCaducidad', false);

			_e.checkIsValidExamenes();
		});

		$('#fd_ExamenesFechaCaducidad').keyup(function (e) {
			fieldOnKey(e, _e.isValidDateExamen, '#fd_ExamenesFechaCaducidad', undefined, '#fd_ExamenesFechaCaducidadNoValida', '#fd_ExamenesResultadoExamen', false);

			_e.checkIsValidExamenes();
		});

		$('#fd_ExamenesResultadoExamen').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_ExamenesResultadoExamen', undefined, '#fd_ExamenesResultadoExamenNoValida', '#fd_GuardarExamenes', false);

			_e.checkIsValidExamenes();
		});

		nuevoExamen = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_e.showfd_ExamenesFieldsDivMain('Nuevo Examen');
				$('#fd_ExamenesCedula').focus();

				$('#fd_GuardarExamenes').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		onSuccessExecuteEliminarExamenesTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllExamenes(modificarExamen);
		};

		executeEliminarExamenesTabla = function(cedula) {
			var fechaExamen = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('examenes', 'cedula', cedula, 'fechaExamen', fechaExamen,
    			cedula, cedula, onSuccessExecuteEliminarExamenesTabla, 
    			function() {});
		};

		eliminarTableExamenes = function(cedula) {
			swal({title: 'Eliminar examen de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este examen.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarExamenesTabla(cedula);
				}
			);
		};

		modificarTablaExamenes = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_ExamenesTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_ExaModificar', '');
				$('#' + cedula + '_ExaMenu').dropdown('toggle');

				modificarTablaExamenes(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_ExaEliminar', '');
				$('#' + cedula + '_ExaMenu').dropdown('toggle');

				eliminarTableExamenes(cedula);

				return false;
			}
		});

		$('#stackable_fd_ExamenesTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_ExamenesTableBuscar').val();

			displayExamenes(fld);
		});

		showBuscarExamenes = function() {
			if (dExamenes.length > 1) {
				$('#stackable_fd_ExamenesTableBuscar').show();

				$('#stackable_fd_ExamenesTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dExamenes.length.toString() + ' registros...');

				$('#stackable_fd_ExamenesTableCount').text(dExamenes.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_ExamenesTableBuscar').hide();
				$('#stackable_fd_ExamenesTableCount').text('0 registros');
			}
		};

		displayExamenes = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_ExamenesTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/F. Examen</th><th>F. Examen</th><th>N. Examen</th><th>F. Caducidad</th><th>Resultado</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dExamenes.length - 1; i++) {
				if (buscarStr === '' || dExamenes[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dExamenes[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_ExaMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_ExaModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_ExaEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_ExamenesTable').html(html);

			$('#stackable_fd_ExamanesTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};			

		modificarExamen = function() {
			hideSpinner(spinTimeHide);

			if (dExamenes.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_ExamenesExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_ExamenesTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainExamenesDiv', false);

				showBuscarExamenes();
				displayExamenes('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_ExamenesExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_ExamenesTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainExamenesDiv', true);

				swal('No existen examenes');
			}
		};

		$('#fd_NuevoExamen').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasExamenes(nuevoExamen);

			return false;
		});

		$('#fd_ModificarExamen').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllExamenes(modificarExamen);

			return false;
		});

		$('#fd_VolverExamen').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_ExamenesExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_ExamenesTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainExamenesDiv', true);

			return false;
		});

		$('#fd_CancelarExamenes').click(function(e) {
			e.preventDefault();

			_e.cancelarExamenes();

			return false;
		});
		
		$('#fd_GuardarExamenes').click(function(e) {
			e.preventDefault();

			_e.guardarExamenes();

			return false;
		});

		$('#fd_CancelarExamenes').keyup(function(e) {
			var enabled = !$('#fd_CancelarExamenes').is(':disabled');

			if (enabled && e.which === 13) {
				_e.cancelarExamenes();
			}
		});

		$('#fd_GuardarExamenes').keyup(function(e) {
			var enabled = !$('#fd_GuardarExamenes').is(':disabled');

			if (enabled && e.which === 13) {
				_e.guardarExamenes();
			}
		});

	}(window.main, window.examenes = window.examenes || {}, window.jQuery));

	//Cargos
	(function (main, cargos, $, undefined) {
		
		var cedulas = [], dCargos = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _c = {
			cleanFields : function() {
				$('#fd_CargosCedula').val('');
				$('#fd_CargosCargo').val('');
				$('#fd_CargosSueldo').val('');
				$('#fd_CargosBono').val('');
				$('#fd_CargosMesesDisfrute').val('');
				$('#fd_CargosDiasDisfrute').val('');
				$('#fd_CargosDiasPago').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainCargosDiv').hide();
			},

			cancelarCargos : function() {
				_c.cleanFields();

				$('#fd_MainCargosDiv').show();

				$('#fd_CargosFieldsDiv').hide();
				$('#fd_CargosFieldsDivMain').hide();
			},

			showfd_CargosFieldsDivMain : function(caption) {
				$('#fd_CargosFieldsDivCaption').text(caption);

				_c.hideMainBtns();
				_c.cleanFields();

				$('#fd_CargosFieldsDiv').show();
				$('#fd_CargosFieldsDivMain').show();
			},

			isValidCargos : function() {
				var cedula = $('#fd_CargosCedula').val(),
					cargo = $('#fd_CargosCargo').val(),
					sueldo = $('#fd_CargosSueldo').val(),
					bono = $('#fd_CargosBono').val(),
					mesesDisfrute = $('#fd_CargosMesesDisfrute').val(),
					diasDisfrute = $('#fd_CargosDiasDisfrute').val(),
					diasPago = $('#fd_CargosDiasPago').val();

				return (isValidCedula(cedula) && isValidAlphaSpaces(cargo) && 
					isValidFloat(sueldo) && isValidFloat(bono) && isValidInt(mesesDisfrute) &&
					isValidInt(diasDisfrute) && isValidInt(diasPago));
			},

			checkIsValidCargos : function() {
				if (_c.isValidCargos()) {
					$('#fd_GuardarCargos').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarCargos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadCargos : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.cargo !== '') {
							dCargos.push(obj.cedula + '|' + obj.cargo + '|' + 
								obj.sueldo + '|' + obj.bono + '|' + obj.mesesDisfrute + '|' +
								obj.diasDisfrute + '|' + obj.diasPago);
						}
					}
				}
			},

			loadCedulasCargos : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessCargos : function(result, optionsSuccess, msg) {
				_c.loadCargos(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessCargos : function(result, optionsSuccess, msg) {
				_c.loadCedulasCargos(result);

				optionsSuccess();
			},

			onGAllNotSuccessCargos : function(optionsNotSuccess, msg) {
				if (dCargos.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}	
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessCargos : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarCargosSuccess : function(result, optionsNotSuccess, msg) {
				swal('Cargo con esta cedula y nombre de cargo ya existe');
			},

			onGuardarCargosNotSuccess : function(optionsNotSuccess, msg) {
				_c.commitCargos();
			},

			guardarCargos : function() {
				var cedula = $('#fd_CargosCedula').val(),
					cargo = $('#fd_CargosCargo').val(),
					results = [];

				mytables.db.itemQueryAnd('cargos', undefined, 'cedula', cedula, 'cargo', cargo, 
    				results, onSuccessOptions, onNotSuccessOptions, _c.onGuardarCargosSuccess, 
    				_c.onGuardarCargosNotSuccess, false, false);
			},

			onCommitCargosSuccess : function(result, optionsSuccess, msg) {
				swal('Cargo ha sido guardado');

				$('#fd_GuardarCargos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_c.cleanFields();
			},

			onCommitCargosNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Cargo NO ha sido guardado');
			},

			commitCargos : function() {
				var cedula = $('#fd_CargosCedula').val(),
					cargo = $('#fd_CargosCargo').val(),
					sueldo = $('#fd_CargosSueldo').val(),
					bono = $('#fd_CargosBono').val(),
					mesesDisfrute = $('#fd_CargosMesesDisfrute').val(),
					diasDisfrute = $('#fd_CargosDiasDisfrute').val(),
					diasPago = $('#fd_CargosDiasPago').val(),

					obj = {"cedula": cedula, "cargo": cargo, "sueldo": sueldo,
						"bono": bono, "mesesDisfrute": mesesDisfrute,
						"diasDisfrute": diasDisfrute, "diasPago": diasPago};

				mytables.db.itemCreate('cargos', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_c.onCommitCargosSuccess, _c.onCommitCargosNotSuccess);
			},

			cancelarCargos : function() {
				_c.cleanFields();

				$('#fd_MainCargosDiv').show();

				$('#fd_CargosFieldsDiv').hide();
				$('#fd_CargosFieldsDivMain').hide();
			}			
		};

		gAllCargos = function(onSuccessOptions) {
			dCargos = [];

			mytables.db.listAll('cargos', dCargos, onSuccessOptions, onSuccessOptions,
				_c.onGAllSuccessCargos, _c.onGAllNotSuccessCargos, true);
		};

		gAllCedulasCargos = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessCargos, _c.onGAllCedulasNotSuccessCargos, true);
		};

		tACedulaCargos = function() {
			$('#fd_CargosCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_CargosCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessCargos = function(result, optionsSuccess, msg) {
			_c.onGAllCedulasSuccessCargos(result, optionsSuccess, msg);
			
			tACedulaCargos();
		};

		$('#fd_CargosCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_CargosCedula', undefined, '#fd_CargosCedulaNoValida', '#fd_CargosCargo', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosCargo').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_CargosCargo', undefined, '#fd_CargosCargoNoValida', '#fd_CargosSueldo', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosSueldo').keyup(function (e) {
			fieldOnKey(e, isValidFloat, '#fd_CargosSueldo', undefined, '#fd_CargosSueldoNoValida', '#fd_CargosBono', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosBono').keyup(function (e) {
			fieldOnKey(e, isValidFloat, '#fd_CargosBono', undefined, '#fd_CargosBonoNoValida', '#fd_CargosMesesDisfrute', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosMesesDisfrute').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_CargosMesesDisfrute', undefined, '#fd_CargosMesesNoValida', '#fd_CargosDiasDisfrute', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosDiasDisfrute').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_CargosDiasDisfrute', undefined, '#fd_CargosDiasDisfruteNoValida', '#fd_CargosDiasPago', false);
			
			_c.checkIsValidCargos();
		});

		$('#fd_CargosDiasPago').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_CargosDiasPago', undefined, '#fd_CargosDiasPagoNoValida', '#fd_GuardarCargos', false);
			
			_c.checkIsValidCargos();
		});

		onSuccessExecuteEliminarCargosTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllCargos(modificarCargo);
		};

		executeEliminarCargosTabla = function(cedula) {
			var cargo = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('cargos', 'cedula', cedula, 'cargo', cargo,
    			cedula, cedula, onSuccessExecuteEliminarCargosTabla, 
    			function() {});
		};

		eliminarTableCargos = function(cedula) {
			swal({title: 'Eliminar cargo de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este cargo.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarCargosTabla(cedula);
				}
			);
		};

		modificarTablaCargos = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_CargosTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CargosModificar', '');
				$('#' + cedula + '_CargosMenu').dropdown('toggle');

				modificarTablaCargos(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CargosEliminar', '');
				$('#' + cedula + '_CargosMenu').dropdown('toggle');

				eliminarTableCargos(cedula);

				return false;
			}
		});

		$('#stackable_fd_CargosTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_CargosTableBuscar').val();

			displayCargos(fld);
		});

		showBuscarCargos = function() {
			if (dCargos.length > 1) {
				$('#stackable_fd_CargosTableBuscar').show();

				$('#stackable_fd_CargosTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dCargos.length.toString() + ' registros...');

				$('#stackable_fd_CargosTableCount').text(dCargos.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_CargosTableBuscar').hide();
				$('#stackable_fd_CargosTableCount').text('0 registros');
			}
		};

		displayCargos = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_CargosTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Cargo</th><th>Sueldo</th><th>Bono</th><th>Meses Disfrute</th><th>Dias Disfrute</th><th>Dias Pago</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dCargos.length - 1; i++) {
				if (buscarStr === '' || dCargos[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dCargos[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_CargosMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_CargosModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_CargosEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[2] + '</td><td>' +
							parts[3] + '</td><td>' + parts[4] + '</td><td>' + parts[5] + '</td><td>' +
							parts[6] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_CargosTable').html(html);

			$('#stackable_fd_CargosTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarCargo = function() {
			hideSpinner(spinTimeHide);

			if (dCargos.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_CargosExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_CargosTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainCargosDiv', false);

				showBuscarCargos();
				displayCargos('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_CargosExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_CargosTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainCargosDiv', true);

				swal('No existen cargos');
			}
		};

		nuevoCargo = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_c.showfd_CargosFieldsDivMain('Nuevo Cargo');
				$('#fd_CargosCedula').focus();

				$('#fd_GuardarCargos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_NuevoCargo').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasCargos(nuevoCargo);

			return false;
		});

		$('#fd_ModificarCargo').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCargos(modificarCargo);

			return false;
		});

		$('#fd_VolverCargo').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_CargosExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_CargosTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainCargosDiv', true);

			return false;
		});

		$('#fd_CancelarCargos').click(function(e) {
			e.preventDefault();

			_c.cancelarCargos();

			return false;
		});
		
		$('#fd_GuardarCargos').click(function(e) {
			e.preventDefault();

			_c.guardarCargos();

			return false;
		});

		$('#fd_CancelarCargos').keyup(function(e) {
			var enabled = !$('#fd_CancelarCargos').is(':disabled');

			if (enabled && e.which === 13) {
				_c.cancelarCargos();
			}
		});

		$('#fd_GuardarCargos').keyup(function(e) {
			var enabled = !$('#fd_GuardarCargos').is(':disabled');

			if (enabled && e.which === 13) {
				_c.guardarCargos();
			}
		});

	}(window.main, window.cargos = window.cargos || {}, window.jQuery));

	//Familiares
	(function (main, familiares, $, undefined) {

		var cedulas = [], dFamiliares = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _f = {
			cleanFields : function() {
				$('#fd_FamiliaresCedula').val('');
				$('#fd_FamiliaresCedulaFamiliar').val('');
				$('#fd_FamiliaresNombreFamiliar').val('');
				$('#fd_FamiliaresApellidosFamiliar').val('');
				$('#fd_FamiliaresSexoFamiliar').val('');
				$('#fd_FamiliaresDesdeFamiliar').val('');
				$('#fd_FamiliaresHastaFamiliar').val('');
				$('#fd_FamiliaresNumeroHijos').val('');
				$('#fd_FamiliaresFechaNacimientoFamiliar').val('');
				$('#fd_FamiliaresLugarNacimientoFamiliar').val('');
				$('#fd_FamiliaresProvinciaNacimientoFamiliar').val('');
				$('#fd_FamiliaresPaisNacimientoFamiliar').val('');
				$('#fd_FamiliaresProfesionFamiliar').val('');
				$('#fd_FamiliaresTelefonosFamiliar').val('');
				$('#fd_FamiliaresDireccionFamiliar').val('');
				$('#fd_FamiliaresEmailsFamiliar').val('');
				$('#fd_FamiliaresWebsFamiliar').val('');
				$('#fd_FamiliaresDependienteFamiliar').val('');
				$('#fd_FamiliaresCohabitaFamiliar').val('');
				$('#fd_FamiliaresFechaDefuncionFamiliar').val('');
				$('#fd_FamiliaresParentescoFamiliar').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainFamiliaresDiv').hide();
			},

			cancelarFamiliares : function() {
				_f.cleanFields();

				$('#fd_MainFamiliaresDiv').show();

				$('#fd_FamiliaresFieldsDiv').hide();
				$('#fd_FamiliaresFieldsDivMain').hide();
			},

			showfd_FamiliaresFieldsDivMain : function(caption) {
				$('#fd_FamiliaresFieldsDivCaption').text(caption);

				_f.hideMainBtns();
				_f.cleanFields();

				$('#fd_FamiliaresFieldsDiv').show();
				$('#fd_FamiliaresFieldsDivMain').show();
			},

			isValidDesdeF : function(desde) {
				if (desde === '') {
					return true;
				}
				else {
					return isValidDate(desde);
				}
			},

			isValidHastaF :function(hasta) {
				var desde = desdeFamiliar = $('#fd_FamiliaresDesdeFamiliar').val();

				if (desde === '') {
					return (hasta === '') ? true : false;
				}
				else {
					if (isValidDate(desde) && isValidDate(hasta)) {
						var end = Date.parse(hasta, 'dd/mm/yyyy'),
							start = Date.parse(desde, 'dd/mm/yyyy');

						return (start <= end) ? true : false;
					}
					else {
						return false;
					}
				}
			},

			isValidFechaDefuncion : function(hasta) {
				var desde = $('#fd_FamiliaresFechaNacimientoFamiliar').val();

				if (hasta === '') {
					return true;
				}
				else {
					if (isValidDate(desde) && isValidDate(hasta)) {
						var end = Date.parse(hasta, 'dd/mm/yyyy'),
							start = Date.parse(desde, 'dd/mm/yyyy');

						return (start <= end) ? true : false;
					}
					else {
						return false;
					}
				}
			},

			isValidCedulaFamiliar : function(c) {
				if (isValidCedula(c)) {
					if (cedulas.length > 0) {
						var result = true;

						for (var i = 0; i <= cedulas.length - 1; i++) {
							if (cedulas[i].toLowerCase() === c.toLowerCase()) {
								result = false;
								break;
							}
						}

						return result;
					}
					else {
						return true;
					}
				}
				else {
					return false;
				}
			},

			isValidFamiliares : function() {
				var cedula = $('#fd_FamiliaresCedula').val(),
					cedulaFamiliar = $('#fd_FamiliaresCedulaFamiliar').val(),
					nombreFamiliar = $('#fd_FamiliaresNombreFamiliar').val(),
					apellidosFamiliar = $('#fd_FamiliaresApellidosFamiliar').val(),
					sexoFamiliar = $('#fd_FamiliaresSexoFamiliar').val(),
					desdeFamiliar = $('#fd_FamiliaresDesdeFamiliar').val(),
					hastaFamiliar = $('#fd_FamiliaresHastaFamiliar').val(),
					numeroHijos = $('#fd_FamiliaresNumeroHijos').val(),
					fechaNacimientoFamiliar = $('#fd_FamiliaresFechaNacimientoFamiliar').val(),
					lugarNacimientoFamiliar = $('#fd_FamiliaresLugarNacimientoFamiliar').val(),
					provinciaNacimientoFamiliar = $('#fd_FamiliaresProvinciaNacimientoFamiliar').val(),
					paisNacimientoFamiliar = $('#fd_FamiliaresPaisNacimientoFamiliar').val(),
					profesionFamiliar = $('#fd_FamiliaresProfesionFamiliar').val(),
					telefonosFamiliar = $('#fd_FamiliaresTelefonosFamiliar').val(),
					direccionFamiliar = $('#fd_FamiliaresDireccionFamiliar').val(),
					emailsFamiliar = $('#fd_FamiliaresEmailsFamiliar').val(),
					websFamiliar = $('#fd_FamiliaresWebsFamiliar').val(),
					dependienteFamiliar = $('#fd_FamiliaresDependienteFamiliar').val(),
					cohabitaFamiliar = $('#fd_FamiliaresCohabitaFamiliar').val(),
					fechaDefuncionFamiliar = $('#fd_FamiliaresFechaDefuncionFamiliar').val(),
					parentescoFamiliar = $('#fd_FamiliaresParentescoFamiliar').val();

				return (isValidCedula(cedula) && _f.isValidCedulaFamiliar(cedulaFamiliar) && 
					isValidAlphaNumLatin(nombreFamiliar) && isValidAlphaNumLatin(apellidosFamiliar) &&
					isValidSexo(sexoFamiliar) && _f.isValidDesdeF(desdeFamiliar) && _f.isValidHastaF(hastaFamiliar) &&
					isValidInt(numeroHijos) && isValidDate(fechaNacimientoFamiliar) && 
					isValidAlphaSpaces(lugarNacimientoFamiliar) && isValidAlphaSpaces(provinciaNacimientoFamiliar) &&
					isValidAlphaSpaces(paisNacimientoFamiliar) && isValidAlphaSpaces(profesionFamiliar) &&
					isValidPhoneNumbers(telefonosFamiliar) && isValidAlphaSpaces(direccionFamiliar) &&
					isValidEmails(emailsFamiliar) && isValidWebs(websFamiliar) && isValidSiNo(dependienteFamiliar) &&
					isValidSiNo(cohabitaFamiliar) && _f.isValidFechaDefuncion(fechaDefuncionFamiliar) &&
					isValidParentesco(parentescoFamiliar));
			},

			checkIsValidFamiliares : function() {
				if (_f.isValidFamiliares()) {
					$('#fd_GuardarFamiliares').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarFamiliares').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadFamiliares : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.cedulaFamiliar !== '') {
							dFamiliares.push(obj.cedula + '|' + obj.cedulaFamiliar + '|' + 
								obj.nombreFamiliar + '|' + obj.apellidosFamiliar + '|'  +
								obj.sexoFamiliar + '|' + obj.desdeFamiliar + '|' + 
								obj.hastaFamiliar + '|' + obj.numeroHijos + '|' + 
								obj.fechaNacimientoFamiliar + '|' + obj.lugarNacimientoFamiliar + '|' +
								obj.lugarNacimientoFamiliar + '|' + obj.provinciaNacimientoFamiliar + '|' +
								obj.paisNacimientoFamiliar + '|' + obj.profesionFamiliar + '|' +
								obj.telefonosFamiliar + '|' + obj.direccionFamiliar + '|' +
								obj.emailsFamiliar + '|' + obj.websFamiliar + '|' +
								obj.dependienteFamiliar + '|' + obj.cohabitaFamiliar + '|' +
								obj.fechaDefuncionFamiliar + '|' + obj.parentescoFamiliar);
						}
					}
				}
			},

			loadCedulasFamiliares : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessFamiliares : function(result, optionsSuccess, msg) {
				_f.loadFamiliares(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessFamiliares : function(result, optionsSuccess, msg) {
				_f.loadCedulasFamiliares(result);

				optionsSuccess();
			},

			onGAllNotSuccessFamiliares : function(optionsNotSuccess, msg) {
				if (dFamiliares.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessFamiliares : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarFamiliaresSuccess : function(result, optionsNotSuccess, msg) {
				swal('Familiar con estas cedulas ya existe');
			},

			onGuardarFamiliaresNotSuccess : function(optionsNotSuccess, msg) {
				_f.commitFamiliares();
			},

			guardarFamiliares : function() {
				var cedula = $('#fd_FamiliaresCedula').val(),
					cedulaFamiliar = $('#fd_FamiliaresCedulaFamiliar').val(),
					results = [];

				mytables.db.itemQueryAnd('familiares', undefined, 'cedula', cedula, 'cedulaFamiliar', cedulaFamiliar, 
    				results, onSuccessOptions, onNotSuccessOptions, _f.onGuardarFamiliaresSuccess, 
    				_f.onGuardarFamiliaresNotSuccess, false, false);
			},

			onCommitFamiliaresSuccess : function(result, optionsSuccess, msg) {
				swal('Familiar ha sido guardado');

				$('#fd_GuardarFamiliares').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_f.cleanFields();
			},

			onCommitFamiliaresNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Familiar NO ha sido guardado');
			},

			commitFamiliares : function() {
				var cedula = $('#fd_FamiliaresCedula').val(),
					cedulaFamiliar = $('#fd_FamiliaresCedulaFamiliar').val(),
					nombreFamiliar = $('#fd_FamiliaresNombreFamiliar').val(),
					apellidosFamiliar = $('#fd_FamiliaresApellidosFamiliar').val(),
					sexoFamiliar = $('#fd_FamiliaresSexoFamiliar').val(),
					desdeFamiliar = normalizeDate($('#fd_FamiliaresDesdeFamiliar').val()),
					hastaFamiliar = normalizeDate($('#fd_FamiliaresHastaFamiliar').val()),
					numeroHijos = $('#fd_FamiliaresNumeroHijos').val(),
					fechaNacimientoFamiliar = normalizeDate($('#fd_FamiliaresFechaNacimientoFamiliar').val()),
					lugarNacimientoFamiliar = $('#fd_FamiliaresLugarNacimientoFamiliar').val(),
					provinciaNacimientoFamiliar = $('#fd_FamiliaresProvinciaNacimientoFamiliar').val(),
					paisNacimientoFamiliar = $('#fd_FamiliaresPaisNacimientoFamiliar').val(),
					profesionFamiliar = $('#fd_FamiliaresProfesionFamiliar').val(),
					telefonosFamiliar = $('#fd_FamiliaresTelefonosFamiliar').val(),
					direccionFamiliar = $('#fd_FamiliaresDireccionFamiliar').val(),
					emailsFamiliar = $('#fd_FamiliaresEmailsFamiliar').val(),
					websFamiliar = $('#fd_FamiliaresWebsFamiliar').val().replaceAll('http://', '').replaceAll('https://', ''),
					dependienteFamiliar = $('#fd_FamiliaresDependienteFamiliar').val(),
					cohabitaFamiliar = $('#fd_FamiliaresCohabitaFamiliar').val(),
					fechaDefuncionFamiliar = normalizeDate($('#fd_FamiliaresFechaDefuncionFamiliar').val()),
					parentescoFamiliar = $('#fd_FamiliaresParentescoFamiliar').val(),

					obj = {"cedula": cedula, "cedulaFamiliar": cedulaFamiliar, "nombreFamiliar": nombreFamiliar,
						"apellidosFamiliar": apellidosFamiliar, "sexoFamiliar": sexoFamiliar, "desdeFamiliar": desdeFamiliar,
						"hastaFamiliar": hastaFamiliar, "numeroHijos": numeroHijos, "fechaNacimientoFamiliar": fechaNacimientoFamiliar,
						"lugarNacimientoFamiliar": lugarNacimientoFamiliar, "provinciaNacimientoFamiliar": provinciaNacimientoFamiliar,
						"paisNacimientoFamiliar": paisNacimientoFamiliar, "profesionFamiliar": profesionFamiliar, "telefonosFamiliar":
						telefonosFamiliar, "direccionFamiliar": direccionFamiliar, "emailsFamiliar": emailsFamiliar, "websFamiliar": websFamiliar,
						"dependienteFamiliar": dependienteFamiliar, "cohabitaFamiliar": cohabitaFamiliar, "fechaDefuncionFamiliar": fechaDefuncionFamiliar,
						"parentescoFamiliar": parentescoFamiliar};

				mytables.db.itemCreate('familiares', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_f.onCommitFamiliaresSuccess, _f.onCommitFamiliaresNotSuccess);
			}
		};

		gAllSexoFamiliares = function() {
			tASexoFamiliares();
		};

		gAllParentescoFamiliares = function() {
			tAParentescoFamiliares();
		};
		
		gAllSiNo = function() {
			tADependienteFamiliares();	
			tACohabitaFamiliares();
		};

		gAllFamiliares = function(onSuccessOptions) {
			dFamiliares = [];

			mytables.db.listAll('familiares', dFamiliares, onSuccessOptions, onSuccessOptions, 
				_f.onGAllSuccessFamiliares, _f.onGAllNotSuccessFamiliares, true);
		};

		gAllCedulasFamiliares = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessFamiliares, _f.onGAllCedulasNotSuccessFamiliares, true);
		};

		tASexoFamiliares = function() {
			$('#fd_FamiliaresSexoFamiliar').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(sx, function(s) {
		  			return {value: s}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_FamiliaresSexoFamiliar').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'sx',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		tAParentescoFamiliares = function() {
			$('#fd_FamiliaresParentescoFamiliar').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(parentesco, function(p) {
		  			return {value: p}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_FamiliaresParentescoFamiliar').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'parentesco',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		tADependienteFamiliares = function() {
			$('#fd_FamiliaresDependienteFamiliar').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(siNo, function(sn) {
		  			return {value: sn}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_FamiliaresDependienteFamiliar').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'siNo',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		tACohabitaFamiliares = function() {
			$('#fd_FamiliaresCohabitaFamiliar').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(siNo, function(sn) {
		  			return {value: sn}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_FamiliaresCohabitaFamiliar').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'siNo',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		tACedulaFamiliares = function() {
			$('#fd_FamiliaresCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_FamiliaresCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessFamiliares = function(result, optionsSuccess, msg) {
			_f.onGAllCedulasSuccessFamiliares(result, optionsSuccess, msg);
			
			tACedulaFamiliares();
		};

		$('#fd_FamiliaresCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_FamiliaresCedula', undefined, '#fd_FamiliaresCedulaNoValida', '#fd_FamiliaresCedulaFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresCedulaFamiliar').keyup(function (e) {
			fieldOnKey(e, _f.isValidCedulaFamiliar, '#fd_FamiliaresCedulaFamiliar', undefined, '#fd_FamiliaresCedulaFamiliarNoValida', '#fd_FamiliaresNombreFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresNombreFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNumLatin, '#fd_FamiliaresNombreFamiliar', undefined, '#fd_FamiliaresNombreFamiliarNoValida', '#fd_FamiliaresApellidosFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresApellidosFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNumLatin, '#fd_FamiliaresApellidosFamiliar', undefined, '#fd_FamiliaresApellidosFamiliarNoValida', '#fd_FamiliaresSexoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresSexoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidSexo, '#fd_FamiliaresSexoFamiliar', undefined, '#fd_FamiliaresSexoFamiliarNoValida', '#fd_FamiliaresDesdeFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresDesdeFamiliar').keyup(function (e) {
			fieldOnKey(e, _f.isValidDesdeF, '#fd_FamiliaresDesdeFamiliar', undefined, '#fd_FamiliaresDesdeFamiliarNoValida', '#fd_FamiliaresHastaFamiliar', true);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresHastaFamiliar').keyup(function (e) {
			fieldOnKey(e, _f.isValidHastaF, '#fd_FamiliaresHastaFamiliar', undefined, '#fd_FamiliaresHastaFamiliarNoValida', '#fd_FamiliaresNumeroHijos', true);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresNumeroHijos').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_FamiliaresNumeroHijos', undefined, '#fd_FamiliaresNumeroHijosNoValida', '#fd_FamiliaresFechaNacimientoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresFechaNacimientoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_FamiliaresFechaNacimientoFamiliar', undefined, '#fd_FamiliaresFechaNacimientoFamiliaNoValida', '#fd_FamiliaresLugarNacimientoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresLugarNacimientoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_FamiliaresLugarNacimientoFamiliar', undefined, '#fd_FamiliaresLugarNacimientoFamiliarNoValida', '#fd_FamiliaresProvinciaNacimientoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresProvinciaNacimientoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_FamiliaresProvinciaNacimientoFamiliar', undefined, '#fd_FamiliaresProvinciaNacimientoFamiliarNoValida', '#fd_FamiliaresPaisNacimientoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresPaisNacimientoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_FamiliaresPaisNacimientoFamiliar', undefined, '#fd_FamiliaresPaisNacimientoFamiliarNoValida', '#fd_FamiliaresProfesionFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresProfesionFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_FamiliaresProfesionFamiliar', undefined, '#fd_FamiliaresProfesionFamiliarNoValida', '#fd_FamiliaresTelefonosFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresTelefonosFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidPhoneNumbers, '#fd_FamiliaresTelefonosFamiliar', undefined, '#fd_FamiliaresTelefonosFamiliarNoValida', '#fd_FamiliaresDireccionFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresDireccionFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_FamiliaresDireccionFamiliar', undefined, '#fd_FamiliaresDireccionFamiliarNoValida', '#fd_FamiliaresEmailsFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresEmailsFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidEmails, '#fd_FamiliaresEmailsFamiliar', undefined, '#fd_FamiliaresEmailsFamiliarNoValida', '#fd_FamiliaresWebsFamiliar', true);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresWebsFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidWebs, '#fd_FamiliaresWebsFamiliar', undefined, '#fd_FamiliaresWebsFamiliarNoValida', '#fd_FamiliaresDependienteFamiliar', true);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresDependienteFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidSiNo, '#fd_FamiliaresDependienteFamiliar', undefined, '#fd_FamiliaresDependienteFamiliarNoValida', '#fd_FamiliaresCohabitaFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresCohabitaFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidSiNo, '#fd_FamiliaresCohabitaFamiliar', undefined, '#fd_FamiliaresCohabitaFamiliarNoValida', '#fd_FamiliaresParentescoFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresParentescoFamiliar').keyup(function (e) {
			fieldOnKey(e, isValidParentesco, '#fd_FamiliaresParentescoFamiliar', undefined, '#fd_FamiliaresParentescoFamiliarNoValida', '#fd_FamiliaresFechaDefuncionFamiliar', false);

			_f.checkIsValidFamiliares();
		});

		$('#fd_FamiliaresFechaDefuncionFamiliar').keyup(function (e) {
			fieldOnKey(e, _f.isValidFechaDefuncion, '#fd_FamiliaresFechaDefuncionFamiliar', undefined, '#fd_FamiliaresFechaDefuncionNoValida', '#fd_GuardarFamiliares', true);

			_f.checkIsValidFamiliares();
		});

		onSuccessExecuteEliminarFamiliaresTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllFamiliares(modificarFamiliar);
		};

		executeEliminarFamiliaresTabla = function(cedula) {
			var cedulaFamiliar = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('familiares', 'cedula', cedula, 'cedulaFamiliar', cedulaFamiliar,
    			cedula, cedula, onSuccessExecuteEliminarFamiliaresTabla, 
    			function() {});
		};

		eliminarTableFamiliares = function(cedula) {
			swal({title: 'Eliminar familiar de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este familiar.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarFamiliaresTabla(cedula);
				}
			);
		};

		modificarTablaFamiliares = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_FamiliaresTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_FamModificar', '');
				$('#' + cedula + '_FamMenu').dropdown('toggle');

				modificarTablaFamiliares(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_FamEliminar', '');
				$('#' + cedula + '_FamMenu').dropdown('toggle');

				eliminarTableFamiliares(cedula);

				return false;
			}
		});

		$('#stackable_fd_FamiliaresTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_FamiliaresTableBuscar').val();

			displayFamiliares(fld);
		});

		showBuscarFamiliares = function() {
			if (dFamiliares.length > 1) {
				$('#stackable_fd_FamiliaresTableBuscar').show();

				$('#stackable_fd_FamiliaresTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dFamiliares.length.toString() + ' registros...');

				$('#stackable_fd_FamiliaresTableCount').text(dFamiliares.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_FamiliaresTableBuscar').hide();
				$('#stackable_fd_FamiliaresTableCount').text('0 registros');
			}
		};

		displayFamiliares = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_FamiliaresTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Ced. Familiar</th><th>Nombre Fam.</th><th>F. Nacimiento</th><th>L. Nacimiento</th><th>Telf.</th><th>Parentesco</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dFamiliares.length - 1; i++) {
				if (buscarStr === '' || dFamiliares[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dFamiliares[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_FamMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_FamModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_FamEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[2] + '</td><td>' +
							parts[8] + '</td><td>' + parts[9] + '</td><td>' + parts[14] + '</td><td>' +
							parts[21] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_FamiliaresTable').html(html);

			$('#stackable_fd_FamiliaresTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarFamiliar = function() {
			hideSpinner(spinTimeHide);

			if (dFamiliares.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_FamiliaresExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_FamiliaresTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainFamiliaresDiv', false);

				showBuscarFamiliares();
				displayFamiliares('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_FamiliaresExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_FamiliaresTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainFamiliaresDiv', true);

				swal('No existen familiares');
			}
		};

		nuevoFamiliar = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				gAllParentescoFamiliares();
				gAllSiNo();
				gAllSexoFamiliares();

				_f.showfd_FamiliaresFieldsDivMain('Nuevo Familiar');
				$('#fd_FamiliaresCedula').focus();

				$('#fd_GuardarFamiliares').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_ModificarFamiliar').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllFamiliares(modificarFamiliar);

			return false;
		});

		$('#fd_VolverFamiliar').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_FamiliaresExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_FamiliaresTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainFamiliaresDiv', true);

			return false;
		});

		$('#fd_NuevoFamiliar').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasFamiliares(nuevoFamiliar);

			return false;
		});

		$('#fd_CancelarFamiliares').click(function(e) {
			e.preventDefault();

			_f.cancelarFamiliares();

			return false;
		});

		$('#fd_GuardarFamiliares').click(function(e) {
			e.preventDefault();

			_f.guardarFamiliares();

			return false;
		});

		$('#fd_CancelarFamiliares').keyup(function(e) {
			var enabled = !$('#fd_CancelarFamiliares').is(':disabled');

			if (enabled && e.which === 13) {
				_f.cancelarFamiliares();
			}
		});

		$('#fd_GuardarFamiliares').keyup(function(e) {
			var enabled = !$('#fd_GuardarFamiliares').is(':disabled');

			if (enabled && e.which === 13) {
				_f.guardarFamiliares();
			}
		});

	}(window.main, window.familiares = window.familiares || {}, window.jQuery));

	//Visas
	(function (main, visas, $, undefined) {

		var cedulas = [], dVisas = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _v = {
			cleanFields : function() {
				$('#fd_VisasCedula').val('');
				$('#fd_VisasNumeroPasaporte').val('');
				$('#fd_VisasTipoVisa').val('');
				$('#fd_VisasLugarExpedicion').val('');
				$('#fd_VisasFechaExpedicion').val('');
				$('#fd_VisasFechaCaducidad').val('');
				$('#fd_VisasNumeroEntradas').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainVisasDiv').hide();
			},

			cancelarVisas : function() {
				_v.cleanFields();

				$('#fd_MainVisasDiv').show();

				$('#fd_VisasFieldsDiv').hide();
				$('#fd_VisasFieldsDivMain').hide();
			},

			showfd_VisasFieldsDivMain : function(caption) {
				$('#fd_VisasFieldsDivCaption').text(caption);

				_v.hideMainBtns();
				_v.cleanFields();

				$('#fd_VisasFieldsDiv').show();
				$('#fd_VisasFieldsDivMain').show();
			},

			isValidVisas : function() {
				var cedula = $('#fd_VisasCedula').val(),
					numeroPasaporte = $('#fd_VisasNumeroPasaporte').val(),
					tipoVisa = $('#fd_VisasTipoVisa').val(),
					lugarExpedicion = $('#fd_VisasLugarExpedicion').val(),
					fechaExpedicion = normalizeDate($('#fd_VisasFechaExpedicion').val()),
					fechaCaducidad = normalizeDate($('#fd_VisasFechaCaducidad').val()),
					numeroEntradas = $('#fd_VisasNumeroEntradas').val();

				return (isValidCedula(cedula) && isValidAlphaNum(numeroPasaporte) && 
					isValidAlphaSpaces(tipoVisa) && isValidAlphaSpaces(lugarExpedicion) &&
					isValidDate(fechaExpedicion) && _v.isValidDateVisas(fechaCaducidad) &&
					isValidInt(numeroEntradas));
			},

			checkIsValidVisas : function() {
				if (_v.isValidVisas()) {
					$('#fd_GuardarVisas').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarVisas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadVisas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.fechaExpedicion !== '') {
							dVisas.push(obj.cedula + '|' + obj.fechaExpedicion + '|' + 
								obj.numeroPasaporte + '|' + obj.fechaCaducidad + '|' +
								obj.lugarExpedicion + '|' + obj.numeroEntradas);
						}
					}
				}
			},

			loadCedulasVisas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessVisas : function(result, optionsSuccess, msg) {
				_v.loadVisas(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessVisas : function(result, optionsSuccess, msg) {
				_v.loadCedulasVisas(result);

				optionsSuccess();
			},

			onGAllNotSuccessVisas : function(optionsNotSuccess, msg) {
				if (dVisas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessVisas : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			isValidDateVisas : function(fe) {
				var fc = $('#fd_VisasFechaExpedicion').val();

				if (isValidDate(fc) && isValidDate(fe)) {
					var end = Date.parse(fe, 'dd/mm/yyyy'),
						start = Date.parse(fc, 'dd/mm/yyyy');

					return (start <= end) ? true : false;
				}
				else {
					return false;
				}
			},

			onGuardarVisasSuccess : function(result, optionsNotSuccess, msg) {
				swal('Visa con esta cedula y fecha de expedicion ya existe');
			},

			onGuardarVisasNotSuccess : function(optionsNotSuccess, msg) {
				_v.commitVisas();
			},

			guardarVisas : function() {
				var cedula = $('#fd_VisasCedula').val(),
					fe = normalizeDate($('#fd_VisasFechaExpedicion').val()),
					results = [];

				mytables.db.itemQueryAnd('visas', undefined, 'cedula', cedula, 'fechaExpedicion', fe, 
    				results, onSuccessOptions, onNotSuccessOptions, _v.onGuardarVisasSuccess, 
    				_v.onGuardarVisasNotSuccess, false, false);
			},

			onCommitVisasSuccess : function(result, optionsSuccess, msg) {
				swal('Visa ha sido guardada');

				$('#fd_GuardarVisas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_v.cleanFields();
			},

			onCommitVisasNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Visa NO ha sido guardada');
			},

			commitVisas : function() {
				var cedula = $('#fd_VisasCedula').val(),
					numeroPasaporte = $('#fd_VisasNumeroPasaporte').val(),
					tipoVisa = $('#fd_VisasTipoVisa').val(),
					lugarExpedicion = $('#fd_VisasLugarExpedicion').val(),
					fechaExpedicion = normalizeDate($('#fd_VisasFechaExpedicion').val()),
					fechaCaducidad = normalizeDate($('#fd_VisasFechaCaducidad').val()),
					numeroEntradas = $('#fd_VisasNumeroEntradas').val(),

					obj = {"cedula": cedula, "numeroPasaporte": numeroPasaporte, "tipoVisa": tipoVisa,
						"lugarExpedicion": lugarExpedicion, "fechaExpedicion": fechaExpedicion,
						"fechaCaducidad": fechaCaducidad, "numeroEntradas": numeroEntradas};

				mytables.db.itemCreate('visas', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_v.onCommitVisasSuccess, _v.onCommitVisasNotSuccess);
			},

			cancelarVisas : function() {
				_v.cleanFields();

				$('#fd_MainVisasDiv').show();

				$('#fd_VisasFieldsDiv').hide();
				$('#fd_VisasFieldsDivMain').hide();
			}
		};

		gAllVisas = function(onSuccessOptions) {
			dVisas = [];

			mytables.db.listAll('visas', dVisas, onSuccessOptions, onSuccessOptions, 
				_v.onGAllSuccessVisas, _v.onGAllNotSuccessVisas, true);
		};

		gAllCedulasVisas = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessVisas, _v.onGAllCedulasNotSuccessVisas, true);
		};

		tACedulaVisas = function() {
			$('#fd_VisasCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_VisasCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessVisas = function(result, optionsSuccess, msg) {
			_v.onGAllCedulasSuccessVisas(result, optionsSuccess, msg);
			
			tACedulaVisas();
		};

		$('#fd_VisasCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_VisasCedula', undefined, '#fd_VisasCedulaNoValida', '#fd_VisasNumeroPasaporte', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasNumeroPasaporte').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNum, '#fd_VisasNumeroPasaporte', undefined, '#fd_VisasNumeroPasaporteNoValida', '#fd_VisasTipoVisa', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasTipoVisa').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_VisasTipoVisa', undefined, '#fd_VisasTipoVisaNoValida', '#fd_VisasLugarExpedicion', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasLugarExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_VisasLugarExpedicion', undefined, '#fd_VisasLugarExpedicionNoValida', '#fd_VisasFechaExpedicion', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasFechaExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_VisasFechaExpedicion', undefined, '#fd_VisasFechaExpedicionNoValida', '#fd_VisasFechaCaducidad', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasFechaCaducidad').keyup(function (e) {
			fieldOnKey(e, _v.isValidDateVisas, '#fd_VisasFechaCaducidad', undefined, '#fd_VisasFechaCaducidadNoValida', '#fd_VisasNumeroEntradas', false);

			_v.checkIsValidVisas();
		});

		$('#fd_VisasNumeroEntradas').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_VisasNumeroEntradas', undefined, '#fd_VisasNumeroEntradasNoValida', '#fd_GuardarVisas', false);

			_v.checkIsValidVisas();
		});

		onSuccessExecuteEliminarVisasTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllVisas(modificarVisa);
		};

		executeEliminarVisasTabla = function(cedula) {
			var fechaExpedicion = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('visas', 'cedula', cedula, 'fechaExpedicion', fechaExpedicion,
    			cedula, cedula, onSuccessExecuteEliminarVisasTabla, 
    			function() {});
		};

		eliminarTableVisas = function(cedula) {
			swal({title: 'Eliminar visa de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar esta visa.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarVisasTabla(cedula);
				}
			);
		};

		modificarTablaVisas = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_VisasTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_VisModificar', '');
				$('#' + cedula + '_VisMenu').dropdown('toggle');

				modificarTablaVisas(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_VisEliminar', '');
				$('#' + cedula + '_VisMenu').dropdown('toggle');

				eliminarTableVisas(cedula);

				return false;
			}
		});

		$('#stackable_fd_VisasTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_VisasTableBuscar').val();

			displayVisas(fld);
		});

		showBuscarVisas = function() {
			if (dVisas.length > 1) {
				$('#stackable_fd_VisasTableBuscar').show();

				$('#stackable_fd_VisasTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dVisas.length.toString() + ' registros...');

				$('#stackable_fd_VisasTableCount').text(dVisas.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_VisasTableBuscar').hide();
				$('#stackable_fd_VisasTableCount').text('0 registros');
			}
		};

		displayVisas = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_VisasTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/F. Expedicion</th><th>N. Pasaporte</th><th>F. Expedicion</th><th>F. Caducidad</th><th>L. Expedicion</th><th>N. Entradas</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dVisas.length - 1; i++) {
				if (buscarStr === '' || dVisas[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dVisas[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_VisMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_VisModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_VisEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[2] + '</td><td>' +
							parts[1] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td><td>' +
							parts[5] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_VisasTable').html(html);

			$('#stackable_fd_VisasTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarVisa = function() {
			hideSpinner(spinTimeHide);

			if (dVisas.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_VisasExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_VisasTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainVisasDiv', false);

				showBuscarVisas();
				displayVisas('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_VisasExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_VisasTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainVisasDiv', true);

				swal('No existen visas');
			}
		};

		nuevaVisa = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_v.showfd_VisasFieldsDivMain('Nueva Visa');
				$('#fd_VisasCedula').focus();

				$('#fd_GuardarVisas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_ModificarVisa').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllVisas(modificarVisa);

			return false;
		});

		$('#fd_VolverVisa').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_VisasExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_VisasTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainVisasDiv', true);

			return false;
		});

		$('#fd_NuevoVisa').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasVisas(nuevaVisa);

			return false;
		});

		$('#fd_CancelarVisas').click(function(e) {
			e.preventDefault();

			_v.cancelarVisas();

			return false;
		});
		
		$('#fd_GuardarVisas').click(function(e) {
			e.preventDefault();

			_v.guardarVisas();

			return false;
		});

		$('#fd_CancelarVisas').keyup(function(e) {
			var enabled = !$('#fd_CancelarVisas').is(':disabled');

			if (enabled && e.which === 13) {
				_v.cancelarVisas();
			}
		});

		$('#fd_GuardarVisas').keyup(function(e) {
			var enabled = !$('#fd_GuardarVisas').is(':disabled');

			if (enabled && e.which === 13) {
				_v.guardarVisas();
			}
		});

	}(window.main, window.visas = window.visas || {}, window.jQuery));

	//Nacionalidades
	(function (main, nacionalidades, $, undefined) {

		var cedulas = [], dNacionalidades = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _n = {
			cleanFields : function() {
				$('#fd_NacionalidadesCedula').val('');
				$('#fd_NacionalidadesNombre').val('');
				$('#fd_NacionalidadesNumeroPasaporte').val('');
				$('#fd_NacionalidadesNombresPasaporte').val('');
				$('#fd_NacionalidadesApellidosPasaporte').val('');
				$('#fd_NacionalidadesFechaExpedicion').val('');
				$('#fd_NacionalidadesFechaCaducidad').val('');
				$('#fd_NacionalidadesLugarExpedicion').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainNacionalidadesDiv').hide();
			},

			cancelarNacionalidades : function() {
				_n.cleanFields();

				$('#fd_MainNacionalidadesDiv').show();

				$('#fd_NacionalidadesFieldsDiv').hide();
				$('#fd_NacionalidadesFieldsDivMain').hide();
			},

			showfd_NacionalidadesFieldsDivMain : function(caption) {
				$('#fd_NacionalidadesFieldsDivCaption').text(caption);

				_n.hideMainBtns();
				_n.cleanFields();

				$('#fd_NacionalidadesFieldsDiv').show();
				$('#fd_NacionalidadesFieldsDivMain').show();
			},

			loadNacionalidades : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.numeroPasaporte !== '') {
							dNacionalidades.push(obj.cedula + '|' + obj.numeroPasaporte + '|' +
								obj.nombreNacionalidad + '|' + obj.fechaExpedicion + '|' +
								obj.fechaCaducidad + '|' + obj.lugarExpedicion);
						}
					}
				}
			},

			loadCedulasNacionalidades : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			isValidNacionalidades : function() {
				var cedula = $('#fd_NacionalidadesCedula').val(),
					nombreNacionalidad = $('#fd_NacionalidadesNombre').val(),
					numeroPasaporte = $('#fd_NacionalidadesNumeroPasaporte').val(),
					nombresPasaporte = $('#fd_NacionalidadesNombresPasaporte').val(),
					apellidosPasaporte = $('#fd_NacionalidadesApellidosPasaporte').val(),
					fechaExpedicion = normalizeDate($('#fd_NacionalidadesFechaExpedicion').val()),
					fechaCaducidad = normalizeDate($('#fd_NacionalidadesFechaCaducidad').val()),
					lugarExpedicion = $('#fd_NacionalidadesLugarExpedicion').val()

				return (isValidCedula(cedula) && isValidAlphaSpaces(nombreNacionalidad) &&
					isValidAlphaNum(numeroPasaporte) && isValidAlphaSpaces(nombresPasaporte) &&
					isValidAlphaSpaces(apellidosPasaporte) && isValidDate(fechaExpedicion) &&
					_n.isValidDateNacionalidades(fechaCaducidad) && isValidAlphaSpaces(lugarExpedicion));
			},

			checkIsValidNacionalidades : function() {
				if (_n.isValidNacionalidades()) {
					$('#fd_GuardarNacionalidades').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarNacionalidades').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			onGAllSuccessNacionalidades : function(result, optionsSuccess, msg) {
				_n.loadNacionalidades(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessNacionalidades : function(result, optionsSuccess, msg) {
				_n.loadCedulasNacionalidades(result);

				optionsSuccess();
			},

			onGAllNotSuccessNacionalidades : function(optionsNotSuccess, msg) {
				if (dNacionalidades.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessNacionalidades : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			isValidDateNacionalidades : function(fe) {
				var fc = $('#fd_NacionalidadesFechaExpedicion').val();

				if (isValidDate(fc) && isValidDate(fe)) {
					var end = Date.parse(fe, 'dd/mm/yyyy'),
						start = Date.parse(fc, 'dd/mm/yyyy');

					return (start <= end) ? true : false;
				}
				else {
					return false;
				}
			},

			onGuardarNacionalidadesSuccess : function(result, optionsNotSuccess, msg) {
				swal('Nacionalidad con esta cedula y numero de pasaporte ya existe');
			},

			onGuardarNacionalidadesNotSuccess : function(optionsNotSuccess, msg) {
				_n.commitNacionalidades();
			},

			guardarNacionalidades : function() {
				var cedula = $('#fd_NacionalidadesCedula').val(),
					np = $('#fd_NacionalidadesNumeroPasaporte').val(),
					results = [];

				mytables.db.itemQueryAnd('nacionalidades', undefined, 'cedula', cedula, 'numeroPasaporte', np, 
    				results, onSuccessOptions, onNotSuccessOptions, _n.onGuardarNacionalidadesSuccess, 
    				_n.onGuardarNacionalidadesNotSuccess, false, false);
			},

			onCommitNacionalidadesSuccess : function(result, optionsSuccess, msg) {
				swal('Nacionalidad ha sido guardada');

				$('#fd_GuardarNacionalidades').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_n.cleanFields();
			},

			onCommitNacionalidadesNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Nacionalidad NO ha sido guardada');
			},

			commitNacionalidades : function() {
				var cedula = $('#fd_NacionalidadesCedula').val(),
					nombreNacionalidad = $('#fd_NacionalidadesNombre').val(),
					numeroPasaporte = $('#fd_NacionalidadesNumeroPasaporte').val(),
					nombresPasaporte = $('#fd_NacionalidadesNombresPasaporte').val(),
					apellidosPasaporte = $('#fd_NacionalidadesApellidosPasaporte').val(),
					fechaExpedicion = normalizeDate($('#fd_NacionalidadesFechaExpedicion').val()),
					fechaCaducidad = normalizeDate($('#fd_NacionalidadesFechaCaducidad').val()),
					lugarExpedicion = $('#fd_NacionalidadesLugarExpedicion').val(),

					obj = {"cedula": cedula, "nombreNacionalidad": nombreNacionalidad, "numeroPasaporte": numeroPasaporte,
						"nombresPasaporte": nombresPasaporte, "apellidosPasaporte": apellidosPasaporte, "fechaExpedicion":
						fechaExpedicion, "fechaCaducidad": fechaCaducidad, "lugarExpedicion": lugarExpedicion};

				mytables.db.itemCreate('nacionalidades', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_n.onCommitNacionalidadesSuccess, _n.onCommitNacionalidadesNotSuccess);
			},

			cancelarNacionalidades : function() {
				_n.cleanFields();

				$('#fd_MainNacionalidadesDiv').show();

				$('#fd_NacionalidadesFieldsDiv').hide();
				$('#fd_NacionalidadesFieldsDivMain').hide();
			}
		};

		tACedulaNacionalidades = function() {
			$('#fd_NacionalidadesCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_NacionalidadesCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessNacionalidades = function(result, optionsSuccess, msg) {
			_n.onGAllCedulasSuccessNacionalidades(result, optionsSuccess, msg);
			
			tACedulaNacionalidades();
		};

		gAllNacionalidades = function(onSuccessOptions) {
			dNacionalidades = [];

			mytables.db.listAll('nacionalidades', dNacionalidades, onSuccessOptions, onSuccessOptions,
				_n.onGAllSuccessNacionalidades, _n.onGAllNotSuccessNacionalidades, true);
		};

		gAllCedulasNacionalidades = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessNacionalidades, _n.onGAllCedulasNotSuccessNacionalidades, true);
		};

		$('#fd_NacionalidadesCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_NacionalidadesCedula', undefined, '#fd_NacionalidadesCedulaNoValida', '#fd_NacionalidadesNombre', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesNombre').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_NacionalidadesNombre', undefined, '#fd_NacionalidadesNombreNoValida', '#fd_NacionalidadesNumeroPasaporte', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesNumeroPasaporte').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNum, '#fd_NacionalidadesNumeroPasaporte', undefined, '#fd_NacionalidadesNumeroPasaporteNoValida', '#fd_NacionalidadesNombresPasaporte', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesNombresPasaporte').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_NacionalidadesNombresPasaporte', undefined, '#fd_NacionalidadesNombresPasaporteNoValida', '#fd_NacionalidadesApellidosPasaporte', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesApellidosPasaporte').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_NacionalidadesApellidosPasaporte', undefined, '#fd_NacionalidadesApellidosPasaporteNoValida', '#fd_NacionalidadesFechaExpedicion', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesFechaExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_NacionalidadesFechaExpedicion', undefined, '#fd_NacionalidadesFechaExpedicionNoValida', '#fd_NacionalidadesFechaCaducidad', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesFechaCaducidad').keyup(function (e) {
			fieldOnKey(e, _n.isValidDateNacionalidades, '#fd_NacionalidadesFechaCaducidad', undefined, '#fd_NacionalidadesFechaCaducidadNoValida', '#fd_NacionalidadesLugarExpedicion', false);

			_n.checkIsValidNacionalidades();
		});

		$('#fd_NacionalidadesLugarExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_NacionalidadesLugarExpedicion', undefined, '#fd_NacionalidadesLugarExpedicionNoValida', '#fd_GuardarNacionalidades', false);

			_n.checkIsValidNacionalidades();
		});

		onSuccessExecuteEliminarNacionalidadesTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllNacionalidades(modificarNacionalidad);
		};

		executeEliminarNacionalidadesTabla = function(cedula) {
			var numeroPasaporte = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('nacionalidades', 'cedula', cedula, 'numeroPasaporte', numeroPasaporte,
    			cedula, cedula, onSuccessExecuteEliminarNacionalidadesTabla, 
    			function() {});
		};

		eliminarTableNacionalidades = function(cedula) {
			swal({title: 'Eliminar nacionalidad de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar esta nacionalidad.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarNacionalidadesTabla(cedula);
				}
			);
		};

		modificarTablaNacionalidades = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_NacionalidadesTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_NacModificar', '');
				$('#' + cedula + '_NacMenu').dropdown('toggle');

				modificarTablaNacionalidades(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_NacEliminar', '');
				$('#' + cedula + '_NacMenu').dropdown('toggle');

				eliminarTableNacionalidades(cedula);

				return false;
			}
		});

		$('#stackable_fd_NacionalidadesTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_NacionalidadesTableBuscar').val();

			displayNacionalidades(fld);
		});

		showBuscarNacionalidades = function() {
			if (dNacionalidades.length > 1) {
				$('#stackable_fd_NacionalidadesTableBuscar').show();

				$('#stackable_fd_NacionalidadesTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dNacionalidades.length.toString() + ' registros...');

				$('#stackable_fd_NacionalidadesTableCount').text(dNacionalidades.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_NacionalidadesTableBuscar').hide();
				$('#stackable_fd_NacionalidadesTableCount').text('0 registros');
			}
		};

		displayNacionalidades = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_NacionalidadesTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Pasaporte</th><th>Pasaporte</th><th>Nacionalidad</th><th>F. Expedicion</th><th>F. Caducidad</th><th>Lugar Expedicion</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dNacionalidades.length - 1; i++) {
				if (buscarStr === '' || dNacionalidades[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dNacionalidades[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_NacMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_NacModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_NacEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td><td>' +
							parts[5] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_NacionalidadesTable').html(html);

			$('#stackable_fd_NacionalidadesTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarNacionalidad = function() {
			hideSpinner(spinTimeHide);

			if (dNacionalidades.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_NacionalidadesExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_NacionalidadesTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainNacionalidadesDiv', false);

				showBuscarNacionalidades();
				displayNacionalidades('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_NacionalidadesExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_NacionalidadesTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainNacionalidadesDiv', true);

				swal('No existen nacionalidades');
			}
		};

		nuevaNacionalidad = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_n.showfd_NacionalidadesFieldsDivMain('Nueva Nacionalidad');
				$('#fd_NacionalidadesCedula').focus();

				$('#fd_GuardarNacionalidades').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_ModificarNacionalidad').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllNacionalidades(modificarNacionalidad);

			return false;
		});

		$('#fd_VolverNacionalidad').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_NacionalidadesExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_NacionalidadesTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainNacionalidadesDiv', true);

			return false;
		});

		$('#fd_NuevoNacionalidad').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasNacionalidades(nuevaNacionalidad);

			return false;
		});

		$('#fd_CancelarNacionalidades').click(function(e) {
			e.preventDefault();

			_n.cancelarNacionalidades();

			return false;
		});
		
		$('#fd_GuardarNacionalidades').click(function(e) {
			e.preventDefault();

			_n.guardarNacionalidades();

			return false;
		});

		$('#fd_CancelarNacionalidades').keyup(function(e) {
			var enabled = !$('#fd_CancelarNacionalidades').is(':disabled');

			if (enabled && e.which === 13) {
				_n.cancelarCertificados();
			}
		});

		$('#fd_GuardarNacionalidades').keyup(function(e) {
			var enabled = !$('#fd_GuardarNacionalidades').is(':disabled');

			if (enabled && e.which === 13) {
				_n.guardarNacionalidades();
			}
		});

	}(window.main, window.nacionalidades = window.nacionalidades || {}, window.jQuery));

	//Certificados
	(function (main, certificados, $, undefined) {

		var cedulas = [], dCertificados = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _c = {
			cleanFields : function() {
				$('#fd_CertificadosCedula').val('');
				$('#fd_CertificadosNombre').val('');
				$('#fd_CertificadosFechaExpedicion').val('');
				$('#fd_CertificadosFechaCaducidad').val('');
				$('#fd_CertificadosNumeroCertificado').val('');
				$('#fd_CertificadosLugarExpedicion').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainCertificadosDiv').hide();
			},

			cancelarCertificados : function() {
				_c.cleanFields();

				$('#fd_MainCertificadosDiv').show();

				$('#fd_CertificadosFieldsDiv').hide();
				$('#fd_CertificadosFieldsDivMain').hide();
			},

			showfd_CertificadosFieldsDivMain : function(caption) {
				$('#fd_CertificadosFieldsDivCaption').text(caption);

				_c.hideMainBtns();
				_c.cleanFields();

				$('#fd_CertificadosFieldsDiv').show();
				$('#fd_CertificadosFieldsDivMain').show();
			},

			isValidDateCertificado : function(fc) {
				var fe = $('#fd_CertificadosFechaExpedicion').val();

				if (isValidDate(fc) && isValidDate(fe)) {

					var start = Date.parse(fe, 'dd/mm/yyyy'),
						end = Date.parse(fc, 'dd/mm/yyyy');

					return (start <= end) ? true : false;
				}
				else {
					return false;
				}
			},

			isValidCertificados : function() {
				var cedula = $('#fd_CertificadosCedula').val(),
					nombreCertificado = $('#fd_CertificadosNombre').val(),
					fechaExpedicion = $('#fd_CertificadosFechaExpedicion').val(),
					fechaCaducidad = $('#fd_CertificadosFechaCaducidad').val(),
					numeroCertificado = $('#fd_CertificadosNumeroCertificado').val(),
					lugarExpedicion = $('#fd_CertificadosLugarExpedicion').val();

				return (isValidCedula(cedula) && isValidAlphaSpaces(nombreCertificado) &&
					isValidDate(fechaExpedicion) && _c.isValidDateCertificado(fechaCaducidad) &&
					isValidAlphaSpaces(lugarExpedicion) && isValidAlphaNum(numeroCertificado));
			},

			checkIsValidCertificados : function() {
				if (_c.isValidCertificados()) {
					$('#fd_GuardarCertificados').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarCertificados').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadCertificados : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.nombre !== '') {
							dCertificados.push(obj.cedula + '|' + obj.nombreCertificado + '|' +
								obj.fechaExpedicion + '|' + obj.fechaCaducidad + '|' +
								obj.numeroCertificado + '|' + obj.lugarExpedicion);
						}
					}
				}
			},

			loadCedulasCertificados : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessCertificados : function(result, optionsSuccess, msg) {
				_c.loadCertificados(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessCertificados : function(result, optionsSuccess, msg) {
				_c.loadCedulasCertificados(result);

				optionsSuccess();
			},

			onGAllNotSuccessCertificados : function(optionsNotSuccess, msg) {
				if (dCertificados.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessCertificados : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarCertificadosSuccess : function(result, optionsNotSuccess, msg) {
				swal('Certificado con esta cedula y nombre ya existe');
			},

			onGuardarCertificadosNotSuccess : function(optionsNotSuccess, msg) {
				_c.commitCertificados();
			},

			guardarCertificados : function() {
				var cedula = $('#fd_CertificadosCedula').val(),
					nc = $('#fd_CertificadosNombre').val(),
					results = [];

				mytables.db.itemQueryAnd('certificados', undefined, 'cedula', cedula, 'nombre', nc, 
    				results, onSuccessOptions, onNotSuccessOptions, _c.onGuardarCertificadosSuccess, 
    				_c.onGuardarCertificadosNotSuccess, false, false);
			},

			onCommitCertificadosSuccess : function(result, optionsSuccess, msg) {
				swal('Certificado ha sido guardado');

				$('#fd_GuardarCertificados').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_c.cleanFields();
			},

			onCommitCertificadosNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Certificado NO ha sido guardado');
			},

			commitCertificados : function() {
				var cedula = $('#fd_CertificadosCedula').val(),
					nombreCertificado = $('#fd_CertificadosNombre').val(),
					fechaExpedicion = normalizeDate($('#fd_CertificadosFechaExpedicion').val()),
					fechaCaducidad = normalizeDate($('#fd_CertificadosFechaCaducidad').val()),
					numeroCertificado = $('#fd_CertificadosNumeroCertificado').val(),
					lugarExpedicion = $('#fd_CertificadosLugarExpedicion').val(),

					obj = {"cedula": cedula, "nombreCertificado": nombreCertificado, "fechaExpedicion": fechaExpedicion, "fechaCaducidad": fechaCaducidad, 
						"numeroCertificado": numeroCertificado, "lugarExpedicion": lugarExpedicion};

				mytables.db.itemCreate('certificados', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_c.onCommitCertificadosSuccess, _c.onCommitCertificadosNotSuccess);
			},

			cancelarCertificados : function() {
				_c.cleanFields();

				$('#fd_MainCertificadosDiv').show();

				$('#fd_CertificadosFieldsDiv').hide();
				$('#fd_CertificadosFieldsDivMain').hide();
			}
		};

		tACedulaCertificados = function() {
			$('#fd_CertificadosCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_CertificadosCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessCertificados = function(result, optionsSuccess, msg) {
			_c.onGAllCedulasSuccessCertificados(result, optionsSuccess, msg);
			
			tACedulaCertificados();
		};

		gAllCertificados = function(onSuccessOptions) {
			dCertificados = [];

			mytables.db.listAll('certificados', dCertificados, onSuccessOptions, onSuccessOptions,
				_c.onGAllSuccessCertificados, _c.onGAllNotSuccessCertificados, true);
		};

		gAllCedulasCertificados = function(onSuccessOptions) {
			cedulas = [];
			
			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessCertificados, _c.onGAllCedulasNotSuccessCertificados, true);
		};

		$('#fd_CertificadosCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_CertificadosCedula', undefined, '#fd_CertificadosCedulaNoValida', '#fd_CertificadosNombre', false);

			_c.checkIsValidCertificados();
		});

		$('#fd_CertificadosNombre').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_CertificadosNombre', undefined, '#fd_CertificadosNombreNoValida', '#fd_CertificadosFechaExpedicion', false);

			_c.checkIsValidCertificados();
		});

		$('#fd_CertificadosFechaExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_CertificadosFechaExpedicion', undefined, '#fd_CertificadosFechaExpedicionNoValida', '#fd_CertificadosFechaCaducidad', false);

			_c.checkIsValidCertificados();
		});

		$('#fd_CertificadosFechaCaducidad').keyup(function (e) {
			fieldOnKey(e, _c.isValidDateCertificado, '#fd_CertificadosFechaCaducidad', undefined, '#fd_CertificadosFechaCaducidadNoValida', '#fd_CertificadosNumeroCertificado', false);

			_c.checkIsValidCertificados();
		});

		$('#fd_CertificadosNumeroCertificado').keyup(function (e) {
			fieldOnKey(e, isValidAlphaNum, '#fd_CertificadosNumeroCertificado', undefined, '#fd_CertificadosNumeroCertificadoNoValida', '#fd_CertificadosLugarExpedicion', false);

			_c.checkIsValidCertificados();
		});

		$('#fd_CertificadosLugarExpedicion').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_CertificadosLugarExpedicion', undefined, '#fd_CertificadosLugarExpedicionNoValida', '#fd_GuardarCertificados', false);

			_c.checkIsValidCertificados();
		});

		nuevoCertificado = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_c.showfd_CertificadosFieldsDivMain('Nuevo Certificado');
				$('#fd_CertificadosCedula').focus();

				$('#fd_GuardarCertificados').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		onSuccessExecuteEliminarCertificadosTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllCertificados(modificarCertificado);
		};

		executeEliminarCertificadosTabla = function(cedula) {
			var nombreCertificado = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('certificados', 'cedula', cedula, 'nombreCertificado', nombreCertificado,
    			cedula, cedula, onSuccessExecuteEliminarCertificadosTabla, 
    			function() {});
		};

		eliminarTableCertificados = function(cedula) {
			swal({title: 'Eliminar certificado de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este certificado.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarCertificadosTabla(cedula);
				}
			);
		};

		modificarTablaCertificados = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_CertificadosTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CertModificar', '');
				$('#' + cedula + '_CertMenu').dropdown('toggle');

				modificarTablaCertificados(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_CertEliminar', '');
				$('#' + cedula + '_CertMenu').dropdown('toggle');

				eliminarTableCertificados(cedula);

				return false;
			}
		});

		$('#stackable_fd_CertificadosTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_CertificadosTableBuscar').val();

			displayCertificados(fld);
		});

		showBuscarCertificados = function() {
			if (dCertificados.length > 1) {
				$('#stackable_fd_CertificadosTableBuscar').show();

				$('#stackable_fd_CertificadosTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dCertificados.length.toString() + ' registros...');

				$('#stackable_fd_CertificadosTableCount').text(dCertificados.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_CertificadosTableBuscar').hide();
				$('#stackable_fd_CertificadosTableCount').text('0 registros');
			}
		};

		displayCertificados = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_CertificadosTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Certificado</th><th>Certificado</th><th>F. Expedicion</th><th>F. Caducidad</th><th>Num. Certificado</th><th>Lugar Expedicion</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dCertificados.length - 1; i++) {
				if (buscarStr === '' || dCertificados[i].toLowerCase().indexOf(buscarStr.toLowerCase()) >= 0) {

					var obj = dCertificados[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_CertMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_CertModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_CertEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td><td>' +
							parts[5] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_CertificadosTable').html(html);

			$('#stackable_fd_CertificadosTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarCertificado = function() {
			hideSpinner(spinTimeHide);

			if (dCertificados.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_CertificadosExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_CertificadosTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainCertificadosDiv', false);

				showBuscarCertificados();
				displayCertificados('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_CertificadosExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_CertificadosTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainCertificadosDiv', true);

				swal('No existen certificados');
			}
		};

		$('#fd_NuevoCertificado').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasCertificados(nuevoCertificado);

			return false;
		});

		$('#fd_ModificarCertificado').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCertificados(modificarCertificado);

			return false;
		});

		$('#fd_VolverCertificado').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_CertificadosExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_CertificadosTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainCertificadosDiv', true);

			return false;
		});

		$('#fd_CancelarCertificados').click(function(e) {
			e.preventDefault();

			_c.cancelarCertificados();

			return false;
		});

		$('#fd_GuardarCertificados').click(function(e) {
			e.preventDefault();

			_c.guardarCertificados();

			return false;
		});

		$('#fd_CancelarCertificados').keyup(function(e) {
			var enabled = !$('#fd_CancelarCertificados').is(':disabled');

			if (enabled && e.which === 13) {
				_c.cancelarCertificados();
			}
		});

		$('#fd_GuardarCertificados').keyup(function(e) {
			var enabled = !$('#fd_GuardarCertificados').is(':disabled');

			if (enabled && e.which === 13) {
				_c.guardarCertificados();
			}
		});

	}(window.main, window.certificados = window.certificados || {}, window.jQuery));

	//Idiomas
	(function (main, idiomas, $, undefined) {

		var cedulas = [], dIdiomas = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _i = {
			cleanFields : function() {
				$('#fd_IdiomasCedula').val('');
				$('#fd_IdiomasNombre').val('');
				$('#fd_IdiomasNivelLectura').val('');
				$('#fd_IdiomasNivelEscrito').val('');
				$('#fd_IdiomasNivelHablado').val('');
				$('#fd_IdiomasAcento').val('');
				$('#fd_IdiomasLugarAprendizaje').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainIdiomasDiv').hide();
			},

			cancelarIdiomas : function() {
				_i.cleanFields();

				$('#fd_MainIdiomasDiv').show();

				$('#fd_IdiomasFieldsDiv').hide();
				$('#fd_IdiomasFieldsDivMain').hide();
			},

			showfd_IdiomasFieldsDivMain : function(caption) {
				$('#fd_IdiomasFieldsDivCaption').text(caption);

				_i.hideMainBtns();
				_i.cleanFields();

				$('#fd_IdiomasFieldsDiv').show();
				$('#fd_IdiomasFieldsDivMain').show();
			},

			isValidIdiomas : function() {
				var cedula = $('#fd_IdiomasCedula').val(),
					nombre = $('#fd_IdiomasNombre').val(),
					nivelLectura = $('#fd_IdiomasNivelLectura').val(),
					nivelEscrito = $('#fd_IdiomasNivelEscrito').val(),
					nivelHablado = $('#fd_IdiomasNivelHablado').val(),
					acento = $('#fd_IdiomasAcento').val(),
					aprendidoEn = $('#fd_IdiomasLugarAprendizaje').val();

				return (isValidCedula(cedula) && isValidAlphaSpaces(nombre) && isValidAlphaSpaces(nivelEscrito) &&
					isValidAlphaSpaces(nivelHablado) && isValidAlphaSpaces(nivelLectura) &&
					isValidAlphaSpaces(acento) && isValidAlphaSpaces(aprendidoEn));
			},

			checkIsValidIdiomas : function() {
				if (_i.isValidIdiomas()) {
					$('#fd_GuardarIdiomas').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarIdiomas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadIdiomas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.nombre !== '') {
							dIdiomas.push(obj.cedula + '|' + obj.nombre + '|' + 
								obj.nivelLectura + '|' + obj.nivelEscrito + '|' + 
								obj.nivelHablado);
						}
					}
				}
			},

			loadCedulasIdiomas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessIdiomas : function(result, optionsSuccess, msg) {
				_i.loadIdiomas(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessIdiomas : function(result, optionsSuccess, msg) {
				_i.loadCedulasIdiomas(result);

				optionsSuccess();
			},

			onGAllNotSuccessIdiomas : function(optionsNotSuccess, msg) {
				if (dIdiomas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessIdiomas : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarIdiomasSuccess : function(result, optionsNotSuccess, msg) {
				swal('Idioma con esta cedula y nombre ya existe');
			},

			onGuardarIdiomasNotSuccess : function(optionsNotSuccess, msg) {
				_i.commitIdiomas();
			},

			guardarIdiomas : function() {
				var cedula = $('#fd_IdiomasCedula').val(),
					ni = $('#fd_IdiomasNombre').val(),
					results = [];

				mytables.db.itemQueryAnd('idiomas', undefined, 'cedula', cedula, 'nombre', ni, 
    				results, onSuccessOptions, onNotSuccessOptions, _i.onGuardarIdiomasSuccess, 
    				_i.onGuardarIdiomasNotSuccess, false, false);
			},

			onCommitIdiomasSuccess : function(result, optionsSuccess, msg) {
				swal('Idioma ha sido guardado');

				$('#fd_GuardarIdiomas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_i.cleanFields();
			},

			onCommitIdiomasNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Idioma NO ha sido guardado');
			},

			commitIdiomas : function() {
				var cedula = $('#fd_IdiomasCedula').val(),
					nombre = $('#fd_IdiomasNombre').val(),
					nivelLectura = $('#fd_IdiomasNivelLectura').val(),
					nivelEscrito = $('#fd_IdiomasNivelEscrito').val(),
					nivelHablado = $('#fd_IdiomasNivelHablado').val(),
					acento = $('#fd_IdiomasAcento').val(),
					aprendidoEn = $('#fd_IdiomasLugarAprendizaje').val(),

					obj = {"cedula": cedula, "nombre": nombre, "nivelLectura": nivelLectura, "nivelEscrito": nivelEscrito, 
						"nivelHablado": nivelHablado, "acento": acento, "aprendidoEn": aprendidoEn};

				mytables.db.itemCreate('idiomas', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_i.onCommitIdiomasSuccess, _i.onCommitIdiomasNotSuccess);
			},

			cancelarIdiomas : function() {
				_i.cleanFields();

				$('#fd_MainIdiomasDiv').show();

				$('#fd_IdiomasFieldsDiv').hide();
				$('#fd_IdiomasFieldsDivMain').hide();
			}
		};

		tACedulaIdiomas = function() {
			$('#fd_IdiomasCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_IdiomasCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessIdiomas = function(result, optionsSuccess, msg) {
			_i.onGAllCedulasSuccessIdiomas(result, optionsSuccess, msg);
			
			tACedulaIdiomas();
		};

		gAllIdiomas = function(onSuccessOptions) {
			dIdiomas = [];

			mytables.db.listAll('idiomas', dIdiomas, onSuccessOptions, onSuccessOptions,
				_i.onGAllSuccessIdiomas, _i.onGAllNotSuccessIdiomas, true);
		};

		gAllCedulasIdiomas = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessIdiomas, _i.onGAllCedulasNotSuccessIdiomas, true);
		};

		$('#fd_IdiomasCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_IdiomasCedula', undefined, '#fd_IdiomasCedulaNoValida', '#fd_IdiomasNombre', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasNombre').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasNombre', undefined, '#fd_IdiomasNombreNoValida', '#fd_IdiomasNivelLectura', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasNivelLectura').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasNivelLectura', undefined, '#fd_IdiomasNivelLecturaNoValida', '#fd_IdiomasNivelEscrito', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasNivelEscrito').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasNivelEscrito', undefined, '#fd_IdiomasNivelEscritoNoValida', '#fd_IdiomasNivelHablado', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasNivelHablado').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasNivelHablado', undefined, '#fd_IdiomasNivelHabladoNoValida', '#fd_IdiomasAcento', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasAcento').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasAcento', undefined, '#fd_IdiomasAcentoNoValida', '#fd_IdiomasLugarAprendizaje', false);

			_i.checkIsValidIdiomas();
		});

		$('#fd_IdiomasLugarAprendizaje').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_IdiomasLugarAprendizaje', undefined, '#fd_IdiomasLugarAprendizajeNoValida', '#fd_GuardarIdiomas', false);

			_i.checkIsValidIdiomas();
		});

		$('#stackable_fd_IdiomasTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_IdiomasTableBuscar').val();

			displayIdiomas(fld);
		});

		onSuccessExecuteEliminarIdiomasTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllIdiomas(modificarIdioma);
		};

		executeEliminarIdiomasTabla = function(cedula) {
			var nombre = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('idiomas', 'cedula', cedula, 'nombre', nombre,
    			cedula, cedula, onSuccessExecuteEliminarIdiomasTabla, 
    			function() {});
		};

		eliminarIdiomasTable = function(cedula) {
			swal({title: 'Eliminar idioma de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este idioma.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarIdiomasTabla(cedula);
				}
			);
		};

		modificarIdiomasTable = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_IdiomasTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_IdiomasModificar', '');
				$('#' + cedula + '_IdiomasMenu').dropdown('toggle');

				modificarIdiomasTable(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_IdiomasEliminar', '');
				$('#' + cedula + '_IdiomasMenu').dropdown('toggle');

				eliminarIdiomasTable(cedula);

				return false;
			}
		});

		$('#stackable_fd_IdiomasTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_IdiomasTableBuscar').val();

			displayIdiomas(fld);
		});

		showBuscarIdiomas = function() {
			if (dIdiomas.length > 1) {
				$('#stackable_fd_IdiomasTableBuscar').show();

				$('#stackable_fd_IdiomasTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dIdiomas.length.toString() + ' registros...');

				$('#stackable_fd_IdiomasTableCount').text(dIdiomas.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_IdiomasTableBuscar').hide();
				$('#stackable_fd_IdiomasTableCount').text('0 registros');
			}
		};
		
		displayIdiomas = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_IdiomasTable').html('');

			html.push('<thead><tr align="center"><th>Cedula/Idioma</th><th>Nombre</th><th>N. Lectura</th><th>N. Escrito</th><th>N. Hablado</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dIdiomas.length - 1; i++) {
				if (buscarStr === '' || findInPipedStr(dIdiomas[i], buscarStr)) {
					var obj = dIdiomas[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_IdiomasMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_IdiomasModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_IdiomasEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_IdiomasTable').html(html);

			$('#stackable_fd_IdiomasTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarIdioma = function() {
			hideSpinner(spinTimeHide);

			if (dIdiomas.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_IdiomasExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_IdiomasTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainIdiomasDiv', false);

				showBuscarIdiomas();
				displayIdiomas('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_IdiomasExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_IdiomasTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainIdiomasDiv', true);

				swal('No existen idiomas');
			}
		};

		nuevoIdioma = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_i.showfd_IdiomasFieldsDivMain('Nuevo Idioma');
				$('#fd_IdiomasCedula').focus();

				$('#fd_GuardarIdiomas').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_ModificarIdioma').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllIdiomas(modificarIdioma);

			return false;
		});

		$('#fd_VolverIdioma').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_IdiomasExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_IdiomasTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainIdiomasDiv', true);

			return false;
		});

		$('#fd_NuevoIdioma').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasIdiomas(nuevoIdioma);

			return false;
		});

		$('#fd_CancelarIdiomas').click(function(e) {
			e.preventDefault();

			_i.cancelarIdiomas();

			return false;
		});

		$('#fd_GuardarIdiomas').click(function(e) {
			e.preventDefault();

			_i.guardarIdiomas();

			return false;
		});

		$('#fd_CancelarIdiomas').keyup(function(e) {
			var enabled = !$('#fd_CancelarIdiomas').is(':disabled');

			if (enabled && e.which === 13) {
				_i.cancelarIdiomas();
			}
		});

		$('#fd_GuardarIdiomas').keyup(function(e) {
			var enabled = !$('#fd_GuardarIdiomas').is(':disabled');

			if (enabled && e.which === 13) {
				_i.guardarIdiomas();
			}
		});

	}(window.main, window.idiomas = window.idiomas || {}, window.jQuery));

	//Embarques
	(function (main, embarques, $, undefined) {

		var cedulas = [], dEmbarques = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _e = {

			cleanFields : function() {
				$('#fd_EmbarquesCedula').val('');
				$('#fd_EmbarquesCapitan').val('');
				$('#fd_EmbarquesBuque').val('');
				$('#fd_EmbarquesClaseBuque').val('');
				$('#fd_EmbarquesCargoBuque').val('');
				$('#fd_EmbarquesFechaEmbarque').val('');
				$('#fd_EmbarquesFechaDesembarque').val('');
				$('#fd_EmbarquesCausaDesembarque').val('');
				$('#fd_EmbarquesPuertoBuque').val('');
				$('#fd_EmbarquesBanderaBuque').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainEmbarquesDiv').hide();
			},

			cancelarEmbarques : function() {
				_e.cleanFields();

				$('#fd_MainEmbarquesDiv').show();

				$('#fd_EmbarquesFieldsDiv').hide();
				$('#fd_EmbarquesFieldsDivMain').hide();
			},

			showfd_EmbarquesFieldsDivMain : function(caption) {
				$('#fd_EmbarquesFieldsDivCaption').text(caption);

				_e.hideMainBtns();
				_e.cleanFields();

				$('#fd_EmbarquesFieldsDiv').show();
				$('#fd_EmbarquesFieldsDivMain').show();
			},

			isValidDateCompare: function(fd) {
				var fe = $('#fd_EmbarquesFechaEmbarque').val();

				if (isValidDate(fd) && isValidDate(fe)) {
					
					var start = Date.parse(fe, 'dd/mm/yyyy'),
						end = Date.parse(fd, 'dd/mm/yyyy');

					return (start <= end) ? true : false;
				}
				else {
					return false;
				}
			},

			isValidEmbarques : function() {
				var cedula = $('#fd_EmbarquesCedula').val(),
					capitan = $('#fd_EmbarquesCapitan').val(),
					buque = $('#fd_EmbarquesBuque').val(),
					claseBuque = $('#fd_EmbarquesClaseBuque').val(),
					cargoBuque = $('#fd_EmbarquesCargoBuque').val(),
					fechaEmbarque = $('#fd_EmbarquesFechaEmbarque').val(),
					fechaDesembarque = $('#fd_EmbarquesFechaDesembarque').val(),
					causaDesembarque = $('#fd_EmbarquesCausaDesembarque').val(),
					puertoBuque = $('#fd_EmbarquesPuertoBuque').val(),
					banderaBuque = $('#fd_EmbarquesBanderaBuque').val();

				return (isValidCedula(cedula) && isValidAlphaSpaces(capitan) && isValidAlphaSpacesExt(buque) &&
					isValidAlphaSpacesExt(claseBuque) && isValidAlphaSpaces(cargoBuque) &&
					isValidDate(fechaEmbarque) && _e.isValidDateCompare(fechaDesembarque) &&
					isValidAlphaSpaces(causaDesembarque) && isValidAlphaSpaces(puertoBuque) &&
					isValidAlphaSpaces(banderaBuque));
			},

			checkIsValidEmbarques : function() {
				if (_e.isValidEmbarques()) {
					$('#fd_GuardarEmbarques').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarEmbarques').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadEmbarques : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '' && obj.fechaEmbarque !== '') {
							dEmbarques.push(obj.cedula + '|' + obj.fechaEmbarque + '|' + obj.capitan + '|' + obj.buque + '|' +
								obj.claseBuque + '|' + obj.cargoBuque + '|' + obj.fechaDesembarque + '|' +
								obj.causaDesembarque + '|' + obj.puertoBuque + 
								obj.banderaBuque);
						}
					}
				}
			},

			loadCedulasEmbarques : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGAllSuccessEmbarques : function(result, optionsSuccess, msg) {
				_e.loadEmbarques(result);

				optionsSuccess();
			},

			onGAllCedulasSuccessEmbarques : function(result, optionsSuccess, msg) {
				_e.loadCedulasEmbarques(result);

				optionsSuccess();
			},

			onGAllNotSuccessEmbarques : function(optionsNotSuccess, msg) {
				if (dEmbarques.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccessEmbarques : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarEmbarquesSuccess : function(result, optionsNotSuccess, msg) {
				swal('Embarque con esta cedula y fecha de embarque ya existe');
			},

			onGuardarEmbarquesNotSuccess : function(optionsNotSuccess, msg) {
				_e.commitEmbarques();
			},

			guardarEmbarques : function() {
				var cedula = $('#fd_EmbarquesCedula').val(),
					fe = normalizeDate($('#fd_EmbarquesFechaEmbarque').val()),
					results = [];

				mytables.db.itemQueryAnd('embarques', undefined, 'cedula', cedula, 'fechaEmbarque', fe, 
    				results, onSuccessOptions, onNotSuccessOptions, _e.onGuardarEmbarquesSuccess, 
    				_e.onGuardarEmbarquesNotSuccess, false, false);
			},

			onCommitEmbarquesSuccess : function(result, optionsSuccess, msg) {
				swal('Embarque ha sido guardado');

				$('#fd_GuardarEmbarques').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_e.cleanFields();
			},

			onCommitEmbarquesNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Embarque NO ha sido guardado');
			},

			commitEmbarques : function() {
				var cedula = $('#fd_EmbarquesCedula').val(),
					capitan = $('#fd_EmbarquesCapitan').val(),
					buque = $('#fd_EmbarquesBuque').val(),
					claseBuque = $('#fd_EmbarquesClaseBuque').val(),
					cargoBuque = $('#fd_EmbarquesCargoBuque').val(),
					fechaEmbarque = normalizeDate($('#fd_EmbarquesFechaEmbarque').val()),
					fechaDesembarque = normalizeDate($('#fd_EmbarquesFechaDesembarque').val()),
					causaDesembarque = $('#fd_EmbarquesCausaDesembarque').val(),
					puertoBuque = $('#fd_EmbarquesPuertoBuque').val(),
					banderaBuque = $('#fd_EmbarquesBanderaBuque').val(),

					obj = {"cedula": cedula, "capitan": capitan, "buque": buque, "claseBuque": claseBuque, 
						"cargoBuque": cargoBuque, "fechaEmbarque": fechaEmbarque, "fechaDesembarque": fechaDesembarque,
						"causaDesembarque": causaDesembarque, "puertoBuque": puertoBuque, "banderaBuque": banderaBuque};

				mytables.db.itemCreate('embarques', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_e.onCommitEmbarquesSuccess, _e.onCommitEmbarquesNotSuccess);
			},

			cancelarEmbarques : function() {
				_e.cleanFields();

				$('#fd_MainEmbarquesDiv').show();

				$('#fd_EmbarquesFieldsDiv').hide();
				$('#fd_EmbarquesFieldsDivMain').hide();
			}
		};

		tACedulaEmbarques = function() {
			$('#fd_EmbarquesCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_EmbarquesCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGAllCedulasSuccessEmbarques = function(result, optionsSuccess, msg) {
			_e.onGAllCedulasSuccessEmbarques(result, optionsSuccess, msg);
			
			tACedulaEmbarques();
		};

		gAllEmbarques = function(onSuccessOptions) {
			dEmbarques = [];

			mytables.db.listAll('embarques', dEmbarques, onSuccessOptions, onSuccessOptions, 
				_e.onGAllSuccessEmbarques, _e.onGAllNotSuccessEmbarques, true);
		};

		gAllCedulasEmbarques = function(onSuccessOptions) {
			cedulas = [];
			
			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccessEmbarques, _e.onGAllCedulasNotSuccessEmbarques, true);
		};

		$('#fd_EmbarquesCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_EmbarquesCedula', undefined, '#fd_EmbarquesCedulaNoValida', '#fd_EmbarquesCapitan', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesCapitan').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_EmbarquesCapitan', undefined, '#fd_EmbarquesCapitanNoValida', '#fd_EmbarquesBuque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesBuque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpacesExt, '#fd_EmbarquesBuque', undefined, '#fd_EmbarquesBuqueNoValida', '#fd_EmbarquesClaseBuque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesClaseBuque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpacesExt, '#fd_EmbarquesClaseBuque', undefined, '#fd_EmbarquesClaseBuqueNoValida', '#fd_EmbarquesCargoBuque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesCargoBuque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_EmbarquesCargoBuque', undefined, '#fd_EmbarquesCargoBuqueNoValida', '#fd_EmbarquesFechaEmbarque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesFechaEmbarque').keyup(function (e) {
			fieldOnKey(e, isValidDate, '#fd_EmbarquesFechaEmbarque', undefined, '#fd_EmbarquesFechaEmbarqueNoValida', '#fd_EmbarquesFechaDesembarque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesFechaDesembarque').keyup(function (e) {
			fieldOnKey(e, _e.isValidDateCompare, '#fd_EmbarquesFechaDesembarque', undefined, '#fd_EmbarquesFechaDesembarqueNoValida', '#fd_EmbarquesCausaDesembarque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesCausaDesembarque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_EmbarquesCausaDesembarque', undefined, '#fd_EmbarquesCausaDesembarqueNoValida', '#fd_EmbarquesPuertoBuque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesPuertoBuque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_EmbarquesPuertoBuque', undefined, '#fd_EmbarquesPuertoBuqueNoValida', '#fd_EmbarquesBanderaBuque', false);

			_e.checkIsValidEmbarques();
		});

		$('#fd_EmbarquesBanderaBuque').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_EmbarquesBanderaBuque', undefined, '#fd_EmbarquesBanderaBuqueNoValida', '#fd_GuardarEmbarques', false);

			_e.checkIsValidEmbarques();
		});

		onSuccessExecuteEliminarEmbarquesTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllEmbarques(modificarEmbarque);
		};

		executeEliminarEmbarquesTabla = function(cedula) {
			var fechaEmbarque = cedula.substring(cedula.indexOf('--') + 2, cedula.length).trim();
			cedula = cedula.substring(0, cedula.indexOf('--')).trim();

			mytables.db.itemDeleteExt('embarques', 'cedula', cedula, 'fechaEmbarque', fechaEmbarque,
    			cedula, cedula, onSuccessExecuteEliminarEmbarquesTabla, 
    			function() {});
		};

		eliminarEmbarqueTabla = function(cedula, fechaEmbarque) {
			swal({title: 'Eliminar embarque de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar este embarque.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarEmbarquesTabla(cedula + '--' + fechaEmbarque);
				}
			);
		};

		modificarEmbarqueTabla = function(cedula, fechaEmbarque) {
			console.log(cedula + ' ' + fechaEmbarque);
		};

		$('#stackable_fd_EmbarquesTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedulaFechaEmb = $(this).attr('id').replace('_EmbModificar', ''),
					parts = cedulaFechaEmb.split('--'),
					cedula = parts[0],
					fechaEmbarque = parts[1];

				$('#' + cedulaFechaEmb + '_EmbMenu').dropdown('toggle');

				modificarEmbarqueTabla(cedula, fechaEmbarque);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedulaFechaEmb = $(this).attr('id').replace('_EmbEliminar', ''),
					parts = cedulaFechaEmb.split('--'),
					cedula = parts[0],
					fechaEmbarque = parts[1];

				$('#' + cedulaFechaEmb + '_EmbMenu').dropdown('toggle');

				eliminarEmbarqueTabla(cedula, fechaEmbarque);

				return false;
			}
		});

		$('#stackable_fd_EmbarquesTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_EmbarquesTableBuscar').val();

			displayEmbarques(fld);
		});

		showBuscarEmbarques = function() {
			if (dEmbarques.length > 1) {
				$('#stackable_fd_EmbarquesTableBuscar').show();

				$('#stackable_fd_EmbarquesTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dEmbarques.length.toString() + ' registros...');

				$('#stackable_fd_EmbarquesTableCount').text(dEmbarques.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_EmbarquesTableBuscar').hide();
				$('#stackable_fd_EmbarquesTableCount').text('0 registros');
			}
		};
		
		displayEmbarques = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_EmbarquesTable').html('');

			html.push('<thead><tr align="center"><th>Cedula / Embarque</th><th>Embarque</th><th>Buque</th><th>Desembarque</th><th>Causa</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dEmbarques.length - 1; i++) {
				if (buscarStr === '' || findInPipedStr(dEmbarques[i], buscarStr)) {

					var obj = dEmbarques[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '--' + parts[1] + '_EmbMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '--' + parts[1] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '--' + parts[1] + '_EmbModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '--' + parts[1] + '_EmbEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
						parts[3] + '</td><td>' + parts[6] + '</td><td>' + parts[7] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_EmbarquesTable').html(html);

			$('#stackable_fd_EmbarquesTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarEmbarque = function() {
			hideSpinner(spinTimeHide);

			if (dEmbarques.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_EmbarquesExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_EmbarquesTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainEmbarquesDiv', false);

				showBuscarEmbarques();
				displayEmbarques('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_EmbarquesExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_EmbarquesTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainEmbarquesDiv', true);

				swal('No existen embarques');
			}
		};

		nuevoEmbarque = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_e.showfd_EmbarquesFieldsDivMain('Nuevo Embarque');
				$('#fd_EmbarquesCedula').focus();

				$('#fd_GuardarEmbarques').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_NuevoEmbarque').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasEmbarques(nuevoEmbarque);

			return false;
		});

		$('#fd_ModificarEmbarque').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllEmbarques(modificarEmbarque);

			return false;
		});

		$('#fd_VolverEmbarque').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_EmbarquesExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_EmbarquesTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainEmbarquesDiv', true);

			return false;
		});

		$('#fd_GuardarEmbarques').click(function(e) {
			e.preventDefault();

			_e.guardarEmbarques();

			return false;
		});

		$('#fd_CancelarEmbarques').click(function(e) {
			e.preventDefault();

			_e.cancelarEmbarques();

			return false;
		});

		$('#fd_CancelarEmbarques').keyup(function(e) {
			var enabled = !$('#fd_CancelarEmbarques').is(':disabled');

			if (enabled && e.which === 13) {
				_e.cancelarEmbarques();
			}
		});

		$('#fd_GuardarEmbarques').keyup(function(e) {
			var enabled = !$('#fd_GuardarEmbarques').is(':disabled');

			if (enabled && e.which === 13) {
				_e.guardarEmbarques();
			}
		});

	}(window.main, window.embarques = window.embarques || {}, window.jQuery));

	//Datos-Personales
	(function (main, datosPersonales, $, undefined) {

		var cedulas = [], dPersonales = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _p = {

			cleanFields : function() {
				$('#fd_DatosPersonalesCedula').val('');
				$('#fd_DatosPersonalesTelefonos').val('');
				$('#fd_DatosPersonalesDireccion').val('');
				$('#fd_DatosPersonalesEmails').val('');
				$('#fd_DatosPersonalesWebs').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainDatosPersonalesDiv').hide();
			},

			cancelarDatosPersonales : function() {
				_p.cleanFields();

				$('#fd_MainDatosPersonalesDiv').show();

				$('#fd_DatosPersonalesFieldsDiv').hide();
				$('#fd_DatosPersonalesFieldsDivMain').hide();
			},

			showfd_DatosPersonalesFieldsDivMain : function(caption) {
				$('#fd_DatosPersonalesFieldsDivCaption').text(caption);

				_p.hideMainBtns();
				_p.cleanFields();

				$('#fd_DatosPersonalesFieldsDiv').show();
				$('#fd_DatosPersonalesFieldsDivMain').show();
			},

			isValidDatosPersonales : function() {
				var cedula = $('#fd_DatosPersonalesCedula').val(),
					telefonos = $('#fd_DatosPersonalesTelefonos').val(),
					direccion = $('#fd_DatosPersonalesDireccion').val(),
					emails = $('#fd_DatosPersonalesEmails').val(),
					webs = $('#fd_DatosPersonalesWebs').val();

				return (isValidCedula(cedula) && isValidPhoneNumbers(telefonos) && isValidAlphaSpaces(direccion) &&
					isValidEmails(emails) && isValidWebs(webs));
			},

			checkIsValidDatosPersonales: function() {
				if (_p.isValidDatosPersonales()) {
					$('#fd_GuardarDatosPersonales').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarDatosPersonales').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadCedulas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			loadDatosPersonales : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							dPersonales.push(obj.cedula + '|' + obj.telefonos + '|' +
								obj.direccion + '|' + obj.emails + '|' +
								obj.webs);
						}
					}
				}
			},

			onGAllDatosPersonalesSuccess : function(result, optionsSuccess, msg) {
				_p.loadDatosPersonales(result);

				optionsSuccess();
			},

			onGAllCedulasSuccess : function(result, optionsSuccess, msg) {
				_p.loadCedulas(result);

				optionsSuccess();
			},

			onGAllDatosPersonalesNotSuccess : function(optionsNotSuccess, msg) {
				if (dPersonales.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGAllCedulasNotSuccess : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGuardarDatosPersonalesSuccess : function(result, optionsNotSuccess, msg) {
				swal('Dato-Personal con esta cedula ya existe');
			},

			onGuardarDatosPersonalesNotSuccess : function(optionsNotSuccess, msg) {
				_p.commitDatosPersonales();
			},

			guardarDatosPersonales : function() {
				var cedula = $('#fd_DatosPersonalesCedula').val();

				mytables.db.itemExists('datos-personales', 'cedula', cedula, 
    				onSuccessOptions, onNotSuccessOptions, _p.onGuardarDatosPersonalesSuccess, 
    				_p.onGuardarDatosPersonalesNotSuccess);
			},

			onCommitDatosPersonalesSuccess : function(result, optionsSuccess, msg) {
				swal('Dato-Personal ha sido guardado');

				$('#fd_GuardarDatosPersonales').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_p.cleanFields();
			},

			onCommitDatosPersonalesNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Dato-Personal NO ha sido guardado');
			},

			commitDatosPersonales : function() {
				var cedula = $('#fd_DatosPersonalesCedula').val(),
					telefonos = $('#fd_DatosPersonalesTelefonos').val(),
					direccion = $('#fd_DatosPersonalesDireccion').val(),
					emails = $('#fd_DatosPersonalesEmails').val(),
					webs = $('#fd_DatosPersonalesWebs').val().replaceAll('http://', '').replaceAll('https://', ''),

					obj = {"cedula" :cedula, "telefonos": telefonos, "direccion": direccion, "emails": emails, 
						"webs": webs};

				mytables.db.itemCreate('datos-personales', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_p.onCommitDatosPersonalesSuccess, _p.onCommitDatosPersonalesNotSuccess);
			},

			cancelarDatosPersonales : function() {
				_p.cleanFields();

				$('#fd_MainDatosPersonalesDiv').show();

				$('#fd_DatosPersonalesFieldsDiv').hide();
				$('#fd_DatosPersonalesFieldsDivMain').hide();
			}
		};

		onSuccessExecuteEliminarDatosPersonalTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);

			gAllDatosPersonales(modificarDatosPersonales);
		};

		executeEliminarDatosPersonalTabla = function(cedula) {
			mytables.db.itemDelete('datos-personales', 'cedula', cedula,
    			cedula, cedula, onSuccessExecuteEliminarDatosPersonalTabla, 
    			function() {});
		};

		eliminarDatosPersonalTabla = function(cedula) {
			swal({title: 'Eliminar datos-personales de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar todos los datos-personales a este registro.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarDatosPersonalTabla(cedula);
				}
			);
		};

		modificarDatosPersonalTabla = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_DatosPersonalesTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_DPModificar', '');
				$('#' + cedula + '_DPMenu').dropdown('toggle');

				modificarDatosPersonalTabla(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_DPEliminar', '');
				$('#' + cedula + '_DPMenu').dropdown('toggle');

				eliminarDatosPersonalTabla(cedula);

				return false;
			}
		});

		$('#stackable_fd_DatosPersonalesTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_DatosPersonalesTableBuscar').val();

			displayDatosPersonales(fld);
		});

		showBuscarDatosPersonales = function() {
			if (dPersonales.length > 1) {
				$('#stackable_fd_DatosPersonalesTableBuscar').show();

				$('#stackable_fd_DatosPersonalesTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dPersonales.length.toString() + ' registros...');

				$('#stackable_fd_DatosPersonalesTableCount').text(dPersonales.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_DatosPersonalesTableBuscar').hide();
				$('#stackable_fd_DatosPersonalesTableCount').text('0 registros');
			}
		};
		
		displayDatosPersonales = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_DatosPersonalesTable').html('');

			html.push('<thead><tr align="center"><th>Cedula</th><th>telefonos</th><th>Direccion</th><th>Emails</th><th>Webs</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dPersonales.length - 1; i++) {
				if (buscarStr === '' || findInPipedStr(dPersonales[i], buscarStr)) {

					var obj = dPersonales[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '_DPMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '_DPModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '_DPEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_DatosPersonalesTable').html(html);

			$('#stackable_fd_DatosPersonalesTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarDatosPersonales = function() {
			hideSpinner(spinTimeHide);

			if (dPersonales.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_DatosPersonalesExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_DatosPersonalesTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainDatosPersonalesDiv', false);

				showBuscarDatosPersonales();
				displayDatosPersonales('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_DatosPersonalesExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_DatosPersonalesTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainDatosPersonalesDiv', true);

				swal('No existen datos-personales');
			}
		};

		nuevoDatosPersonales = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_p.showfd_DatosPersonalesFieldsDivMain('Nuevo Dato-Personal');
				$('#fd_DatosPersonalesCedula').focus();

				$('#fd_GuardarDatosPersonales').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_ModificarDatosPersonales').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllDatosPersonales(modificarDatosPersonales);

			return false;
		});

		$('#fd_VolverDatosPersonal').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_DatosPersonalesExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_DatosPersonalesTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainDatosPersonalesDiv', true);

			return false;
		});

		$('#fd_NuevoDatosPersonales').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulas(nuevoDatosPersonales);

			return false;
		});

		$('#fd_GuardarDatosPersonales').click(function(e) {
			e.preventDefault();

			_p.guardarDatosPersonales();

			return false;
		});

		$('#fd_CancelarDatosPersonales').click(function(e) {
			e.preventDefault();

			_p.cancelarDatosPersonales();

			return false;
		});

		$('#fd_CancelarDatosPersonales').keyup(function(e) {
			var enabled = !$('#fd_CancelarDatosPersonales').is(':disabled');

			if (enabled && e.which === 13) {
				_p.cancelarDatosPersonales();
			}
		});

		$('#fd_GuardarDatosPersonales').keyup(function(e) {
			var enabled = !$('#fd_GuardarDatosPersonales').is(':disabled');

			if (enabled && e.which === 13) {
				_p.guardarDatosPersonales();
			}
		});

		tACedula = function() {
			$('#fd_DatosPersonalesCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();

			$('#fd_DatosPersonalesCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		gAllDatosPersonales = function(onSuccessOptions) {
			dPersonales = [];

			mytables.db.listAll('datos-personales', datosPersonales, onSuccessOptions, onSuccessOptions, 
				_p.onGAllDatosPersonalesSuccess, _p.onGAllDatosPersonalesNotSuccess, true);
		};

		gAllCedulas = function(onSuccessOptions) {
			cedulas = [];
			
			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGAllCedulasSuccess, _p.onGAllCedulasNotSuccess, true);
		};

		onGAllCedulasSuccess = function(result, optionsSuccess, msg) {
			_p.onGAllCedulasSuccess(result, optionsSuccess, msg);
			
			tACedula();
		};

		$('#fd_DatosPersonalesCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_DatosPersonalesCedula', undefined, '#fd_DatosPersonalesCedulaNoValida', '#fd_DatosPersonalesTelefonos', false);

			_p.checkIsValidDatosPersonales();
		});

		$('#fd_DatosPersonalesTelefonos').keyup(function (e) {
			fieldOnKey(e, isValidPhoneNumbers, '#fd_DatosPersonalesTelefonos', undefined, '#fd_DatosPersonalesTelefonosNoValida', '#fd_DatosPersonalesDireccion', false);

			_p.checkIsValidDatosPersonales();
		});

		$('#fd_DatosPersonalesDireccion').keyup(function (e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_DatosPersonalesDireccion', undefined, '#fd_DatosPersonalesDireccionNoValida', '#fd_DatosPersonalesEmails', false);
		
			_p.checkIsValidDatosPersonales();
		});

		$('#fd_DatosPersonalesEmails').keyup(function (e) {
			fieldOnKey(e, isValidEmails, '#fd_DatosPersonalesEmails', undefined, '#fd_DatosPersonalesEmailsNoValida', '#fd_DatosPersonalesWebs', true);
		
			_p.checkIsValidDatosPersonales();
		});

		$('#fd_DatosPersonalesWebs').keyup(function (e) {
			fieldOnKey(e, isValidWebs, '#fd_DatosPersonalesWebs', undefined, '#fd_DatosPersonalesWebsNoValida', '#fd_GuardarDatosPersonales', true);
		
			_p.checkIsValidDatosPersonales();
		});

	}(window.main, window.datosPersonales = window.datosPersonales || {}, window.jQuery));

	//Datos-fisicos
	(function (main, datosFisicos, $, undefined) {

		var cedulas = [], dFisicos = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _d = {

			cleanFields : function() {
				$('#fd_DatosFisicosCedula').val('');
				$('#fd_DatosFisicosPeso').val('');
				$('#fd_DatosFisicosEstatura').val('');
				$('#fd_DatosFisicosTalla').val('');
				$('#fd_DatosFisicosZapatos').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainDatosFisicosDiv').hide();
			},

			cancelarDatosFisicos : function() {
				_d.cleanFields();

				$('#fd_MainDatosFisicosDiv').show();

				$('#fd_DatosFisicosFieldsDiv').hide();
				$('#fd_DatosFisicosFieldsDivMain').hide();
			},

			showfd_DatosFisicosFieldsDivMain : function(caption) {
				$('#fd_DatosFisicosFieldsDivCaption').text(caption);

				_d.hideMainBtns();
				_d.cleanFields();

				$('#fd_DatosFisicosFieldsDiv').show();
				$('#fd_DatosFisicosFieldsDivMain').show();
			},

			loadDatosFisicos : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							dFisicos.push(obj.cedula + '|' + obj.peso + '|' +
								obj.estatura + '|' + obj.talla + '|' + obj.zapatos);
						}
					}
				}
			},

			loadCedulas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula);
						}
					}
				}
			},

			onGetAllDatosFisicosSuccess : function(result, optionsSuccess, msg) {
				_d.loadDatosFisicos(result);

				optionsSuccess();
			},

			onGetAllCedulasSuccess : function(result, optionsSuccess, msg) {
				_d.loadCedulas(result);

				optionsSuccess();
			},

			onGetAllDatosFisicosNotSuccess : function(optionsNotSuccess, msg) {
				if (dFisicos.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			onGetAllCedulasNotSuccess : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			},

			isDatosFisicosFields : function() {
				var cedula = $('#fd_DatosFisicosCedula').val(),
					peso = $('#fd_DatosFisicosPeso').val(),
					estatura = $('#fd_DatosFisicosEstatura').val(),
					talla = $('#fd_DatosFisicosTalla').val(),
					zapatos = $('#fd_DatosFisicosZapatos').val();

				return (isValidCedula(cedula) && isValidInt(peso) && isValidInt(estatura) &&
					isValidInt(talla) && isValidInt(zapatos));
			},

			checkIsValidDatosFisicosFields : function() {
				if (_d.isDatosFisicosFields()) {
					$('#fd_GuardarDatosFisicos').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarDatosFisicos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			onGuardarDatosFisicosSuccess : function(result, optionsNotSuccess, msg) {
				swal('Dato-Fisico con esta cedula ya existe');
			},

			onGuardarDatosFisicosNotSuccess : function(optionsNotSuccess, msg) {
				_d.commitDatosFisicos();
			},

			guardarDatosFisicos : function() {
				var cedula = $('#fd_DatosFisicosCedula').val();

				mytables.db.itemExists('datos-fisicos', 'cedula', cedula, 
    				onSuccessOptions, onNotSuccessOptions, _d.onGuardarDatosFisicosSuccess, 
    				_d.onGuardarDatosFisicosNotSuccess);
			},

			onCommitDatosFisicosSuccess : function(result, optionsSuccess, msg) {
				swal('Dato-Fisico ha sido guardado');

				$('#fd_GuardarDatosFisicos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_d.cleanFields();
			},

			onCommitDatosFisicosNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Dato-Fisico NO ha sido guardado');
			},

			commitDatosFisicos : function() {
				var cedula = $('#fd_DatosFisicosCedula').val(),
					peso = $('#fd_DatosFisicosPeso').val(),
					estatura = $('#fd_DatosFisicosEstatura').val(),
					talla = $('#fd_DatosFisicosTalla').val(),
					zapatos = $('#fd_DatosFisicosZapatos').val(),

					obj = {"cedula" :cedula, "peso": peso, "estatura": estatura, "talla": talla, 
						"zapatos": zapatos};

				mytables.db.itemCreate('datos-fisicos', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_d.onCommitDatosFisicosSuccess, _d.onCommitDatosFisicosNotSuccess);
			},

			cancelarDatosFisicos : function() {
				_d.cleanFields();

				$('#fd_MainDatosFisicosDiv').show();

				$('#fd_DatosFisicosFieldsDiv').hide();
				$('#fd_DatosFisicosFieldsDivMain').hide();	
			}
		};

		nuevoDatoFisico = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				_d.showfd_DatosFisicosFieldsDivMain('Nuevo Dato-Fisico');
				$('#fd_DatosFisicosCedula').focus();

				$('#fd_GuardarDatosFisicos').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
			}
			else {
				swal('No existen tripulantes. Introduzca primero un tripulante');
			}
		};

		$('#fd_NuevoDatosFisicos').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			getAllCedulas(nuevoDatoFisico);

			return false;
		});

		onSuccessExecuteEliminarDatosFisicoTabla = function(result, optionsSuccess, msg) {
			showSpinner(1);
						
			getAllDatosFisicos(modificarDatoFisico);
		};

		executeEliminarDatosFisicoTabla = function(cedula) {
			mytables.db.itemDelete('datos-fisicos', 'cedula', cedula,
    			cedula, cedula, onSuccessExecuteEliminarDatosFisicoTabla, 
    			function() {});
		};

		eliminarDatosFisicoTabla = function(cedula) {
			swal({title: 'Eliminar datos-fisicos de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar todos los datos-fisicos a este registro.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarDatosFisicoTabla(cedula);
				}
			);
		};

		modificarDatosFisicoTabla = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_DatosFisicosTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_DFModificar', '');
				$('#' + cedula + '_DFMenu').dropdown('toggle');

				modificarDatosFisicoTabla(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_DFEliminar', '');
				$('#' + cedula + '_DFMenu').dropdown('toggle');

				eliminarDatosFisicoTabla(cedula);

				return false;
			}
		});

		$('#stackable_fd_DatosFisicosTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_DatosFisicosTableBuscar').val();

			displayDatosFisicos(fld);
		});

		showBuscarDatosFisicos = function() {
			if (dFisicos.length > 1) {
				$('#stackable_fd_DatosFisicosTableBuscar').show();

				$('#stackable_fd_DatosFisicosTableBuscar').attr('placeholder', 'Buscar entre ' + 
					dFisicos.length.toString() + ' registros...');

				$('#stackable_fd_DatosFisicosTableCount').text(dFisicos.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_DatosFisicosTableBuscar').hide();
				$('#stackable_fd_DatosFisicosTableCount').text('0 registros');
			}
		};

		displayDatosFisicos = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_DatosFisicosTable').html('');

			html.push('<thead><tr align="center"><th>Cedula</th><th>Peso</th><th>Estatura</th><th>Talla</th><th>Zapatos</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= dFisicos.length - 1; i++) {
				if (buscarStr === '' || findInPipedStr(dFisicos[i], buscarStr)) {

					var obj = dFisicos[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '_DFMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '_DFModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '_DFEliminar" href="#">Eliminar</a></li></ul></div></td><td>' 
							+ parts[1] + '</td><td>' + parts[2] + '</td><td>' + parts[3] + '</td><td>' + parts[4]
							+ '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_DatosFisicosTable').html(html);

			$('#stackable_fd_DatosFisicosTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarDatoFisico = function() {
			hideSpinner(spinTimeHide);

			if (dFisicos.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_DatosFisicosExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_DatosFisicosTable', true);

				main.showHidefd_MainBtnsDiv('fd_MainDatosFisicosDiv', false);

				showBuscarDatosFisicos();
				displayDatosFisicos('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_DatosFisicosExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_DatosFisicosTable', false);

				main.showHidefd_MainBtnsDiv('fd_MainDatosFisicosDiv', true);

				swal('No existen datos-fisicos');
			}
		};

		$('#fd_ModificarDatosFisicos').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			getAllDatosFisicos(modificarDatoFisico);

			return false;
		});

		$('#fd_VolverDatosFisico').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_DatosFisicosExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_DatosFisicosTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainDatosFisicosDiv', true);

			return false;
		});

		tAheadCedula = function() {
			$('#fd_DatosFisicosCedula').typeahead('destroy');

			var cc = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(cedulas, function(cedula) {
		  			return {value: cedula}; 
		  		})
			});
		
			cc.initialize();
		 
			$('#fd_DatosFisicosCedula').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'cedulas',
		  		displayKey: 'value',
		  		source: cc.ttAdapter()
			});
		};

		onGetAllCedulasSuccess = function(result, optionsSuccess, msg) {
			_d.onGetAllCedulasSuccess(result, optionsSuccess, msg);
			tAheadCedula();
		};

		getAllDatosFisicos = function(onSuccessOptions) {
			dFisicos = [];

			mytables.db.listAll('datos-fisicos', datosFisicos, onSuccessOptions, onSuccessOptions,
				_d.onGetAllDatosFisicosSuccess, _d.onGetAllDatosFisicosNotSuccess, true);
		};

		getAllCedulas = function(onSuccessOptions) {
			cedulas = [];
			
			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGetAllCedulasSuccess, _d.onGetAllCedulasNotSuccess, true);
		};

		$('#fd_DatosFisicosCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_DatosFisicosCedula', undefined, '#fd_DatosFisicosCedulaNoValida', '#fd_DatosFisicosPeso', false);

			_d.checkIsValidDatosFisicosFields();
		});

		$('#fd_DatosFisicosPeso').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_DatosFisicosPeso', undefined, '#fd_DatosFisicosPesoNoValida', '#fd_DatosFisicosEstatura', false);

			_d.checkIsValidDatosFisicosFields();
		});

		$('#fd_DatosFisicosEstatura').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_DatosFisicosEstatura', undefined, '#fd_DatosFisicosEstaturaNoValida', '#fd_DatosFisicosTalla', false);

			_d.checkIsValidDatosFisicosFields();
		});

		$('#fd_DatosFisicosTalla').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_DatosFisicosTalla', undefined, '#fd_DatosFisicosTallaNoValida', '#fd_DatosFisicosZapatos', false);

			_d.checkIsValidDatosFisicosFields();
		});

		$('#fd_DatosFisicosZapatos').keyup(function (e) {
			fieldOnKey(e, isValidInt, '#fd_DatosFisicosZapatos', undefined, '#fd_DatosFisicosZapatosNoValida', '#fd_GuardarDatosFisicos', false);

			_d.checkIsValidDatosFisicosFields();
		});

		$('#fd_CancelarDatosFisicos').click(function(e) {
			e.preventDefault();

			_d.cancelarDatosFisicos();

			return false;
		});

		$('#fd_GuardarDatosFisicos').click(function(e) {
			e.preventDefault();

			_d.guardarDatosFisicos();

			return false;
		});

		$('#fd_CancelarDatosFisicos').keyup(function(e) {
			var enabled = !$('#fd_CancelarDatosFisicos').is(':disabled');

			if (enabled && e.which === 13) {
				_d.cancelarDatosFisicos();
			}
		});

		$('#fd_GuardarDatosFisicos').keyup(function(e) {
			var enabled = !$('#fd_GuardarDatosFisicos').is(':disabled');

			if (enabled && e.which === 13) {
				_d.guardarDatosFisicos();
			}
		});

	}(window.main, window.datosFisicos = window.datosFisicos || {}, window.jQuery));

	// Tripulantes
	(function (main, tripulantes, $, undefined) {

		var cedulas = [], onSuccessOptions = undefined, onNotSuccessOptions = undefined;

		var _t = {

			cleanFields : function() {
				$('#fd_TripulantesCedula').val('');
				$('#fd_TripulantesCedulaMarina').val('');
				$('#fd_TripulantesNombreCompleto').val('');
				$('#fd_TripulantesFechaNacimiento').val('');
				$('#fd_TripulantesLugarNacimiento').val('');
				$('#fd_TripulantesProvinciaNacimiento').val('');
				$('#fd_TripulantesPaisNacimiento').val('');
				$('#fd_TripulantesProfesion').val('');
				$('#fd_TripulantesEstadoCivil').val('');
				$('#fd_TripulantesSexo').val('');
			},

			hideMainBtns : function() {
				$('#fd_MainTripulanteDiv').hide();
			},

			cancelarTripulante : function() {
				_t.cleanFields();

				$('#fd_MainTripulanteDiv').show();

				$('#fd_TripulantesFieldsDiv').hide();
				$('#fd_TripulantesFieldsDivMain').hide();
			},

			showfd_TripulantesFieldsDivMain : function(caption) {
				$('#fd_TripulantesFieldsDivCaption').text(caption);

				_t.hideMainBtns();
				_t.cleanFields();

				$('#fd_TripulantesFieldsDiv').show();
				$('#fd_TripulantesFieldsDivMain').show();
			},

			onGuardarTripulanteSuccess : function(result, optionsSuccess, msg) {
				swal('Tripulante con esta cedula ya existe');
			},

			onGuardarTripulanteNotSuccess : function(optionsNotSuccess, msg) {
				_t.commitTripulante();
			},

			guardarTripulante : function() {
				var cedula = $('#fd_TripulantesCedula').val();

				mytables.db.itemExists('tripulantes', 'cedula', cedula, 
    				undefined, undefined, _t.onGuardarTripulanteSuccess, 
    				_t.onGuardarTripulanteNotSuccess);
			},

			onCommitTripulanteSuccess : function(result, optionsSuccess, msg) {
				swal('Tripulante ha sido guardado');

				$('#fd_GuardarTripulante').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				_t.cleanFields();
			},

			onCommitTripulanteNotSuccess: function(optionsNotSuccess, msg) {
				swal('ERROR -> Tripulante NO ha sido guardado');
			},

			commitTripulante : function() {
				var cedula = $('#fd_TripulantesCedula').val(),
					cedulaMarina = $('#fd_TripulantesCedulaMarina').val(),
					nombreCompleto = $('#fd_TripulantesNombreCompleto').val(),
					sexo = $('#fd_TripulantesSexo').val(),
					fechaNacimiento = normalizeDate($('#fd_TripulantesFechaNacimiento').val()),
					lugarNacimiento = $('#fd_TripulantesLugarNacimiento').val(),
					provinciaNacimiento = $('#fd_TripulantesProvinciaNacimiento').val(),
					paisNacimiento = $('#fd_TripulantesPaisNacimiento').val(),
					profesion = $('#fd_TripulantesProfesion').val(),
					estadoCivil = $('#fd_TripulantesEstadoCivil').val(),

					obj = {"cedula": cedula, "cedulaMarina": cedulaMarina, "nombreCompleto": nombreCompleto,
						"sexo": sexo, "fechaNacimiento": fechaNacimiento, "lugarNacimiento": lugarNacimiento,
						"provinciaNacimiento": provinciaNacimiento, "paisNacimiento": paisNacimiento,
						"profesion": profesion, "estadoCivil": estadoCivil};

				mytables.db.itemCreate('tripulantes', obj, 
					onSuccessOptions, onNotSuccessOptions, 
					_t.onCommitTripulanteSuccess, _t.onCommitTripulanteNotSuccess);
			},

			isValidTripulantesFields : function() {
				var cedula = $('#fd_TripulantesCedula').val(),
					cedulaMarina = $('#fd_TripulantesCedulaMarina').val(),
					nombreCompleto = $('#fd_TripulantesNombreCompleto').val(),
					sexo = $('#fd_TripulantesSexo').val(),
					fechaNacimiento = $('#fd_TripulantesFechaNacimiento').val(),
					lugarNacimiento = $('#fd_TripulantesLugarNacimiento').val(),
					provinciaNacimiento = $('#fd_TripulantesProvinciaNacimiento').val(),
					paisNacimiento = $('#fd_TripulantesPaisNacimiento').val(),
					profesion = $('#fd_TripulantesProfesion').val(),
					estadoCivil = $('#fd_TripulantesEstadoCivil').val();

				return (isValidAlphaNum(cedulaMarina) && isValidCedula(cedula) && 
					isValidAlphaNumLatin(nombreCompleto) && isValidSexo(sexo) &&
					isValidDate(fechaNacimiento) && isValidCountry(paisNacimiento) && 
					isValidAlphaSpaces(lugarNacimiento) &&
					isValidAlphaSpaces(provinciaNacimiento) && isValidAlphaSpaces(profesion) && 
					isValidEstadoCivil(estadoCivil, sexo));
			},

			checkIsValidTripulantesFields : function() {
				if (_t.isValidTripulantesFields()) {
					$('#fd_GuardarTripulante').removeClass('disabled btn btn-success btn-sm').addClass('btn btn-success btn-sm');
				}
				else {
					$('#fd_GuardarTripulante').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');
				}
			},

			loadCedulas : function(rs) {
				if (rs.length > 0) {
					for (var i = 0; i <= rs.length - 1; i++) {
						var obj = parseJsonResult(rs[i]);

						if (obj.cedula !== '') {
							cedulas.push(obj.cedula.asStr() + '|' + obj.cedulaMarina.asStr() + '|' +
								obj.nombreCompleto.asStr() + '|' + obj.sexo.asStr() + '|' + 
								obj.fechaNacimiento.asStr() + '|' + obj.lugarNacimiento.asStr() + '|' +
								obj.provinciaNacimiento.asStr() + '|' + obj.paisNacimiento.asStr() + '|' +
								obj.profesion.asStr() + '|' + obj.estadoCivil.asStr());
						}
					}
				}
			},

			onGetAllCedulasTripulantesSuccess : function(result, optionsSuccess, msg) {
				_t.loadCedulas(result);

				optionsSuccess();
			},

			onGetAllCedulasTripulantesNotSuccess : function(optionsNotSuccess, msg) {
				if (cedulas.length >= 1) {
					swal('ERROR al acceder a la Base de Datos');
				}
				else {
					optionsNotSuccess();
				}
			}
		};

		$('#fd_TripulantesCedula').keyup(function (e) {
			fieldOnKey(e, isValidCedula, '#fd_TripulantesCedula', undefined, '#fd_TripulantesCedulaNoValida', '#fd_TripulantesCedulaMarina', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesCedulaMarina').keyup(function(e) {
			fieldOnKey(e, isValidAlphaNum, '#fd_TripulantesCedulaMarina', undefined, '#fd_TripulantesCedulaMarinaNoValida', '#fd_TripulantesNombreCompleto', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesNombreCompleto').keyup(function(e) {
			fieldOnKey(e, isValidAlphaNumLatin, '#fd_TripulantesNombreCompleto', undefined, '#fd_TripulantesNombreCompletoNoValida', '#fd_TripulantesSexo', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesSexo').keyup(function(e) {
			fieldOnKey(e, isValidSexo, '#fd_TripulantesSexo', undefined, '#fd_TripulantesSexoNoValida', '#fd_TripulantesFechaNacimiento', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesFechaNacimiento').keyup(function(e) {
			fieldOnKey(e, isValidDateWorkingAge, '#fd_TripulantesFechaNacimiento', undefined, '#fd_TripulantesFechaNacimientoNoValida', '#fd_TripulantesLugarNacimiento', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesLugarNacimiento').keyup(function(e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_TripulantesLugarNacimiento', undefined, '#fd_TripulantesLugarNacimientoNoValida', '#fd_TripulantesProvinciaNacimiento', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesProvinciaNacimiento').keyup(function(e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_TripulantesProvinciaNacimiento', undefined, '#fd_TripulantesProvinciaNacimientoNoValida', '#fd_TripulantesPaisNacimiento', false);

			_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesPaisNacimiento').keyup(function(e) {
			fieldOnKey(e, isValidCountry, '#fd_TripulantesPaisNacimiento', undefined, '#fd_TripulantesPaisNacimientoNoValida', '#fd_TripulantesProfesion', false);
			
		  	_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesProfesion').keyup(function(e) {
			fieldOnKey(e, isValidAlphaSpaces, '#fd_TripulantesProfesion', undefined, '#fd_TripulantesProfesionNoValida', '#fd_TripulantesEstadoCivil', false);
			
		  	_t.checkIsValidTripulantesFields();
		});

		$('#fd_TripulantesEstadoCivil').keyup(function(e) {
			fieldOnKey(e, isValidEstadoCivil, '#fd_TripulantesEstadoCivil', '#fd_TripulantesSexo', '#fd_TripulantesEstadoCivilNoValida', '#fd_GuardarTripulante', false);
			
		  	_t.checkIsValidTripulantesFields();
		});

		$('#fd_NuevoTripulante').click(function(e) {
			e.preventDefault();

			_t.showfd_TripulantesFieldsDivMain('Nuevo Tripulante');
			$('#fd_TripulantesCedula').focus();

			$('#fd_GuardarTripulante').removeClass('btn btn-success btn-sm').addClass('disabled btn btn-success btn-sm');

			return false;
		});

		$('#fd_CancelarTripulante').keyup(function(e) {
			var enabled = !$('#fd_CancelarTripulante').is(':disabled');

			if (enabled && e.which === 13) {
				_t.cancelarTripulante();
			}
		});

		$('#fd_GuardarTripulante').keyup(function(e) {
			var enabled = !$('#fd_GuardarTripulante').is(':disabled');

			if (enabled && e.which === 13) {
				_t.guardarTripulante();
			}
		});

		$('#fd_CancelarTripulante').click(function(e) {
			e.preventDefault();

			_t.cancelarTripulante();

			return false;
		});

		$('#fd_GuardarTripulante').click(function(e) {
			e.preventDefault();

			_t.guardarTripulante();

			return false;
		});

		executeEliminarTripulanteTablaCascade = function(cedula) {

			mytables.db.itemDelete('datos-fisicos', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('datos-personales', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('embarques', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('idiomas', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('certificados', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('nacionalidades', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('visas', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('familiares', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('cargos', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('examenes', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});

			mytables.db.itemDelete('clinicas', 'cedula', cedula,
    			undefined, undefined, function() {}, function() {});
		};

		onSuccessExecuteEliminarTripulanteTabla = function(result, optionsSuccess, msg) {
			executeEliminarTripulanteTablaCascade(optionsSuccess);
			
			showSpinner(1);
						
			gAllCedulasTripulantes(modificarTripulantes);
		};

		executeEliminarTripulanteTabla = function(cedula) {
			mytables.db.itemDelete('tripulantes', 'cedula', cedula,
    			cedula, cedula, onSuccessExecuteEliminarTripulanteTabla, 
    			function() {});
		};

		eliminarTripulanteTabla = function(cedula) {
			swal({title: 'Eliminar todos los datos de ' + cedula + '?', 
				text: 'Si eliminas ' + cedula + ' no vas a poder recuperar todos los datos asociados a este registro.', 
				type: 'warning', showCancelButton: true, confirmButtonColor: '#DD6B55',  
				confirmButtonText: 'Si, eliminar!', closeOnConfirm: false }, 
				function(isConfirm) {
					executeEliminarTripulanteTabla(cedula);
				}
			);
		};

		modificarTripulanteTabla = function(cedula) {
			console.log(cedula);
		};

		$('#stackable_fd_TripulantesTable').delegate('a', 'click', function(e) {
			if ($(this).text() === 'Modificar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_TripModificar', '');
				$('#' + cedula + '_TripMenu').dropdown('toggle');

				modificarTripulanteTabla(cedula);

				return false;
			}
			else if ($(this).text() === 'Eliminar') {
				e.preventDefault();

				var cedula = $(this).attr('id').replace('_TripEliminar', '');
				$('#' + cedula + '_TripMenu').dropdown('toggle');

				eliminarTripulanteTabla(cedula);

				return false;
			}
		});

		$('#stackable_fd_TripulantesTableBuscar').keyup(function (e) {
			var fld = $('#stackable_fd_TripulantesTableBuscar').val();

			displayCedulas(fld);
		});

		showBuscarTripulantes = function() {
			if (cedulas.length > 1) {
				$('#stackable_fd_TripulantesTableBuscar').show();

				$('#stackable_fd_TripulantesTableBuscar').attr('placeholder', 'Buscar entre ' + 
					cedulas.length.toString() + ' registros...');

				$('#stackable_fd_TripulantesTableCount').text(cedulas.length.toString() + ' registros');
			}
			else {
				$('#stackable_fd_TripulantesTableBuscar').hide();
				$('#stackable_fd_TripulantesTableCount').text('0 registros');
			}
		};

		displayCedulas = function(buscarStr) {
			var html = [], count = 0;

			$('#stackable_fd_TripulantesTable').html('');

			html.push('<thead><tr align="center"><th>Cedula</th><th>Ced. Marina</th><th>Nombre</th><th>Fecha Nac.</th><th>Lugar Nac.</th><th>Profesion</th></tr></thead>');
			html.push('<tbody>');

			var str = '';

			for (var i = 0; i <= cedulas.length - 1; i++) {
				if (buscarStr === '' || findInPipedStr(cedulas[i], buscarStr)) {

					var obj = cedulas[i],
						parts = obj.split('|');

					str += '<tr  align="center"><td><div class="btn-group"><a id="' + parts[0] + '_TripMenu" href="#" data-toggle="dropdown" class="btn btn-success btn-xs dropdown-toggle"><em class="fa fa-angle-down"></em> ' + parts[0] + '</a><ul class="dropdown-menu pull-left text-left"><li><a id="' + parts[0] + '_TripModificar" href="#">Modificar</a></li><li><a id="' + parts[0] + '_TripEliminar" href="#">Eliminar</a></li></ul></div></td><td>' + parts[1] + '</td><td>' +
							parts[2] + '</td><td>' + parts[4] + '</td><td>' + parts[5] + '</td><td>' +
							parts[6] + '</td></tr>';

					html.push(str);
					str = '';
					count++;
				}
			}

			html.push('</tbody>');

			$('#stackable_fd_TripulantesTable').html(html);

			$('#stackable_fd_TripulantesTableCount').text(count + (count !== 1 ? ' registros' : ' registro'));
		};

		modificarTripulantes = function() {
			hideSpinner(spinTimeHide);

			if (cedulas.length > 0) {
				main.showHidefd_MainBtnsDiv('fd_MainTripulanteDiv', false);

				main.showHidefd_MainBtnsDiv('fd_TripulantesExtrasBtns', true);
				main.showHidefd_MainBtnsDiv('fd_TripulantesTable', true);

				showBuscarTripulantes();
				displayCedulas('');
			}
			else {
				main.showHidefd_MainBtnsDiv('fd_MainTripulanteDiv', true);

				main.showHidefd_MainBtnsDiv('fd_TripulantesExtrasBtns', false);
				main.showHidefd_MainBtnsDiv('fd_TripulantesTable', false);

				swal('No existen tripulantes. Favor cree uno nuevo.');
			}
		};

		$('#fd_ModificarTripulante').click(function(e) {
			e.preventDefault();

			showSpinner(1);
			gAllCedulasTripulantes(modificarTripulantes);

			return false;
		});

		$('#fd_VolverTripulante').click(function(e) {
			e.preventDefault();

			main.showHidefd_MainBtnsDiv('fd_TripulantesExtrasBtns', false);
			main.showHidefd_MainBtnsDiv('fd_TripulantesTable', false);

			main.showHidefd_MainBtnsDiv('fd_MainTripulanteDiv', true);

			return false;
		});

		onGetAllCedulasTripulantesSuccess = function(result, optionsSuccess, msg) {
			_t.onGetAllCedulasTripulantesSuccess(result, optionsSuccess, msg);
		};

		gAllCedulasTripulantes = function(onSuccessOptions) {
			cedulas = [];

			mytables.db.listAll('tripulantes', cedulas, onSuccessOptions, onSuccessOptions, 
				onGetAllCedulasTripulantesSuccess, _t.onGetAllCedulasTripulantesNotSuccess, true);
		};

		tAheadSex = function() {
			$('#fd_TripulantesSexo').typeahead('destroy');

			var sex = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(sx, function(s) {
		  			return {value: s}; 
		  		})
			});
		
			sex.initialize();
		 
			$('#fd_TripulantesSexo').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'sx',
		  		displayKey: 'value',
		  		source: sex.ttAdapter()
			});
		};

		tAheadStates = function() {
			$('#fd_TripulantesPaisNacimiento').typeahead('destroy');

			var states = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(countries, function(state) {
		  			return {value: state}; 
		  		})
			});
		
			states.initialize();
		 
			$('#fd_TripulantesPaisNacimiento').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'countries',
		  		displayKey: 'value',
		  		source: states.ttAdapter()
			});
		};

		tAheadEstadoCvl = function() {
			$('#fd_TripulantesEstadoCivil').typeahead('destroy');

			var estadoCvl = new Bloodhound({
		  		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  		queryTokenizer: Bloodhound.tokenizers.whitespace,
		  		local: $.map(ec, function(cvl) {
		  			return {value: cvl}; 
		  		})
			});
		
			estadoCvl.initialize();
		 
			$('#fd_TripulantesEstadoCivil').typeahead({
		  		hint: true,
		  		highlight: true,
		  		minLength: 1
			},
			{
		  		name: 'ec',
		  		displayKey: 'value',
		  		source: estadoCvl.ttAdapter()
			});
		};

		tAheadSex();
		tAheadStates();
		tAheadEstadoCvl();

	}(window.main, window.tripulantes = window.tripulantes || {}, window.jQuery));
	
	// Routing
	(function (main, login, routing, $, undefined) {
	
		var rt = window.location.hash.slice(2);
	
		var _r = {

			homePage : function() {
				_r.tripulantesPage();
			},

			aboutPage : function() {

			},

			tripulantesPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Tripulantes</small>');
				main.showHidefd_MainBtnsDiv('fd_MainTripulanteDiv', true);
			},

			datosFisicosPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Datos-Fisicos</small>');
				main.showHidefd_MainBtnsDiv('fd_MainDatosFisicosDiv', true);
			},

			datosPersonalesPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Datos-Personales</small>');
				main.showHidefd_MainBtnsDiv('fd_MainDatosPersonalesDiv', true);
			},

			embarquesPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Embarques</small>');
				main.showHidefd_MainBtnsDiv('fd_MainEmbarquesDiv', true);
			},

			idiomasPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Idiomas</small>');
				main.showHidefd_MainBtnsDiv('fd_MainIdiomasDiv', true);
			},

			certificadosPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Certificados</small>');
				main.showHidefd_MainBtnsDiv('fd_MainCertificadosDiv', true);
			},

			nacionalidadesPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Nacionalidades</small>');
				main.showHidefd_MainBtnsDiv('fd_MainNacionalidadesDiv', true);
			},

			visasPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Visas</small>');
				main.showHidefd_MainBtnsDiv('fd_MainVisasDiv', true);
			},

			cargosPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Cargos</small>');
				main.showHidefd_MainBtnsDiv('fd_MainCargosDiv', true);
			},

			familiaresPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Familiares</small>');
				main.showHidefd_MainBtnsDiv('fd_MainFamiliaresDiv', true);
			},

			examenesPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Examenes</small>');
				main.showHidefd_MainBtnsDiv('fd_MainExamenesDiv', true);
			},

			clinicasPage : function() {
				main.hideBtns();
				main.hideForms();

				main.setCaptions('Base de Datos<br><small id="captionSmall">Clinicas</small>');
				main.showHidefd_MainBtnsDiv('fd_MainClinicasDiv', true);
			},
			
			route2Page : function() {

				hideSpinner(spinTimeHideMain);

				if (rt === '' && window.location.href.indexOf('#/') < 0) {
                	window.location.href += '#/';
                	_r.homePage();
            	} else if (rt === 'about') {
            		_r.aboutPage();
            	} else if (rt === 'tripulantes') {
            		_r.tripulantesPage();
            	} else if (rt === 'datos-fisicos') {
            		_r.datosFisicosPage();
            	} else if (rt === 'datos-personales') {
            		_r.datosPersonalesPage();
            	} else if (rt === 'embarques') {
            		_r.embarquesPage();
            	} else if (rt === 'idiomas') {
            		_r.idiomasPage();
            	} else if (rt === 'certificados') {
            		_r.certificadosPage();
            	} else if (rt === 'nacionalidades') {
            		_r.nacionalidadesPage();
            	} else if (rt === 'visas') {
            		_r.visasPage();
            	} else if (rt === 'cargos') {
            		_r.cargosPage();
            	} else if (rt === 'familiares') {
            		_r.familiaresPage();
            	} else if (rt === 'examenes') {
            		_r.examenesPage();
            	} else if (rt === 'clinicas') {
            		_r.clinicasPage();
            	}
			},
			
			render404 : function () {
				window.location.href = '#/404';

				main.hideBtns();
				main.hideForms();

				main.setCaptions('404<br><small id="captionSmall">Error</small>');
				main.showHidefd_MainBtnsDiv('fd_Main404Div', true);
			},

			hideAllForms : function() {
				main.hideBtns();
				main.hideForms();

				main.showHidefd_MainBtnsDiv('fd_Main404Div', false);
			}
		};
		
		var routes = {
			'/': _r.homePage,
			'/about': _r.aboutPage,
			'/tripulantes': _r.tripulantesPage,
			'/datos-personales': _r.datosPersonalesPage,
			'/datos-fisicos': _r.datosFisicosPage,
			'/embarques': _r.embarquesPage,
			'/idiomas': _r.idiomasPage,
			'/certificados': _r.certificadosPage,
			'/nacionalidades': _r.nacionalidadesPage,
			'/visas': _r.visasPage,
			'/familiares': _r.familiaresPage,
			'/cargos': _r.cargosPage,
			'/examenes': _r.examenesPage,
			'/clinicas': _r.clinicasPage
		};
		
		routing.start = function () {
            var router = new Router(routes).configure({
                notfound: _r.render404
            });
            
            router.init();
            _r.hideAllForms();

            _r.route2Page(rt);
        };
		
	}(window.main, window.login, window.routing = window.routing || {}, window.jQuery));

	initDb = function() {
		var isProdApp = false,
			prodStr = (isProdApp) ? '_prod' : '_dev';

		var url = mytables.utils.decrypt('ka0982qvWQUKbsHc900Ww9NP8i4LLUniTMhI'),
			app = mytables.utils.decrypt('km6E2_cs_NqX0Yc%2226E1Cf0U_d') + prodStr,
			id = mytables.utils.decrypt('kiHbHq1q3oIZHlt2ObMhFydUx7o%22i2jHwlz2wlwyHa'),
			sk = mytables.utils.decrypt('kuKKwJYaLnDTaZYloQ79CQfzjjndeslqGftC') + '/' + 
				mytables.utils.decrypt('kKVRvrRg8pOjzHJxkDmDzGZkF7XELXuyOa') + '/' + 
				mytables.utils.decrypt('k4o5w_bwq6Sc5JqDiy2EjEaJPc'),
			rg = mytables.utils.decrypt('kS8fwWxyfvzNPdI7jnq2JU_i6rp');

		mytables.init('http://' + url, app, id, sk, rg);

		console.log('Autodocs' + prodStr);
	}

	initDb();
	routing.start();

})(window.jQuery);