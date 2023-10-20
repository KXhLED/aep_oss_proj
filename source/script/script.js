
/*Dropdown Filterbuttons Anja*/
let tmp = 0;
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if (tmp == 0) {
    document.getElementById("myImage").src = "./images/pfeil-nach-oben.png";
    tmp = 1;
  } else {
    document.getElementById("myImage").src = "./images/pfeil-nach-unten.png";
    tmp = 0;
  }
}






function toggleButtons(btnid) {

    array = ["herren", "damen", "kinder"]

    const index = array.indexOf(btnid);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }

    if (document.getElementById(btnid).className == 'btn btn-light rounded-0')
    {
        document.getElementById(btnid).className = 'btn btn-dark rounded-0';
    }

    array.forEach(element => {
        document.getElementById(element).className = 'btn btn-light rounded-0';
    });
    
}




    
