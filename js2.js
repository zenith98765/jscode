
//   function accum(s) {
//     var array = [];
//     for (i = 0; i < (s.length); i++) {
//       array.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
//     };
//     return array.join("-");
//   }

// console.log(accum("RqaEzty"));

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"


// function accum(str) {
//     var res = [];
//     for(var i = 0; i < str.length; i++) {
//       var row = '';
//       for(var j = 0; j < i + 1; j++) {
// 		console.log(i,j);
//         row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
//       }
//       res.push(row);
//     }
//     return res.join('-');
//   }



// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)


// function nbYear(p0, percent, aug, p) {
// 	let ans = 0;
// 	let cnt = 0;
// 	// console.log(p0, percent, aug, p);
// 	while ( ans < p) {
// 		ans = (p0 + (p0 * (percent / 100)) + (aug));
// 		p0 = ans;
// 		cnt++;
// 		console.log(ans);
// 		if((ans-p)<1 && (ans-p)>0){cnt++;}
// 	}
// 	return cnt;
// }

// function nbYear(p0, percent, aug, p) {

// 	for (var years = 0; p0 < p; years++) {
// 	  p0 = Math.floor(p0 + p0 * percent / 100 + aug);
// 	}
// 	return years
//   }

//   function nbYear(p0, percent, aug, p) {
// 	var count = 0;
// 	while (p0 < p) {
// 	  p0 = Math.floor((1 + percent / 100) * p0 + aug);
// 	  count++
// 	} 
// 	return count;
//   }

//   function nbYear(p0, percent, aug, p, years = 0) {
// 	if (p0 < p) {
// 	  return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
// 	}
// 	return years;
//   }

//   function nbYear(p0, percent, aug, p) {
//     var i = 1;
//     var mult = 1 + percent / 100.0;
//     var prev = p0;
//     while (prev < p) {
//         var ne = Math.floor(prev * mult + aug)
//         prev = ne
//         i++;
//     }
//     return (i - 1);
// }

// //Recursive function: exit condition p0 >= p
// function nbYear(p0, percent, aug, p) {
// 	p0 =  Math.floor(p0*(1+percent/100)+aug)
// 	if (p0>=p)
// 	   return 1
// 	return nbYear(p0,percent,aug,p)+1
//   }

// function nbYear(p0, percent, aug, p) {
// 	for (var count = 0; p0 < p; count++) {
// 	  p0 += p0 * percent / 100 + aug | 0
// 	}
// 	return count
//   }

// const nbYear = (p0, percent, aug, p) =>
//   p0 < p ? true + nbYear(p0 + p0 * percent / 100 + aug | 0, percent, aug, p) : false

// function nbYear(p0, percent, aug, p) {
// 	let i = 0;
// 	while (p0 <= p) {
// 	  p0 += Math.floor(p0 * percent / 100) + aug;
// 	  i++;
// 	}
// 	return i === 51 ? i-1: i
//   } 

//   function nbYear(p0, percent, aug, p) {
// 	let n
// 	for (n = 1; p0 < p; n++) {
// 	  p0 += parseInt(p0 * (percent / 100))
// 	  p0 += aug
// 	}
// 	return n-1
//   }

// nbYear=f=(a,b,c,d,r=0)=>d/a>1?f(a+~~(a*b/1e2)+c,b,c,d,++r):r

// function nbYear(p0, percent, aug, p, i = 1) {
//     const per = percent / 100;
//     const pp = parseInt(p0 + p0 * per + aug);
//     if (pp >= p)
//         return i;
//     return nbYear(pp, percent, aug, p, i+1);
// }



// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

// function printerError(s) {
//     //console.log();
//     let ar = s.split('');
//     let wrng = 0;
//     for(let cn=0; cn<ar.length; cn++){
//         let ts = ar[cn].charCodeAt(0);
//         if(!(ts >= 97 && ts <= 109)){
//             wrng++;
//         }
//     }
//     return `${wrng}/${ar.length}`
// }

// printerError("aaaxbbbbyyhwawiwjjjwwm")

// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

// var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

// function printerError(s) {
//     return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
//   }

// var printerError = (s) => (s.match(/[n-z]/g) || []).length + '/' + s.length

// const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;


////https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript


// function domainName(url){
//     return url.replace(/.+\/\/|www.|\..+/g, '');
//   }

// //   * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// //   * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// //   * url = "https://www.cnet.com"                -> domain name = cnet"

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

// function domainName(url){
// 	return  url.replace('http://', '')
// 					   .replace('https://', '')
// 					   .replace('www.', '')
//   					 .split('.')[0];
// }

// function domainName(url){
//     return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
//   }

//   ///////////////////////////////////////////////////////////////////////////////
//   const removeStrStart = possibleStarts => str => {
//     const startUsed = possibleStarts.find(s => str.startsWith(s))
//     return startUsed !== undefined
//       ? str.substr(startUsed.length)
//       : str
//   }

//   const PROTOCOLS = ['http://', 'https://']
//   const removeProtocol = removeStrStart(PROTOCOLS)

//   /* 
//    * That's not the right thing to do in production 
//    * because any subdomain name is valid and there 
//    * can be many nested subdomains.
//    * More on that: https://serverfault.com/a/278296
//    */
//   const SUBDOMAINS = ['www.'] 
//   const removeSubdomain = removeStrStart(SUBDOMAINS)

//   const domainName = url => 
//     removeSubdomain(removeProtocol(url)).split('.')[0]

//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   function domainName(url){
//     var cleanUrl = '';
//     var restricted = ['de', 'br', 'fr', 'io', 'it', 'net', 'info', 'tv', 'name', 'users', 'pro', 'img', 'error', 'uk', 'warez', 'www', 'ru', 
//     'http', 'https', 'com', 'co', 'jp', 'us', 'net', 'org', 'edu', 'biz', 'za', 'index', 'php', 'kata', 'default', 'html', 'archive', 'error'];
//     var splitAddr = url.split(/[/.:]/);
//     for(var i = 0; i < splitAddr.length; i++) {
//       if(restricted.indexOf(splitAddr[i]) == -1) {
//         cleanUrl += splitAddr[i];
//       }
//     }
//     return cleanUrl;
//   }

// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript





// function generateHashtag(str) {

//     let tes = str.split(" ").filter((v) => v !== '');
//     console.log(tes);
//     if((tes.toString()).length>=140) {return false;}
//     if(tes== (" ")) {return false;}
//     if(tes== ("")) {return false;}

//     if (tes) {
//         let mm = (str.split(" ").filter((v) => v !== ''));
//         let res =[];
//         mm.forEach(vv => {
//             vv = vv.replace(/./i, (vv[0].toUpperCase()));
//             res.push(vv);
//         });
//         res.unshift("#");
// 		let jm = (res.toString()).replaceAll(',', '');
// 		return jm;
// 	}
//     else {
// 		return false;
// 	}
// }

// generateHashtag()
// generateHashtag("    Hello     World   ")
// generateHashtag("")

// generateHashtag(" Hello there thanks for trying my Kata")

// Solution //////////////////////
// generateHashtag=(s,f=`#`+s.replace(/\b./g,a=>a.toUpperCase``).replace(/ /g,``))=>f>`#`&&!f[140]&&f


// function generateHashtag (str) {
//     str = str.toLowerCase()
//              .split(' ')
//              .filter(v => v.match(/[a-z]/))
//              .map(v => v[0].toUpperCase()+v.slice(1))
//              .join('');
//     return (str.length === 0 || str.length >= 140 ) ? false : '#' + str;
    
//   }


//   function generateHashtag (str) {
//     const result = str.split(' ').reduce((res, word) => res += word.charAt(0).toUpperCase() + word.slice(1), '#')
//     return  result.length > 1 && result.length <= 140 && result
//   }

//   const generateHashtag = (str) => 
//   !!(str = str.trim()) && (str = '#' + str.replace(/\b./g, ch => ch.toUpperCase()).replace(/ /g, '')).length < 141 && str;

//   function generateHashtag (str) {
//     return str.trim() && str.replace(/\s/g, "").length < 140 ? "#" + String(str.trim()).replace(/(^|\s)+[^\s]/g, (match) => match.trim().toUpperCase()) : false
//   }

//   function generateHashtag (str) {
//     if (str==='') return false;
//     var arr = str.split(' ');
//     var capitalizedStr = '';
//     arr.forEach(function(word){
//       capitalizedStr += word.slice(0, 1).toUpperCase() + word.slice(1);
//     });
//     if (capitalizedStr.length > 139) return false
//     else return capitalizedStr = '#' + capitalizedStr;
//   }

//   function generateHashtag (str) {
//     if(str.trim() === "") return false;
  
//     const result = "#" + str.split(" ").filter(Boolean).map(item => item[0].toUpperCase() + item.slice(1)).join("");
    
//     if(result.length > 140) return false;
    
//     return result;
//   }

//   function generateHashtag (str) {
//     if (str.length == 0 || str.length > 140) return false;
//     return '#' + str.split(' ').filter(function(x){return x.length != 0;}).map(function(x){return x[0].toUpperCase() + x.slice(1);}).join('');
//   }

//   function generateHashtag (str) {
  
//     const isItOnlySpaces = (str) => str.trim().length > 0;
      
//     const capitalizeEveryFirstLetter = (str) => str.split(' ').map(val => val.charAt(0).toUpperCase() + val.slice(1));
    
//     if(isItOnlySpaces(str)) {
//     const upperCaseStr = capitalizeEveryFirstLetter(str);
    
//     const array = [];
//     array.push(...upperCaseStr)
    
//     const noSpaceArray = array.filter( e => e != ' ');
//     noSpaceArray.unshift('#');
//     const string = noSpaceArray.join('');
//       if (string.length > 140){
//         return false;
//       }
//     return string;
//     }
//     return false;
    
  
//   }

//   generateHashtag=$=>/\w/g.test($)&&(t="#"+$.replace(/\s+/g,` `).split` `.map($=>$[0].toUpperCase``+$.substring(1)).join``)&&t.length<141&&t||!1

//   function generateHashtag (str) {
//     str = str.split(" ").reduce(function(p, c){
//       return p + (c ? c[0].toUpperCase() + c.slice(1) : "");
//     }, "#");
//     return str.length > 140 || str == "#" ? false : str;
//   }

//   function generateHashtag (str) {
//     if (!str) return false;
//     str = '#'+str.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join('');
//     return str.length > 140 ? false : str;
//   }

//   function generateHashtag(s) {
//     s = s.replace(/[a-zA-Z]+/g, word=>word[0].toUpperCase() + word.substring(1).toLowerCase())
//     s = s.replace(/\s+/g, '')

//     if (s.length == 0 || s.length > 139)
//         return false

//     return '#' + s
// }

// function generateHashtag(str){
//     let newStr = str.trim().split('')
//     str = newStr;
//     newStr = [];
    
//         for(let i = 0; i < str.length; i++){
//             if(str[i + 1] == ' '){
//                 if(str[i] != ' '){
//                     newStr.push(str[i])
//                 }
//             }else{
//                  newStr.push(str[i])
//             }
    
//         }
//     str = newStr;
//     newStr = [];
//         for(let i = 1; i < str.length; i++){
//             newStr[0] = str[0].toUpperCase()
//             if(str[i] == ' '){
//                 newStr.push(str[i + 1].toUpperCase())
//                 i = i+1;
//             }else{
//                 newStr.push(str[i])
//             }
//         }
    
//         if(newStr.length > 139 || newStr == ''){
//             return false;
//         }else{
//             return '#' + newStr.join('');
//         }
    
    
    
//     }

//     function generateHashtag (str) {
//         return str.length > 140 || str.length < 1 ? false : ('# ' + str).trim().replace(/(\s\w)/g, function ($0, $1) {
//             return $1.slice(1).toUpperCase();
//         });
//     }

//     function generateHashtag (str) { 
//         var s = "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).split(" ").join("");
//         if(str && s.length <= 140){
//           return s;
//         } return false; 
//     }

//     function generateHashtag (str) {
//         var hash = '#';
//         str.split(' ').map(a => {
//           hash += a.charAt(0).toUpperCase() + a.slice(1);
//         });
//         return hash != '#' && hash.length <= 140 ? hash : false;
//       }


//       const generateHashtag = str =>
//       (val => !!str.trim() && val.length <= 140 && val)
//       (`#${str.replace(/(?:^|\s+)(\w)/g, (_, $1) => $1.toUpperCase())}`);

//       const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false

//       function generateHashtag (str = "") {
//         var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
//         return !!str && hashtag.length <= 140 && hashtag
//       }

//       function generateHashtag (str) {

//         var hashtag = str.split(' ').reduce(function(tag, word) {
//           return tag + word.charAt(0).toUpperCase() + word.substring(1);
//         }, '#');
        
//         return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
//       }

//       function generateHashtag (str) {
//         if(!str || str.length < 1) return false;
        
//         var r = '#' + str.split(' ').map(function(el) {
//           return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//         }).join('');
//         return r.length > 140?false:r;
//      }

