var process = require ('process');
process.argv[2] = 'edgardo';
process.argv[3] = 'piña';
function datosDelProceso(){
    console.log('este es el titulo' + process.title);
    console.log('muestra los datos del sistema operativo '+ process.arch);
    console.log('haber que dice ' + process.argv[0] +' '+ process.argv[2] +' '+ process.argv[3]);
    for(let x  in process.argv){
        console.log(process.argv[x]);
    }
    console.log(process.config);
    console.log(process.cpuUsage);
}
/*la variable process es globar y descrive la situacion del sistema y sus propiedades, tambien revela informa
cion relevante */
datosDelProceso();