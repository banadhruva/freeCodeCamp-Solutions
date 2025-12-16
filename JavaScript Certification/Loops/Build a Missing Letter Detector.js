function fearNotLetter(str){
  for (let i=0 ; i<str.length-1 ; i++){
    let currChar=str[i].charCodeAt()
    let nextChar=str[i+1].charCodeAt()
  if (nextChar!=currChar+1){
    return String.fromCharCode(currChar+1)
  }
  }
  return undefined
}
