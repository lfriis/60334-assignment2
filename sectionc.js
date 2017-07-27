function calculate (e) {
     var num1 = document.getElementById("num1").value;
     var num2 = document.getElementById("num2").value;
     var result;

     if (e == "1") {
          result = num1 * num2;
          document.getElementById("result").value = result;

     } else if (e == "2") {
          result = num1 / num2;
          document.getElementById("result").value = result;
     }
}
