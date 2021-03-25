function makeRandonCharacters(numberCharacters , numberCombinations) {
    let arrayWithCombinations = []
    let stringWithCharacters = ''
    let randomIdGenerated = ''
    const charactersOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const stringCharactersLength = charactersOptions.length;
    
    for(let contCombinations = 0 ; contCombinations < numberCombinations ; contCombinations++){

        for (let contCharacters = 0 ; contCharacters < numberCharacters ; contCharacters++ ) {
            stringWithCharacters += charactersOptions.charAt(Math.floor(Math.random() * stringCharactersLength))
        }
        
        arrayWithCombinations.push(stringWithCharacters)
        stringWithCharacters = ''
    }

    for(let makeVar = 0 ; makeVar < numberCombinations ; makeVar++){
        randomIdGenerated += arrayWithCombinations[makeVar]
        if(makeVar < numberCombinations - 1){
            randomIdGenerated += '-'
        }
    }

    return `Random Id Generated => ${randomIdGenerated}`
 }
 
 console.log(makeRandonCharacters(4,6));

//  The first parameter is a number of characters in a combination, and the second parameter is the number of combinations of Random Id Generated