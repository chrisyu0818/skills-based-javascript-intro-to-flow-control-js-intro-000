function basicTeenager(age) {
  if(age>=13||age<=19) {
    return "you are a teenager!"
  }
}

function teenager(age) {
  if(age>=13||age<=19) {
    return "you are a teenager!"
  }
  else {
    return "you are not a teenager!"
  }
}

function ageChecker(age) {
  if(age>=13||age<=19) {
    return "you are a teenager!"
} else if(age<12) {
  return "you are a kid"
} else if(age>19){
  return "you are a grownup!"
}

function ternaryTeenager(age) {
  if(age>=13||age<=19){
    return age? "you are a teenager!":"you are not a teenager!"
  }
}

function switchAge(age) {
  switch(age){
  case 13:
    return "you are a teenager"
    break;
  case 14:
      return "you are a teenager"
      break;
  case 15:
        return "you are a teenager"
        break;
  case 16:
          return "you are a teenager"
          break;
  case 17:
            return "you are a teenager"
            break;
  case 18:
              return "you are a teenager"
              break;
  case 19:
          return "you are a teenager"
          break;
  default:
                return "you have an age"

}
}
