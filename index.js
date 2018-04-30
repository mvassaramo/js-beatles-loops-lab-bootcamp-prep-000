function theBeatlesPlay(musicians, instruments) {

var emptyArray = [ ];

for ( let i = 0; i < musicians.length; i++) {
   emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return emptyArray;
}

function johnLennonFacts(johnLennonFacts) {
let n = 0;
let facts = [ ];
while( n <= johnLennonFacts.length) { 
  n++;
    facts.push(`${johnLennonFacts[n]}!!!`);
  }
  return facts;
}


function iLoveTheBeatles(b) {
  var emptyArray = [ ];
  
  do {
    emptyArray.push("I love the Beatles!");
    b++;
  } while (b < 15);
  
  return emptyArray

}