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

var lunes;
var martes;
var miercoles;
var jueves;
var viernes;
var sabado;


$("#revisarCalendario").on("click", function (event) {
    event.preventDefault();
    $("#A1").empty();
    $("#B1").empty();
    $("#C1").empty();
    $("#D1").empty();
    $("#E1").empty();
    $("#F1").empty();
    lunes = $("#fechaCalendario").val()
    martes = moment(lunes).add(1, "day").format("YYYY-MM-DD");
    miercoles = moment(lunes).add(2, "day").format("YYYY-MM-DD");
    jueves = moment(lunes).add(3, "day").format("YYYY-MM-DD");
    viernes = moment(lunes).add(4, "day").format("YYYY-MM-DD");
    sabado = moment(lunes).add(5, "day").format("YYYY-MM-DD");
    console.log(lunes + "700am");
    

//* Row for 7:00 a.m. clases
    dataRef.ref("/" + lunes + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A1").append(list);
    })
    dataRef.ref("/"+martes+"700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B1").append(list);
    })
    
    dataRef.ref("/" + miercoles+"700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C1").append(list);
    })
    
    dataRef.ref("/"+jueves+"700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D1").append(list);
    })
    
    dataRef.ref("/"+viernes+"700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E1").append(list);
    })
    
    dataRef.ref("/"+sabado+"700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F1").append(list);
    })
})







//Row 2

dataRef.ref("/A2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#A2").append(list);
})

dataRef.ref("/B2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#B2").append(list);
})

dataRef.ref("/C2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#C2").append(list);
})

dataRef.ref("/D2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#D2").append(list);
})

dataRef.ref("/E2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#E2").append(list);
})

dataRef.ref("/F2").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#F2").append(list);
})

// Row 3

dataRef.ref("/A3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#A3").append(list);
})

dataRef.ref("/B3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#B3").append(list);
})

dataRef.ref("/C3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#C3").append(list);
})

dataRef.ref("/D3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#D3").append(list);
})

dataRef.ref("/E3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#E3").append(list);
})

dataRef.ref("/F3").on("child_added", function (childSnapshot) {
    var name = childSnapshot.val().nombre;
    var list = $("<li>");
    list.attr = ("value", name);
    list.text(name);
    $("#F3").append(list);
})