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

$("#altaSocio").on("click", function (event) {
    event.preventDefault();
    var nombreSocio=$("#contactName").val();
    var emailSocio=$("#contactEmail").val();
    var numSocio=$("#numSocio").val();
    var numSesiones=parseInt($("#numSesiones").val());
    var inicioPaquete=$("#inicioPaquete").val();
    var finPaquete=$("#finPaquete").val();


    //* Alta de Socio en la base de datos
    dataRef.ref().child("/socias").push({
       nombreSocio: nombreSocio,
       emailSocio: emailSocio,
       numSocio: numSocio,
       numSesiones: numSesiones,
       inicioPaquete: inicioPaquete,
       finPaquete: finPaquete

    })

    $("#Respuesta").text("El socio fue dado de alta exitosamente")
    $("#contactName").empty();
    $("#contactEmail").empty();
    $("#numSocio").empty();
    $("#numSesiones").empty();
    $("#inicioPaquete").empty();
    $("#finPaquete").empty();
})