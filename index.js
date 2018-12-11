
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input')
});

let repeat2 = 0
let repeat3 = 0
let lines=[]


lineReader.on('line', function (line) {
  let hash=[]
  let r2= false
  let r3= false
  Array.from(line).map( function(c) { return ( hash[c] = (hash[c]||0)+1) })
  for (let c in hash) {
    if (hash[c]==2) { r2=true }
    if (hash[c]==3) { r3=true }
  }
  if(r2) { repeat2++ }
  if(r3) { repeat3++ }

  let a1=Array.from(line)
  lines.map( function(l0) {
  	let a0=Array.from(l0)
	if (a0.reduce( (v,c,i) => v+(a1[i]!=c ? 1 : 0 ),0)==1) {
	    console.log(l0,line, "->" , a0.reduce( (v,c,i) => v+(a1[i]!=c ? "" : c) , ""))
	}
  })
  lines.push(line)
})
lineReader.on('close', function () {
  console.log(repeat2,repeat3,repeat2*repeat3);
})

