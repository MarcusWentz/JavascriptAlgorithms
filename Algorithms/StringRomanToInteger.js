var romanToInt = function(s) {
    let stack = [];
    let sum = 0;
    let flagAlreadySeen = false;
    for(let i = 0; i < s.length ; i++) {
        console.log(s[i])
        if(flagAlreadySeen){
           flagAlreadySeen = false
           continue;
        }
        if(s[i] == "I") {
            if(s[i] != s.length-1 && s[i+1] == "X") {
               sum += 9;   
               flagAlreadySeen = true
               continue;
            }
            if(s[i] != s.length-1 && s[i+1] == "V") {
               sum += 4;   
               flagAlreadySeen = true
               continue;
               }
            sum += 1;   
        }
        if(s[i] == "V"){
           sum += 5;
        }
        if(s[i] == "X"){
            if(s[i] != s.length-1 && s[i+1] == "C") {
               sum += 90;   
               flagAlreadySeen = true
               continue;
            }
            if(s[i] != s.length-1 && s[i+1] == "L") {
               sum += 40;   
               flagAlreadySeen = true
               continue;
               }
           sum += 10;
        }
        if(s[i] == "L") {
           sum += 50
        }
        if(s[i] == "C"){
            if(s[i] != s.length-1 && s[i+1] == "M") {
               sum += 900;   
               flagAlreadySeen = true
               continue;
            }
            if(s[i] != s.length-1 && s[i+1] == "D") {
               sum += 400;   
               flagAlreadySeen = true
               continue;
           }
           sum += 100;
        }
        if(s[i] == "D"){
           sum += 500;
        }
        if(s[i] == "M"){
           sum += 1000;
        }
        
    }
    return sum;
};
