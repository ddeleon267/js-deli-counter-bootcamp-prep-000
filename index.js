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
    var newArray = [];
    for (i = 0; i < queue.length; i++) {
    newArray.push(`${i+1}. ${queue[i]}`)
  }
  if (newArray.length > 0) {
    return `The line is currently: ${newArray.join(`, `)}.`
  } else {
    return `The line is currently empty.`
  }
}



// queue.slice(0, queue.length - 1).join(', ') + ", and " + queue.slice(-1));
