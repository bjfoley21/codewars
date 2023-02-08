function f(x,y,z){
    sum = 0; 
    for(let i=0; i<Math.min(x,y,z); i++){
      sum += (x-i)*(y-i)*(z-i);
    }
    //TODO: your code here
    return sum;
  }