function convert () {
     var cad = document.getElementById("cad").value;
     var us;

     us = cad * 0.75;

     document.getElementById("us").value = us;
}
