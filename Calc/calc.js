var x = 0,
    y= 0,
    operator = "",
    decimal = false;

function point(){
    if (!decimal) {
      decimal = true;
      addNum(".")
    }
  }
function addNum(z){
if (decimal) {
  x = x+z;
  document.getElementById('demo').innerHTML= x;
  console.log(x);
}else {
  x = x*10+z;
  document.getElementById('demo').innerHTML= x;
  console.log(x);
}

};

function plus() {
  equal()
operator = "+";
console.log(operator);

};

function minus() {
  equal()
operator = "-"
console.log(operator);
};

function multiple() {
  equal()
operator = "*"
console.log(operator);
};

function divid() {
  equal()
operator = "/";
console.log(operator);
};

function equal(){
  decimal = false;
  switch (operator) {
    case "+":
        y = Number(x) + Number(y);
        document.getElementById('demo').innerHTML= y;
console.log("x= ",x,"y= ",y)
    break;

    case "*":
        y = x * y;
        document.getElementById('demo').innerHTML= y;
        console.log("x= ",x,"y= ",y)
    break;

    case "-":
        y = y - x;
        document.getElementById('demo').innerHTML= y;
console.log("x= ",x,"y= ",y)
    break;

    case "/":
    if (x !== 0) {
        y = y / x;
        document.getElementById('demo').innerHTML= y;
        console.log("x= ",x,"y= ",y)
      }
    break;
  };
  y = Number (document.getElementById('demo').innerHTML);
  x = 0;

};
function resit(){
      x = 0;
      y= 0;
      operator = "";
      decimal = false;
      document.getElementById('demo').innerHTML= 0;

}
window.addEventListener("keydown", function (event) {
 console.log(event.key);
if (!isNaN(event.key)) {
  addNum(Number(event.key));
}

switch (event.key) {
  case "+":
    plus();
  break;
  case "-":
    minus()
  break;
  case "*":
    multiple()
  break;
  case "/":
    divid()
  break;
case "Enter":
equal()
break;
case ".":
point()
break;
case "Delete":
resit()
break;

}
}, false);
