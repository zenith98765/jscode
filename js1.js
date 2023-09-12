// let digitize = n => [...`${n}`].map(i => parseInt(i));



// console.log(digitize(123));
// console.log(digitize(1230));
// //////////////////////////////////////////////////////////////////
// const str1 = "The sunset sets at twelve o' clock.";

// let str2 = "3ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let dem = str1.split('');
// let sem = str2.split('');
// let res = [];

// for (let cnt = 0; cnt < dem.length; cnt++) {

// 	let asc = dem[cnt].charCodeAt(0);
// 	if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
// 		let bubu = dem[cnt].toUpperCase();
// 		for (let bnt = 1; bnt < sem.length; bnt++) {

// 			if (sem[bnt] == bubu) {
// 				res.push(sem.indexOf(sem[bnt]));
// 			}
// 		}
// 	}

// 	else { continue; }

// }
// console.log(res.join(" "));
// //////////////////////////////////////////////////////////////////


// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// function createPhoneNumber (numbers) {
// 	let aa = numbers.slice(0,3).join("");
// 	let bb = numbers.slice(3,6).join("");
// 	let cc = numbers.slice(6).join("");
// 	return (`(${aa}) ${bb}-${cc}`);
// }

// function createPhoneNumber(numbers){
// 	return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//  }

//  function createPhoneNumber(numbers){
// 	var format = "(xxx) xxx-xxxx";
	
// 	for(var i = 0; i < numbers.length; i++)
// 	{
// 	  format = format.replace('x', numbers[i]);
// 	}
	
// 	return format;
//   }

// function createPhoneNumber(numbers){
// 	return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//   }

// //////////////////////////////////////////////////////////////////

// function accum(s) {
//     let ss1 = s.split('');
//     let res = [];
//     for (aa = 0; aa < ss1.length; aa++) {
//         let up1 = ss1[aa].toUpperCase();
//         let lw1 = "";
//         let lw2 = "";
//         if (aa == 0) {
//             res.push(up1);
//             continue;
//         } 
//         else {
//             for (bb = aa; bb <= aa; bb++) {
//                 res.push("-");
//                 res.push(up1);
//                 for (cc = 1; cc <= aa; cc++) {
//                     lw1 = ss1[aa].toLowerCase();
//                     res.push(lw1);
//                 }
//             }
//         }
//     }
//     res = res.join("");
//     return res;
// }



// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// function accum(s) {
// 	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
// }

// function accum(str) {
// 	var letters = str.split('');
//   var result = [];
//   for (var i = 0; i < letters.length; i++) {
//     result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
//   }
//   return result.join('-');
// }

// function accum (s) {
// 	return [...s].map((element, index) => {
//     return element.toUpperCase() + element.toLowerCase().repeat(index);
//   }).join('-');
// }

// function accum(str) {
//     var res = [];
//     for(var i = 0; i < str.length; i++) {
//       var row = '';
//       for(var j = 0; j < i + 1; j++) {
//         row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
//       }
//       res.push(row);
//     }
//     return res.join('-');
//   }

//   function accum(s) {
// 	return s.split('')
//   .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
//   .join('-');
// }

// function accum(s) {
//     return s
//       .split('')
//       .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
//       .join('-')
//   }

//   function accum(s) {
//     var array = [];
//     for (i = 0; i < (s.length); i++) {
//       array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
//     };
//     return array.join("-");
//   }

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript