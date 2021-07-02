//PANA

let sentence = 'hello my name is josh'


function panagram(sentence) {
const letter = sentence.toLowerCase().match(/[a-z]/g);

for (let i=0; i<sentence.length; i++) 
if (sentence.includes(i)== letter){ 
  
return('true')}
}

// This runtime of this function would be O(n) because we could have an infant number of letters in our sentence.

