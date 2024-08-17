const { error } = require('console')
var fs=require('fs')

fs.mkdirSync('Buenas',(error)=>{
    if(error){
        throw error;
}
console.log('Carpeta Creada')
})

fs.writeFileSync('./Buenas/German.txt','El me cae bien',(error)=>{
    if(error){
        throw error;
}
console.log('Archivo Creado')
})

fs.mkdir('Bonitas',(error)=>{
    if(error){
        throw error;
    }
        console.log('Carpeta Creada')
})

fs.renameSync('./Buenas/German.txt','./Bonitas/German.txt')
console.log('Cambio de carpeta realizado')

fs.renameSync('./Bonitas/German.txt','./Bonitas/Majo.txt')
console.log('Cambio de nombre realizado')

fs.renameSync('./Bonitas/Majo.txt','./Buenas/Majo.txt')
console.log('Cambio de carpeta realizado')

fs.rmdir('./Bonitas',(error)=>{
    if(error){
        throw error
    }
   console.log('Carpeta Eliminada')
})

fs.unlinkSync('./Buenas/Majo.txt')

fs.rmdir('./Buenas',(error)=>{
    if(error){
        throw error
    }
   console.log('Carpeta Eliminada')
})


