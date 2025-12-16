function findLongestWordLength(sentence){
let words= sentence.split(/\s+/)
let longestWordLength=0

for(let word of words){
  if(word.length>longestWordLength){
    longestWordLength=word.length
  }

}
return longestWordLength

}