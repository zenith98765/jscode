// generateHashtag=$=>/\w/g.test($)&&(t="#"+$.replace(/\s+/g,` `).split` `.map($=>$[0].toUpperCase``+$.substring(1)).join``)&&t.length<141&&t||!1

// const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false

//generateHashtag=$=>/\w/g.test($)&&(t="#"+$.replace(/\s+/g,` `).split` `)

//  generateHashtag=$=>/\w/g.test($)&&(((t="#"+$.replace(/\s+/g,` `).split` `)).split(",").map($=>$[0].toUpperCase``+$.substring(1)).join``)

// .map($=>$[0].toUpperCase()+$.substring(1))

// let aa = generateHashtag(" Hello there thanks for trying my Kata");
// console.log(aa);

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// function humanReadable (ss) {

//     if (ss == 0)
//     {return "00:00:00"}

//     if (ss < 0 || ss > 359999) 
//     {return null}

//     let hh = Math.floor(ss/3600);
//     ss = ss - (hh*3600);
//     if(hh<10){hh="0"+hh;}

//     let min = Math.floor(ss/60);
//     ss = ss - (min*60);
//     if(min<10){min="0"+min;}

//     if(ss<10){ss="0"+ss; }

//     return `${hh}:${min}:${ss}`;
//   }

//   function humanReadable(seconds) {
//     var pad = function(x) { return (x < 10) ? "0"+x : x; }
//     return pad(parseInt(seconds / (60*60))) + ":" +
//            pad(parseInt(seconds / 60 % 60)) + ":" +
//            pad(seconds % 60)
//   }

//   function humanReadable(seconds) {
//     var hours = parseInt( seconds / 3600 ) ;
//     var minutes = parseInt( seconds / 60 ) % 60;
//     var seconds = seconds % 60;

//     var pad = function(val){
//       return val < 10 ?"0"+val:val;
//     }

//     return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
//     }

//     function humanReadable(seconds) {
//         return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//           v = Math.floor(v).toString();
//           return v.length == 1 ? '0' + v : v;
//         }).join(':');
//       }

//       function humanReadable(seconds) {
//         var HH, MM, SS;
//         HH = "0" + Math.floor(seconds/3600);
//         seconds -= HH * 3600;
//         MM = "0" + Math.floor(seconds/60);
//         seconds -= MM * 60;
//         SS = "0" + seconds;
//         return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
//       }

//       function humanReadable(seconds) {
//         return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
//       }

//       p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))

//       let humanReadable =s=> [s/3600|0,s/60%60|0,s%60].map(i=>`${i}`.padStart(2,0)).join`:`

//  https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

// function sumStrings(a, b) {
//     let sum = 0;
//     let b1 = 0n;
//     let b2 = 0n

//     for (let i = 0; i < arguments.length; i++) {

//         if (!(Number(arguments[i]))) { console.log("Invalid Input") }

//         if (arguments[i] > Number.MAX_SAFE_INTEGER) {
//             b1 = BigInt(arguments[i]);
//             console.log(b1);
//             if (i == 0) { b2 = b1; }
//             sum = b1 + b2;
//             console.log(sum);
//         }

//         else {
//             let aa = Number(arguments[i]);
//             sum += aa;
//         }
//     }
//     return sum.toString();
// }

// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))


// function sumStrings(a,b) { 
//     return (BigInt(a) + BigInt(b)).toString();
//   }

//   function sumStrings(a, b) {
//     var res = '', c = 0;
//     a = a.split('');
//     b = b.split('');
//     while (a.length || b.length || c) {
//       c += ~~a.pop() + ~~b.pop();
//       res = c % 10 + res;
//       c = c > 9;
//     }
//     return res.replace(/^0+/, '');
//   }

//   function sumStrings(a, b)
//   {
//       var A = a.split(""), B = b.split(""), C = 0, R = "";

//       while (A.length || B.length || C)
//       {
//           C = C + (~~A.pop() + ~~B.pop());
//           R = (C % 10) + R;
//           C = C > 9;
//       }

//       return R.replace(/^0+/, "");
//   }

//   function sumStrings(a,b) { 
//     return `${BigInt(a) + BigInt(b)}`
//     }

//     function sumStrings(a,b) { 
//         return String(BigInt(a) + BigInt(b))
//       }

// sumStrings=(a,b,c=a=>('0'.repeat(32)+a).slice(-32),d=c(a),e=c(b))=>[...e].reduceRight(([a,b],c,e)=>[((f=+c+ +d[e]+b)%10)+a,f/10|0],['',0])[0].replace(/^0+/,'')

// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))










