
/*
const https = require("https")
const url = "https://adventofcode.com/2018/day/1/input"

const p = new Promise( function (resolve,reject) {
    https.get(url, res => {
      res.setEncoding("utf8")
      let body = ""
      res.on("data", data => {
	body += data
      })
      res.on("end", () => {
	console.log(body)
      })
    })
})
*/

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input/day1')
});

let list= [];
let results=[]

lineReader.on('line', function (line) {
  list.push(line-0)
})

lineReader.on('close', function () {
  let found=-1
  let i=0
  let next=0
  results.push(0)
  while ( found< 0 ) {
  	next =  results[results.length-1]+0 + list[ i % list.length]
	found = results.findIndex( r => r == next )
  	results.push(next)
	i++
	if (i % 1000 < 1) {
	  console.log(i, found, next)
	}
  }
  console.log(found, next)
})
/*
fs.readFile("input/day1", function(e,d) {
    if(e) { console.log(e) }
    let s=0;
    let l= d.map( function(v) {
    	s=s+v; return s;
    })
    console.log(l)
})
*/
