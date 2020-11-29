const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = stringToFilter => {     // function(stringToFilter)
    let extractVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if(vowels.includes(currentLetter)){
            extractVowels += currentLetter;
        }   
    }
    return extractVowels;
}
console.log(getVowels(string));