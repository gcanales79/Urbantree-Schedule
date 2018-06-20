var diaClase;
var randomFormat = "YYYY/MM/DD"
var horariosLunes=["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "5:00 p.m.", "6:00 p.m.", "7:00 p.m", "8:00 p.m."]
var horariosMartes=["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "6:00 p.m.", "7:00 p.m", "8:00 p.m."]
var horariosMiercoles=["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "5:00 p.m.", "6:00 p.m.", "7:00 p.m", "8:00 p.m."]
var horariosJueves=["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "6:00 p.m.", "7:00 p.m", "8:00 p.m."]
var horariosViernes=["7:00 a.m.", "8:00 a.m.", "9:00 a.m.", "10:00 a.m."];
var horariosSabado=["9:00 a.m.", "10:00 a.m."]

$("#apartadoClase").on("click",function(event){
    event.preventDefault();
    var nombreSocio=$("#contactName").val();
    var emailSocio=$("#contactEmail").val();
    diaClase=$("#fechaClase").val();
    var horarioClase=$("#horarioClase").val();
    var convertedDate = moment(diaClase, randomFormat);
    var diaDelaSemana=moment(convertedDate).format("dddd");

    if(diaDelaSemana==="Monday"){
        var disponibilidad=horariosLunes.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }

    if(diaDelaSemana==="Tuesday"){
        var disponibilidad=horariosMartes.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }

    if(diaDelaSemana==="Wednesday"){
        var disponibilidad=horariosMiercoles.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }

    if(diaDelaSemana==="Thursday"){
        var disponibilidad=horariosJueves.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }

    if(diaDelaSemana==="Friday"){
        var disponibilidad=horariosViernes.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }

    if(diaDelaSemana==="Saturday"){
        var disponibilidad=horariosSabado.indexOf(horarioClase)
            if(disponibilidad<0){
                $("#Respuesta").text("Te recordamos que no tenemos clase en ese horario por favor selecciona otro horario")
            }
    }
    


    

});

