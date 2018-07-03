var diaClase;
var randomFormat = "YYYY/MM/DD"
var horariosLunes = ["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "5:00 p.m.", "6:00 p.m.", "7:00 p.m.", "8:00 p.m."]
var horariosMartes = ["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "6:00 p.m.", "7:00 p.m", "8:00 p.m."]
var horariosMiercoles = ["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "5:00 p.m.", "6:00 p.m.", "7:00 p.m.", "8:00 p.m."]
var horariosJueves = ["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "6:00 p.m.", "7:00 p.m.", "8:00 p.m."]
var horariosViernes = ["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m."];
var horariosSabado = ["9:00 a.m.", "10:00 a.m."]
var diasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var codigoDia = ["A", "B", "C", "D", "E", "F"]
var codigoHorario = ["1", "2", "3", "4", "5", "6", "7", "8"];
//!Este es la cantidad de camas disponibles
var totalClases = 8;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBRrNpwc14FhpcVXutaKZIoa2XWXRYc4J4",
    authDomain: "urbantreeschedule.firebaseapp.com",
    databaseURL: "https://urbantreeschedule.firebaseio.com",
    projectId: "urbantreeschedule",
    storageBucket: "",
    messagingSenderId: "794911316272"
};
firebase.initializeApp(config);

var dataRef = firebase.database();
var nombreSocio ;
var sesionesDisponibles;
var finDePaquete;
var emailSocio;

$("#buscarDatos").on("click", function (event) {
    event.preventDefault();
    emailSocio = $("#contactEmail").val();
    console.log(emailSocio);
    dataRef.ref().child("/socias").orderByChild("emailSocio").equalTo(emailSocio).on("value", function (snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function (childSnapshot) {

            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            //*Estos son los datos del socio
            nombreSocio = childData.nombreSocio;
            sesionesDisponibles = childData.numSesiones;
            finDePaquete = childData.finPaquete;

            if (sesionesDisponibles > 0) {
                //this will be the actual email value found
                $("#bienvenidaSocia").text("Hola " + nombreSocio + " tienes " + sesionesDisponibles + " sesiones disponibles y se vencen el " + finDePaquete);
                //*Esto permite que se active el boton para apartar clase
                $("#apartadoClase").prop("disabled", false)
            }
            else {
                $("#bienvenidaSocia").text("Hola " + nombreSocio + " ya no tienes sesiones disponibles te invitamos a renovar tu paquete")
            }

        });



    });
})



$("#apartadoClase").on("click", function (event) {
    event.preventDefault();

    diaClase = $("#fechaClase").val();
    var horarioClase = $("#horarioClase").val();
    var convertedDate = moment(diaClase, randomFormat);
    var diaDelaSemana = moment(convertedDate).format("dddd");
    var horarioEscogido = diaClase + horarioClase;
    var horarioEscogidomodificado = horarioEscogido.replace(/\.|\s|:/g, "");
    console.log(horarioEscogidomodificado)

    //codificar el horario y dia seleccionado
    var indexhorario = horariosLunes.indexOf(horarioClase);
    var renglonHorario = codigoHorario[indexhorario];
    var indexdia = diasSemana.indexOf(diaDelaSemana);
    var columnaHorario = codigoDia[indexdia];
    var columnaReglon = columnaHorario + renglonHorario;
    console.log(columnaReglon);


    dataRef.ref().child("/" + horarioEscogidomodificado).once("value", function (snapshot) {
        var availableClases = totalClases - snapshot.numChildren();
        console.log(availableClases);
        console.log("El dia de la semana es" + diaDelaSemana);
        if (availableClases == 0) {
            $("#Respuesta").text("Lo sentimos esa clase ya esta llena. Revisa el calendario para buscar opciones");
            $("#contactName").val("");
            $("#contactEmail").val("");
            $("#fechaClase").val("");
        }
        else {


            if (diaDelaSemana === "Monday") {
                var disponibilidad = horariosLunes.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones");
                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();

                }

            }

            if (diaDelaSemana === "Tuesday") {
                var disponibilidad = horariosMartes.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones")
                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();
                }
            }

            if (diaDelaSemana === "Wednesday") {
                var disponibilidad = horariosMiercoles.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones")
                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();
                }
            }

            if (diaDelaSemana === "Thursday") {
                var disponibilidad = horariosJueves.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones")
                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();
                }
            }

            if (diaDelaSemana === "Friday") {
                var disponibilidad = horariosViernes.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones.")


                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();
                }
            }

            if (diaDelaSemana === "Saturday") {
                var disponibilidad = horariosSabado.indexOf(horarioClase)
                if (disponibilidad < 0) {
                    $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
                }
                else {

                    dataRef.ref().child(horarioEscogidomodificado).push({
                        nombre: nombreSocio,

                    })
                    sesionesDisponibles--
                    $("#Respuesta").text("Tu clase a sido reservada con exito, te quedan " + sesionesDisponibles + " sesiones")
                    $("#contactName").val("");
                    $("#contactEmail").val("");
                    $("#fechaClase").val("");
                    restarClase();
                }
            };
        };

    })

})

//*Funcion para restar clases

function restarClase() {
    var query = dataRef.ref("/socias").orderByChild("emailSocio").equalTo(emailSocio);
    query.once("child_added", function (snapshot) {
        snapshot.ref.update({ numSesiones:sesionesDisponibles })
    })
}
