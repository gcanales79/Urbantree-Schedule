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

$("#apartadoClase").on("click", function (event) {
    event.preventDefault();
    var nombreSocio = $("#contactName").val();
    var emailSocio = $("#contactEmail").val();
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




    if (diaDelaSemana === "Monday") {
        var disponibilidad = horariosLunes.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
            $("#Respuesta").text("Tu clase a sido reservada con exito")
            $("#contactName").empty();
            $("#contactEmails").empty();
            $("#fechaClase").empty();
            $("#horarioClase").empty();
        }

    }

    if (diaDelaSemana === "Tuesday") {
        var disponibilidad = horariosMartes.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
        }
    }

    if (diaDelaSemana === "Wednesday") {
        var disponibilidad = horariosMiercoles.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
        }
    }

    if (diaDelaSemana === "Thursday") {
        var disponibilidad = horariosJueves.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
        }
    }

    if (diaDelaSemana === "Friday") {
        var disponibilidad = horariosViernes.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
        }
    }

    if (diaDelaSemana === "Saturday") {
        var disponibilidad = horariosSabado.indexOf(horarioClase)
        if (disponibilidad < 0) {
            $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
        }
        else {

            dataRef.ref().child(columnaReglon).push({
                nombre: nombreSocio,

            })
            $("#Respuesta").text("Tu clase a sido reservada con exito")
            $("#contactName").empty();
            $("#contactEmail").empty();
            $("#fechaClase").empty();
        }
    }
});

