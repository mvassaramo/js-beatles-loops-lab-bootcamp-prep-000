function theBeatlesPlay(musicians, instruments) {

var emptyArray = [ ];

for ( let i = 0; i < musicians.length; i++) {
   emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return emptyArray;
}

function johnLennonFacts(johnLennonFacts) {
let n = 0;
while( n <= johnLennonFacts.length) { 
  n++;
    console.log(`${johnLennonFacts[n]}!!!`);
  }
}


function iLoveTheBeatles(b) {
  var emptyArray = [ ];
  
  do {
    emptyArray.push("I love the Beatles!");
    b++;
  } while (b < 15);
  
  return emptyArray

}