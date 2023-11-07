
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

function openLanguageSelector() {
  // Get the modal
  var modal = document.getElementById("language-modal");
        
  // Get the button that opens the modal
  var btn = document.getElementById("language-button");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    closeLanguageSelector();
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function closeLanguageSelector() {
  document.getElementById("language-modal").style.display = "none";
}

function openCartModal1() {
  // Get the modal
  var modal = document.getElementById("cart-modal");
        
  // Get the button that opens the modal
  var btn = document.getElementById("cart-button");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onmouseenter = function() {
    modal.style.display = "block";
    modal.removeAttribute('autofocus');
  }
  
  // When the user clicks on <span> (x), close the modal
  btn.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function openCart() {
  document.getElementById("mainSite").style.display = "none";
  document.getElementById("cartSite").style.display = "block";
}

function openMain() {
  document.getElementById("cartSite").style.display = "none";
  document.getElementById("mainSite").style.display = "block";
}

function openLogin() {
  window.location.href = ".\\login.html";
}