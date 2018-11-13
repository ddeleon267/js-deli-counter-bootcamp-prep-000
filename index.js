function takeANumber (queue, newPerson) {
  queue.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${queue.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}


var array = ['Wiljago', 'Orin', 'Jory', 'Nikolous', 'Hanika', 'Anjie', 'Evan']



function currentLine (queue) {
  for (i = 0; i <= queue.length; i++) {
    var newArray = [];
    newArray.push(`${i+1}. ${queue[i]}`)
  }
  
  if (queue.length > 0) {
    console.log(`The line is currently: ${newArray.join(`, `)}.`)

  } else {
    return `
  }
}

currentLine(array);



// queue.slice(0, queue.length - 1).join(', ') + ", and " + queue.slice(-1));
