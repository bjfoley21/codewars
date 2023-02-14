function solve(s){
    //..
     var upper = 0,
             lower = 0,
             number = 0,
             special = 0;
           for (var i = 0; i < s.length; i++)
           {
             if (s[i] >= "A" && s[i] <= "Z") upper++;
             else if (s[i] >= "a" && s[i] <= "z") lower++;
             else if (s[i] >= "0" && s[i] <= "9") number++;
             else special++;
           }
     return [upper,lower,number,special]
   }