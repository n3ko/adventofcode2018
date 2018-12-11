const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input')
})

let lines=[]
let allArea=[]

lineReader.on('line', function (line) {
  lines.push(line)
  let [ id, x, y, wx, wy ] = line.match(/#(.*) @ (.*),(.*): (.*)x(.*)/ ).slice(1,6).map(n => parseInt(n))
  let ix,iy
  for (ix=x; ix<x+wx; ix++) {
    if(!allArea[ix]) allArea[ix]=[]
    for (iy=y; iy<y+wy; iy++) {
      if(!allArea[ix][iy]) allArea[ix][iy]=0
      allArea[ix][iy] ++    }
  }
})

lineReader.on('close', function () {
  console.log(allArea.reduce((v,a,i) => v+a.reduce( (v,a) => v+(a>1?1:0),0)  , 0))
  lines.forEach(function(line) {
    let [ id, x, y, wx, wy ] = line.match(/#(.*) @ (.*),(.*): (.*)x(.*)/ ).slice(1,6).map(n => parseInt(n))
    let ix,iy
    let ok = true;
    for (ix=x; ix<x+wx; ix++) {
      for (iy=y; iy<y+wy; iy++) {
	if(allArea[ix][iy]>1) ok=false;
      }
    }
    if(ok) console.log(id)
  })
})
