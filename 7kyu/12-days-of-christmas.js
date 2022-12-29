var comparator = function(a,b) {
    let order = ["a ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10", "11", "12", "On"];
    return  order.indexOf(b.charAt(0)+b.charAt(1)) - order.indexOf(a.charAt(0)+a.charAt(1));
  }