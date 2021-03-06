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

var totalClases=8;

var dataRef = firebase.database();

var celdas=["A1","A2","A3","A4","A5","A6","A7","A8","B1","B2","B3","B4","B5","B6","B7","B8","C1","C2","C3","C4","C5","C6","C7","C8","D1","D2","D3","D4","D5","D6","D7","D8","E1","E2","E3","E4","E5","E6","E7","E8","F1","F2","F3","F4","F5","F6","F7","F8"];

for (var i=0;i<celdas.length;i++){
celdaInfo(celdas[i]);
}

function celdaInfo(celdaNum){
    dataRef.ref().child("/"+celdaNum).on("value", function(snapshot) {
        var availableClases=totalClases - snapshot.numChildren();
        $("#"+celdaNum).text("Quedan " +availableClases + " lugares disponibles");
        if(availableClases>2){
            $("#"+celdaNum).addClass("clasedisponible");
        }
        else if(availableClases>0){
            $("#"+celdaNum).removeClass("clasedisponible");
            $("#"+celdaNum).addClass("claseapuntodellenar");
        }
        else if(availableClases==0){
            $("#"+celdaNum).removeClass("calseapuntodellenar");
            $("#"+celdaNum).addClass("clasellena");
        }
    
      })
}





