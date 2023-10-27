function wordReverse(sentence) {
    let words = sentence.split(' ');

    let wordReverse = words.map(word => {
        return word.split('').reverse().join('');
    });

    let sentenceReverse = wordReverse.join(' ');

    return sentenceReverse;
}

let Sentence = "This is a sunny day";
let sentenceReverse = wordReverse(Sentence);
console.log(sentenceReverse);