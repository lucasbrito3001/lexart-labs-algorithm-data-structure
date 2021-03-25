let functionObject = {
    sum: function sum(arrayToSum) {
        const sumArray = arrayToSum.reduce( (prevVal , currentVal) => prevVal + currentVal )

        return sumArray
    },

    sub: function sub(arrayToSub) {
        const subArray = arrayToSub.reduce( (prevVal , currentVal) => prevVal - currentVal )
        
        return subArray
    },

    mult: function mult(arrayToMult) {
        const multArray = arrayToMult.reduce( (prevVal , currentVal) => prevVal * currentVal)

        return multArray
    },

    div: function div(a,b) {
        if(b != 0) {
            const resDiv = a / b

            return resDiv
        } else {
            return 'Impossible to Divide'
        }
    }
}

const valuesToSum = [1,2,3,4,5,6,7]
const valuesToSub = [100,1,2,3,4,5,6]
const valuesToMult = [1,2,3,4,5,6,7]
const aDiv = Number(10)
const bDiv = Number(0)

console.log(
    {
        Addition: functionObject.sum(valuesToSum),
        Subtraction: functionObject.sub(valuesToSub),
        Multiplication: functionObject.mult(valuesToMult),
        Division: functionObject.div(aDiv , bDiv)
    }
)