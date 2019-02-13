// var position = 1;

function takeANumber(line, name){
  // line.push(position++);
  return "Welcome, " + name + ". You are number " + line.push(name) + " in line."
}

function nowServing(line){
  if(isEmpty(line)){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + line.shift() + ".";
}

function currentLine(line){
  if(isEmpty(line)){
    return "The line is currently empty."
  }
  
  let result = "The line is currently: ";
  
  for(let i = 0; i < line.length; i++){
    result += `${i+1}. ${line[i] + (i === line.length-1 ? "" : ", ")}`;
  }
  
  return result;
}

function isEmpty(line){
  return line.length === 0
}

// Array.prototype.push = function(item){
//   this.splice(this.length,0, item);
//   return this;
// }