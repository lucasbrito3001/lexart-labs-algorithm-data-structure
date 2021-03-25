const arrayToVerify = ['a',10,'b',1200,'hola',122,15]

// If the type of selected value from the array passed in the parameter is 'number', the function return this value for the new array filtered

function filterNumbers(value) {
    if(typeof value == 'number'){
        return value
    }
}

function filterWords(value) {
    if(typeof value == 'string'){
        return value
    }
}

function manipulateArray(arrayToVerify) {
    let arrayNumbers = arrayToVerify.filter(filterNumbers)
    let arrayWords = arrayToVerify.filter(filterWords)
    let higher = 0

    for(let cont = 0 ; cont < arrayNumbers.length ; cont++){
        if(arrayNumbers[cont] > higher){
            higher = arrayNumbers[cont]
        }
    }

    return{
        words: arrayWords,
        numbers: arrayNumbers,
        highValue: higher
    }
}

console.log(manipulateArray(arrayToVerify))
