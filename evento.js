document.getElementById('contenedorDiv').addEventListener('click', function(){
    alert('Hola! Soy el div');
})

document.getElementById('btn').addEventListener('click', function(evento) {
    evento.stopPropagation();
    alert('Hola!');
});