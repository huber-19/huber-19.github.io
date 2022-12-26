(function(){
var actualizarHora = function (){
var fecha = new Date(),
    horas = fecha.getHours(),
    ampm,
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diasSemana = fecha.getDay(),
    mes = fecha.getMonth(),
    año = fecha.getFullYear();
    dia = fecha.getDate()

    var pHoras = document.getElementById('horas'),
     pAMPM = document.getElementById('ampm'),
     pMinutos = document.getElementById('minutos'),
     pSegundos = document.getElementById('segundos'),
     pDiaSemana = document.getElementById('diaSemana'),
     pDia = document.getElementById('dia'),
     pMes = document.getElementById('mes'),
     pAño = document.getElementById('año');

var semana = ['Domingo','Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'];
pDiaSemana.textContent = semana[diasSemana];

pDia.textContent = dia;

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
pMes.textContent = meses[mes];
pAño.textContent = año;

if(horas >= 12){
    horas = horas - 12;
    ampm = "PM"; 
} else{
    ampm = "AM"
};

if(horas == 0) {
    horas = 12;
};

pHoras.textContent = horas;
pAMPM.textContent =ampm

if(minutos < 10){
    minutos = "0" + minutos
};
if(segundos < 10){
    segundos = "0" + segundos
};
pMinutos.textContent = minutos;
pSegundos.textContent = segundos
};



actualizarHora();
var intervalo = setInterval(actualizarHora, 1000)
}())