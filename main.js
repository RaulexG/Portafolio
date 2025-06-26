//console.log("Hola mundo! desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniero en sistemas | Desarrollador  Front-end Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes programar!')
    .pauseFor(2500)
    .deleteChars(6)
    .pauseFor(2500)
    .start();
