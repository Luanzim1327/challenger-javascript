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