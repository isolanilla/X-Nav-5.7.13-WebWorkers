self.onmessage = function(event) {
console.log("He recibido " + event.data);
  var n = 1;
  var salto = 0;
  primelist = "";
  search: while (n<parseInt(event.data)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
    salto++
    if(salto==100){
      console.log("envaiamos mensaje")
      self.postMessage(primelist)
      salto=0;
      primelist=""
    }
  }
}
