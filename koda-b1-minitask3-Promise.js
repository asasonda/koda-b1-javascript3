// promise anteran

function antrean(nama){
    return new Promise((resolve, reject)=>{
        if(nama === 'John'){
            setTimeout(()=>{
                resolve(`anteran bernama: ${nama} silakan masukk`)
            },1500)
        }
        else if(nama === 'Ed'){
            setTimeout(()=> {
                resolve(`anteran bernama: ${nama} silakan masukk`)
            },2000)
        }
        else if(nama === 'Jane'){
            setTimeout(()=> {
                resolve(`anteran bernama: ${nama} silakan masukk`)
            },500)
        }
        else{
            reject('tidak ada nama diantrean')
        }
    })
}
// jane
antrean('Ed').then((antrii)=> {
    console.log(antrii)
    return antrii
}).catch((err) => {
    console.error("Error oii: "+ err)
})

// john
antrean('Jane').then((antrii)=> {
    console.log(antrii)
    return antrii
}).catch((err) => {
    console.error("Error oii: "+ err)
})


// jane
antrean('Jane').then((antrii)=> {
    console.log(antrii)
    return antrii
}).catch((err) => {
    console.error("Error oii: "+ err)
})