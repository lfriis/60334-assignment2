function changepic() {
     var season = document.getElementById("season").value;

     if (season == "1") {
          document.write("<img src='../images/winter.jpg'></image>");

     } else if (season == "2") {
          document.write("<img src='../images/spring.jpg'></image>");

     } else if (season == "3") {
          document.write("<img src='../images/summer.jpg'></image>");

     } else if (season == "4") {
          document.write("<img src='../images/fall.jpg'></image>");
     }
}
