function generateRandomNumber(){
    return Math.floor(Math.random()*100)+1
}

function celciusToFahrenhite(celcius){
    return (celcius*9)/5+32
}

//acc to commonjs

module.exports ={ generateRandomNumber , 
     celciusToFahrenhite 
}


const car = {

    engine: "xxxx"
}

console.log(car.engine);