const input = "WordOne and WordTwo"

const flipWords = () => {
    // separate input into words
    const words = input.split(" ");
    console.log(words);
    // for each word
    const reversedWords = words.map((word)=> {
        // reverse the letters
        return word.split("").reverse().join("");
    });
    console.log(reversedWords);
    // join words & return
    const ret = reversedWords.join("");
    console.log(ret);
    return ret;
}
console.log(flipWords(input));
