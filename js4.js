//https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

function mix(str1, str2) {
    console.log(str1,str2);
    
    let arr1 = [];
    let arr2 = [];
    
    // let s1 = "Are the kids at home? aaaaa fffff";
    // let s2 = "Yes they are here! aaaaa fffff";
    // let s1 = " In many languages";
    // let s2 = " there's a pair of functions";
    let s1=str1;
    let s2=str2;
    
    let spl1 = s1.split(" ");
    let spl2 = s2.split(" ");
    let res1 = [];
    let res2 = [];
    let res3 = [];
    
    
    
    for (let i = 0; i < spl1.length; i++) {
        let tmparr1 = spl1[i].split("").toString().replaceAll(",", "");
    
        for (let j = 0; j < spl1[i].length; j++) {
    
            let cmp = tmparr1.charCodeAt(j);
    
            if (cmp >= 97 && cmp <= 122) {
    
                arr1.push(tmparr1[j]);
            }
        }
    
    }
    
    
    for (let i = 0; i < spl2.length; i++) {
        let tmparr1 = spl2[i].split("").toString().replaceAll(",", "");
    
        for (let j = 0; j < spl2[i].length; j++) {
    
            let cmp = tmparr1.charCodeAt(j);
    
            if (cmp >= 97 && cmp <= 122) {
    
                arr2.push(tmparr1[j]);
            }
        }
    
    }
    
    arr1.map(chkdupe1)
    arr2.map(chkdupe2)
    
    
    function chkdupe1(item) {
    
        
        let bb = "";
        let cc = 0;
    
        for (let i = 0; i < arr1.length; i++) {
            if (item == arr1[i]) {
                cc++;
                arr1[i] = "";
                bb = bb + item;
            }
        }
    
        if (cc > 1) {
            res1.push(bb);
            res1 = res1.filter(e => e);
        }
    }
    
    function chkdupe2(item) {
    
        let aa = "";
        let bb = "";
        let cc = 0;
    
        for (let i = 0; i < arr2.length; i++) {
            if (item == arr2[i]) {
                cc++;
                arr2[i] = "";
                bb = bb + item;
            }
    
        }
    
        if (cc > 1) {
            res2.push(bb);
            res2 = res2.filter(e => e);
    
        }
    }
    
    
    res1 = (res1.sort());
    res2 = (res2.sort());
    
    
    
    res3 = (res1.concat(res2)).sort();
    
    
    let res4=[];
    let res5=[];
    
    for(let i=0,j=1; i<(res3.length-1); i++, j++){
        // console.log(res3[i][1],res3[j][1]);
        // console.log(i,j);
        
    
        for(let z = j; z<=res3.length; z++){
            
            if(res3[i][1]==res3[z][1]){
                console.log(res3[i],res3[z]);
                console.log(i,j,z);
                //console.log(res3[i].length,res3[z].length);
                if(res3[i].length>res3[z].length){
                    
                    if(res1.includes(res3[i])){
                        
                        res4.push(`1:${res3[i]}`);
                        i++;
                        j++;
                        break;
                    }
                    else{
                        if(res2.includes(res3[i])){
                            res4.push(`2:${res3[i]}`);
                            i++;
                            j++;
                            break;
                            
                        }
                    }
                }
                if(res3[i].length<res3[z].length){
                    
                    if(res1.includes(res3[z])){
                        
                        res4.push(`1:${res3[z]}`);
                        i++;
                        j++;
                        break;
                    }
                    else{
                        if(res2.includes(res3[z])){
                            res4.push(`2:${res3[z]}`);
                            i++;
                            j++;
                            break;
                            
                        }
                    }
                }
    
                if(res3[i].length==res3[z].length){
                    res5.push(`=:${res3[i]}`);
                    if(i==(res3.length-3)){
                        
                        i=(res3.length-1);
                        if(res1.includes(res3[i])){
                            res4.push(`1:${res3[i]}`);
                        }
                        if(res2.includes(res3[i])){
                            res4.push(`2:${res3[i]}`);
                        }
                        
                        break;
      
                    }
    
                    else{
    
                        
                        i++;
                        j++;
                        break;
                       
    
    
                    }
    
                    console.log(i,j);
                    
                }
    
            }
            else{
    
    
    
                if(res1.includes(res3[i])){
                    res4.push(`1:${res3[i]}`);
                    if(z==(res3.length-1)){
                        console.log("in1",i,z,res3[i],res3[z]);
                        res4.push(`1:${res3[z]}`);
                    }
                    break;
                    //console.log("in1");
                }
                else{
                    if(res2.includes(res3[i])){
                        res4.push(`2:${res3[i]}`);
                        if(z==(res3.length-1)){
                            console.log("in2");
                            res4.push(`1:${res3[z]}`);
                        }
                        break;
                        //console.log("in2");
                    }
                }
    
    
            }
        }
        
    }
    
    let res6 = res4.concat(res5);
    res6.sort(function(a,b){return (b.length)-(a.length)})
    let res = res6.toString().replaceAll(",","/");
    
    console.log("res1---",res1);
    console.log("res2---",res2);
    console.log("res3---",res3);
    console.log("res4---",res4);
    console.log("res5---",res5);
    console.log("res6---",res6);
    console.log("res---",res);
    // console.log("1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
    return res;
  }


//   mix(" In many languages", " there's a pair of functions");
  mix("looping is fun but dangerous", "less dangerous than coding")



//=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh
//=:aaaaaa/2:eeeee/=:fffff/2:rr/1:tt/=:hh




//1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg
//1:ooo/2:sss/=:nnn/2:aa/2:dd/2:ee/1:ii/=:gg

//1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt
//1:aaa/1:nnn/2:ee/2:ff/1:gg/2:ii/2:oo/2:rr/2:ss/1:tt

// 1:ee/1:ll/1:oo
// 1:ee/1:ll/1:oo

// 1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr
// 1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr