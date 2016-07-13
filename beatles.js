function theBeatlesPlay(musicians, instruments) {
  new_array = [];
  for (let i = 0; i < musicians.length; i++) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts) {
  let i = 0;
  new_facts = []
  while (i < facts.length) {
      new_facts.push(`${facts[i]}!!!`)
      i++
  }
  return new_facts
}

function iLoveTheBeatles(num) {
  var new_array = []
  do {
    new_array.push('I love the Beatles!')
    num++
  }
    while (num < 15)
  return new_array
}
