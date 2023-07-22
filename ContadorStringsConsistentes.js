let allowed = "ab";
let words = ["ad","bd","aaab","baa","badab"];

function ContadorStringsConsistentes (allowed , words) {
    let count = 0;
    for(let word of words) {
        if(word.split("").every(l => allowed.split("").includes(l))) {
            count++;
        }

    }
    return count;
}

console.log(countConsistentStrings(allowed , words));

// pontos que eu acho importante  
/*
    1 - Dar um split no array words , para transformar cada item do array em um array 
    2 - Uso o metódo every() para pegar cada caractere do word.split() e verificar se algum caractere está incluso no array allowed 
*/