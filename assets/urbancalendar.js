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


$("#revisarSemanaactual").on("click", function (event) {
    event.preventDefault();
    clearRows();
    //*!Eset dato se debe cambiar semanalmente
    lunes = moment("2018-07-09").format("YYYY-MM-DD")
    martes = moment(lunes).add(1, "day").format("YYYY-MM-DD");
    miercoles = moment(lunes).add(2, "day").format("YYYY-MM-DD");
    jueves = moment(lunes).add(3, "day").format("YYYY-MM-DD");
    viernes = moment(lunes).add(4, "day").format("YYYY-MM-DD");
    sabado = moment(lunes).add(5, "day").format("YYYY-MM-DD");
    //console.log(lunes + "700am");

    calendarUrban();

})

$("#revisarSemanasiguiente").on("click", function (event) {
    event.preventDefault();
    clearRows();
    //*!Este dato se debe cambiar semanalmente
    lunes = moment("2018-07-16").format("YYYY-MM-DD")
    martes = moment(lunes).add(1, "day").format("YYYY-MM-DD");
    miercoles = moment(lunes).add(2, "day").format("YYYY-MM-DD");
    jueves = moment(lunes).add(3, "day").format("YYYY-MM-DD");
    viernes = moment(lunes).add(4, "day").format("YYYY-MM-DD");
    sabado = moment(lunes).add(5, "day").format("YYYY-MM-DD");
    //console.log(lunes + "700am");

    calendarUrban();

})




function calendarUrban() {
    //* Row for 7:00 a.m. clases
    dataRef.ref("/" + lunes + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A1").append(list);
    })
    dataRef.ref("/" + martes + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B1").append(list);
    })

    dataRef.ref("/" + miercoles + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C1").append(list);
    })


    dataRef.ref("/" + jueves + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D1").append(list);
    })

    dataRef.ref("/" + viernes + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E1").append(list);
    })

    dataRef.ref("/" + sabado + "700am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F1").append(list);
    })

    //* Row for 8:00 a.m. classes
    dataRef.ref("/" + lunes + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A2").append(list);
    })
    dataRef.ref("/" + martes + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B2").append(list);
    })

    dataRef.ref("/" + miercoles + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C2").append(list);
    })


    dataRef.ref("/" + jueves + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D2").append(list);
    })

    dataRef.ref("/" + viernes + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E2").append(list);
    })

    dataRef.ref("/" + sabado + "800am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F2").append(list);
    })

    //*Row for 9:00 a.m. classes
    dataRef.ref("/" + lunes + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A3").append(list);
    })
    dataRef.ref("/" + martes + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B3").append(list);
    })

    dataRef.ref("/" + miercoles + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C3").append(list);
    })


    dataRef.ref("/" + jueves + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D3").append(list);
    })

    dataRef.ref("/" + viernes + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E3").append(list);
    })

    dataRef.ref("/" + sabado + "900am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F3").append(list);
    })

    //*Row for 10:00 a.m. classes

    dataRef.ref("/" + lunes + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A4").append(list);
    })
    dataRef.ref("/" + martes + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B4").append(list);
    })

    dataRef.ref("/" + miercoles + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C4").append(list);
    })


    dataRef.ref("/" + jueves + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D4").append(list);
    })

    dataRef.ref("/" + viernes + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E4").append(list);
    })

    dataRef.ref("/" + sabado + "1000am").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F4").append(list);
    })

    //* Row for  5:00 p.m. classes
    dataRef.ref("/" + lunes + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A5").append(list);
    })
    dataRef.ref("/" + martes + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B5").append(list);
    })

    dataRef.ref("/" + miercoles + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C5").append(list);
    })


    dataRef.ref("/" + jueves + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D5").append(list);
    })

    dataRef.ref("/" + viernes + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E5").append(list);
    })

    dataRef.ref("/" + sabado + "500pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F5").append(list);
    })

    //* Row for 6:00 p.m.  classes
    dataRef.ref("/" + lunes + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A6").append(list);
    })
    dataRef.ref("/" + martes + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B6").append(list);
    })

    dataRef.ref("/" + miercoles + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C6").append(list);
    })


    dataRef.ref("/" + jueves + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D6").append(list);
    })

    dataRef.ref("/" + viernes + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E6").append(list);
    })

    dataRef.ref("/" + sabado + "600pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F6").append(list);
    })

    //* Row for 7:00 p.m. classes

    dataRef.ref("/" + lunes + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A7").append(list);
    })
    dataRef.ref("/" + martes + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B7").append(list);
    })

    dataRef.ref("/" + miercoles + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C7").append(list);
    })


    dataRef.ref("/" + jueves + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D7").append(list);
    })

    dataRef.ref("/" + viernes + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E7").append(list);
    })

    dataRef.ref("/" + sabado + "700pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F7").append(list);
    })

    //* Row for 8:00 p.m. classes

    dataRef.ref("/" + lunes + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#A8").append(list);
    })
    dataRef.ref("/" + martes + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#B8").append(list);
    })

    dataRef.ref("/" + miercoles + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#C8").append(list);
    })


    dataRef.ref("/" + jueves + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#D8").append(list);
    })

    dataRef.ref("/" + viernes + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#E8").append(list);
    })

    dataRef.ref("/" + sabado + "800pm").on("child_added", function (childSnapshot) {
        var name = childSnapshot.val().nombre;
        var list = $("<li>");
        list.attr = ("value", name);
        list.text(name);
        $("#F8").append(list);
    })



}

//Funcion para limpiar los datos de la tabla
function clearRows(){
    for(var i=1;i<9;i++){
        $("#A"+i).empty();
        $("#B"+i).empty();
        $("#C"+i).empty();
        $("#D"+i).empty();
        $("#E"+i).empty();
        $("#F"+i).empty();
        }
}


