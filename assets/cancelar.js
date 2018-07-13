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

var diaClase;
var randomFormat = "YYYY/MM/DD";
var nombreSocio;
var key;
var horarioEscogidomodificado;
var sesionesDisponibles;
var emailSocio;

var hora = moment().format("YYYY/MM/DD h:mm a");

$("#buscarDatos").on("click", function (event) {
    event.preventDefault();
    emailSocio = $("#emailSocia").val().trim();
    diaClase = $("#fechaClase").val();
    var horarioClase = $("#horarioClase").val();
    var horaReferencia = moment(diaClase + " " + horarioClase, ("YYYY/MM/DD h:mm a"));
    var minutosParacancelar = moment(horaReferencia).diff(moment(), "minutes");
    var horarioEscogido = diaClase + horarioClase;
    horarioEscogidomodificado = horarioEscogido.replace(/\.|\s|:/g, "");
    //console.log("El correo es " + emailSocio)
    //console.log("El horario escogido es" + horarioEscogidomodificado)
    //console.log("La hora es " + hora);
    //console.log("La hora escogida es " + horaReferencia);
    //console.log("La diferencia en minutos es " + minutosParacancelar);
    if (minutosParacancelar >= 20) {
        dataRef.ref().child("/" + horarioEscogidomodificado).orderByChild("email").equalTo(emailSocio).once("value", function (snapshot) {
            if (snapshot.exists()) {
                key = Object.keys(snapshot.val())[0];
                //console.log("Los datos de firebase son " + key);
                infoSocios();
                $("#Respuesta").text("Si tienes clase reservada en este dia y a esta hora. Da click en cancelar clase para proceder.")

                //*Esto permite que se active el boton para borrar clase
                $("#borrarClase").prop("disabled", false)
            }
            else {
                //console.log("No Existe");
                $("#Respuesta").text("No tenemos registrada una clase para ti en ese dia y a esa hora.")
            }
        });
    }
    else {
        $("#Respuesta").text("Te recordamos que ya no puedes cancelar cuando faltan 20 minutos para la clase")
    }
})

$("#borrarClase").on("click", function (event) {
    event.preventDefault();
        if (true) {
        sesionesDisponibles++;
        sumarClase()
        $("#Respuesta").empty();
        $("#Respuesta").text("Se ha cancelado tu clase con éxito.")
        dataRef.ref("/" + horarioEscogidomodificado).child(key).remove();
        limpiarCampos();
    }
    else {
        $("#Respuesta").empty();
        $("#Respuesta").text("Se ha eliminado la clase del socio con exito sin reposición")
        dataRef.ref("/" + horarioEscogidomodificado).child(key).remove();
        limpiarCampos();
    }


});

//*Funcion para restar clases

function sumarClase() {
    var query = dataRef.ref("/socias").orderByChild("emailSocio").equalTo(emailSocio);
    query.once("child_added", function (snapshot) {
        snapshot.ref.update({ numSesiones: sesionesDisponibles })
    })
}

//* Funcion para buscar el correo y las sesiones del socio
function infoSocios() {
    var query = dataRef.ref("/socias").orderByChild("emailSocio").equalTo(emailSocio);
    query.once("child_added", function (snapshot) {
        sesionesDisponibles = snapshot.val().numSesiones;
        emailSocio = snapshot.val().emailSocio;
        //console.log("Sus sesiones disponibles son " + sesionesDisponibles);
        //console.log("Sus correo es " + emailSocio);
    })
}

function limpiarCampos() {
    $("#nombreSocia").val("");
}