let getButtons = document.querySelectorAll("button");
let getInput = document.querySelector("#display");

let str = "";

if(localStorage.getItem('data')){

  str = localStorage.getItem('data');
  getInput.value = str
}




getButtons.forEach(function (val) {
  val.addEventListener("click", function (dts) {
    if (dts.target.innerText == "=") {
      str = eval(str);
       localStorage.setItem('data',str);
      getInput.value = str;

    } else if (dts.target.innerText == "C") {
      str = "";
      localStorage.setItem('data',str)
      getInput.value = str;
    } else if (dts.target.innerText == "⌫") {
      str = str.slice(0, str.length - 1);
      getInput.value = str;
    } else {
      str = str + dts.target.innerText;
      getInput.value = str;
    }
  });
});
