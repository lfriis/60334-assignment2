function selection(select) {
     var choice = document.getElementById('file');

     if (select.value == "no") {
          choice.style.display = 'none';

     } else {
          choice.style.display = 'block';
     }
}
