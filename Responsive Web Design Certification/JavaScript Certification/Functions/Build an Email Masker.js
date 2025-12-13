function maskEmail(email){
  let atIndex=email.indexOf("@")
  let domain=email.slice(atIndex)
  let username=email.slice(0,atIndex)

  let firstChar=username[0]
  let lastChar=username[username.length-1]
  let masked="*".repeat(username.length-2)
  return firstChar+masked+lastChar+domain

}

let email="rickroll1507@gmail.com"
console.log(maskEmail(email))