
/*Dropdown Filterbuttons Anja*/
let tmp = 0;
function dropdownFunction() {
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
    window.location="cart.html";
}

function openMain() {
  window.location.href = ".\\index.html";
}

function openDetail() {
  window.location.href = ".\\detail.html"
}

function openLogin() {
  window.location.href = ".\\login.html";
}

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="motd-banner">
      <div class="max-width">
        <button id="motd">Spare bis zu -50% auf noch mehr Styles im Herbst-Sale</button>
        <svg id="motd-close-btn" viewBox="0 0 24 24" width="1em" height="1em"
          fill="currentColor" aria-labelledby="schließen-:R2:"
          class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ I_qHp3" focusable="false"
          aria-hidden="false" role="img" style="width:16px;height:16px"><title
            id="schließen-:R2:">Schließen</title><path
            d="m13.057 11.996 7.723-7.723a.75.75 0 1 0-1.06-1.06l-7.724 7.723-7.723-7.724a.75.75 0 1 0-1.06 1.061l7.723 7.723-7.716 7.717a.75.75 0 1 0 1.06 1.06l7.716-7.716 7.717 7.716a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-7.716-7.717z"></path></svg>
      </div>
    </div>
    <!-- First Row -->
    <div id="row-1" class="nav-row">

      <!-- Left Buttons -->
      <div class="nav-left-aligned">
        <ul class="nav-buttons-list">
          <li><button type="button"
              class="btn btn-dark rounded-0 textbold" id="damen"
              onclick="toggleButtons('damen')">Damen</button></li>
          <li><button type="button"
              class="btn btn-light rounded-0 textbold" id="herren"
              onclick="toggleButtons('herren')">Herren</button></li>
          <li><button type="button" class="btn btn-light rounded-0 textbold"
              id="kinder" onclick="toggleButtons('kinder')">Kinder</button></li>
        </ul>
      </div>

      <!-- Centered Logo -->
      <div id="logo" class="nav-left-aligned">
        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="25"
          viewBox="0 0 122 25" xml:space="preserve" class="b69iQl _5Yd-hZ"
          aria-hidden="true"><style></style><g id="Layer_1"><path
              d="M53.947 5.908c-.879-.484-2.185-.719-3.995-.72-2.475.002-4.773.515-5.642.839-.197.063-.407.233-.41.523v.064l.244 1.23.006.023c.076.251.285.364.475.364a.707.707 0 0 0 .154-.026l.412-.096c1.078-.27 2.708-.678 4.528-.678 1.104 0 1.846.096 2.344.306.807.306.812.828.82 1.691v1.292a30.189 30.189 0 0 0-.489-.003c-.891 0-2.644.041-4.368.318-2.63.404-4.806 1.033-4.793 4.658.001 4.6 4.269 4.609 6.32 4.613 1.391 0 2.676-.205 3.515-.38 1.914-.444 2.403-1.051 2.377-2.954v-7.65c.003-1.167.006-2.619-1.498-3.414m-1.05 11.817c-1.02.331-2.135.498-3.315.498v.108l-.002-.108c-1.886-.014-3.729-.23-3.73-2.636.011-1.914 1.032-2.142 2.325-2.43l.09-.02c1.15-.246 4.036-.292 4.631-.3v4.888zm23.88-8.403v7.65c.025 1.903-.463 2.51-2.378 2.955a17.77 17.77 0 0 1-3.515.38c-2.051-.005-6.318-.014-6.32-4.614-.013-3.624 2.164-4.254 4.794-4.658 1.723-.277 3.476-.318 4.367-.318.24 0 .397.002.49.003V9.428c-.009-.863-.014-1.385-.82-1.69-.498-.211-1.24-.307-2.345-.307-1.82 0-3.45.408-4.528.678l-.412.096a.706.706 0 0 1-.153.026.493.493 0 0 1-.476-.363l-.006-.023-.244-1.231V6.55c.003-.29.213-.46.41-.523.87-.324 3.167-.837 5.643-.839 1.809.001 3.115.236 3.994.72 1.505.795 1.501 2.247 1.499 3.414m-2.55 3.516c-.595.007-3.481.053-4.631.299l-.09.02c-1.293.288-2.314.516-2.326 2.43.003 2.406 1.845 2.622 3.731 2.636l.002.108v-.107c1.18 0 2.295-.168 3.314-.499v-4.887zm41.19-7.65c-5.943.008-6.446 3.913-6.452 7.573.006 3.646.51 7.537 6.452 7.545 5.938-.008 6.445-3.888 6.453-7.546-.006-3.827-.51-7.564-6.453-7.572m0 12.982c-3.604-.016-3.786-1.866-3.81-5.408.025-3.562.205-5.422 3.81-5.438 3.605.016 3.786 1.876 3.81 5.436-.024 3.544-.205 5.394-3.81 5.41m-10.665 1.598-.155.039c-.831.21-1.97.5-3.965.5h-.005c-5.5-.009-6.58-2.783-6.585-7.573.007-5.493 1.748-7.538 6.425-7.546 1.65 0 2.787.214 3.603.41l-.005-4.424c-.007-.194.08-.448.54-.536l1.46-.372h.08c.336.008.455.307.455.56v16.626c.023 1.05-.1 1.95-1.848 2.316m-.686-12.04c-.488-.124-1.85-.43-3.383-.43-2.815.026-3.997.79-4.026 5.463.033 5.132 1.561 5.409 4.052 5.436l.001.107v-.107c1.55 0 2.88-.323 3.355-.454V7.728zM90.938 19.96h-1.306a.603.603 0 0 1-.615-.615V9.482c-.024-1.669-.522-2.133-2.32-2.158-2.031 0-4.09.51-4.767.695v11.326c-.001.356-.248.614-.588.615h-1.334a.602.602 0 0 1-.614-.615V8.282c-.02-1.024.076-1.732 1.533-2.203 1.395-.481 4.063-.89 5.826-.89 3.36.004 4.794 1.216 4.8 4.053v10.103c-.001.35-.265.614-.615.615m-29.592.266h.001c.751-.015 1.306-.163 1.524-.407a.374.374 0 0 0 .103-.285c-.005-.081-.005-.081-.211-1.046l-.005-.023c-.045-.253-.225-.367-.373-.367-.014 0-.028 0-.02.002 0 0-.189-.01-.375-.01h-.002c-.535-.017-.979-.095-.988-.878V.827c0-.273-.165-.554-.481-.561h-.093l-1.464.375c-.25.026-.509.203-.498.533v16.092c.003 1.906 1.026 2.957 2.88 2.96h.002zM40.68 19.96H30.195a.603.603 0 0 1-.614-.615v-1.28c-.007-.313.093-.453.286-.693l8.345-9.701h-8.176a.603.603 0 0 1-.615-.615V6.15c0-.35.264-.614.614-.615h10.59c.35 0 .615.265.616.615v1.306c.005.236-.077.436-.265.646l-8.366 9.722h8.07c.349 0 .613.265.614.614v.907a.603.603 0 0 1-.615.615"></path><path
              fill="#ff6900"
              d="M22.19 9.42c-1.722-2.111-4.128-4.16-7.28-6.01l-.012-.006C11.722 1.6 8.744.54 6.054.105 4.376-.166 3.574.15 3.21.36c-.365.21-1.04.747-1.643 2.337C.598 5.243.026 8.35 0 12.006v.013c.026 3.654.598 6.763 1.566 9.309.604 1.59 1.278 2.126 1.643 2.336.365.211 1.167.527 2.845.255 2.69-.434 5.668-1.494 8.844-3.298l.012-.007c3.152-1.849 5.558-3.899 7.28-6.01 1.073-1.318 1.201-2.17 1.201-2.592 0-.421-.128-1.273-1.202-2.591z"></path></g></svg>
        <div class="vr" style="height: 24px; margin-bottom: -12px;"></div>
        <span>Entdecke</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="28"
          fill="none" viewBox="0 0 69 28" class="b69iQl _5Yd-hZ _3LATVU"
          aria-hidden="true"
          style="width:auto;height:16px;margin-bottom:2px">
          <path fill="#1A1A1A" fill-rule="evenodd"
            d="M11.87 2h45.172a12 12 0 0 1 0 24H11.87a12 12 0 0 1 0-24zm.592 14.195h3.902v-.005c2.903 0 5.253-2.216 5.253-4.95s-2.35-4.95-5.253-4.95H9.538v7.27l-5.427-.008v2.638h5.427v5.526h2.924v-5.52zm11.11 5.52H33.84V19.09h-7.342V6.29h-2.924v15.426zm17.582.326c4.007 0 6.454-2.166 6.454-6.13V6.29h-2.924v9.631c0 2.361-1.277 3.575-3.53 3.575s-3.53-1.214-3.53-3.575V6.29h-2.925v9.621c0 3.921 2.491 6.13 6.455 6.13zm8.013-5.414c.023 3.529 2.447 5.435 6.606 5.435l.006-.006c3.898 0 6.237-1.71 6.226-4.745 0-2.491-1.493-3.861-5.11-4.57l-1.343-.26c-2.274-.452-3.01-1.037-3.01-2.272 0-1.195.953-1.905 2.771-1.905 2.346 0 3.298.845 3.407 2.577h2.84c-.108-3.054-2.123-4.938-6.28-4.938-3.617 0-5.718 1.732-5.718 4.353 0 2.497 1.645 4.055 4.96 4.684l1.298.26c2.361.498 3.163 1.018 3.163 2.23 0 1.452-1.11 2.232-3.123 2.232-2.36 0-3.79-.804-3.813-3.075h-2.88zM12.462 8.91h3.76c1.367 0 2.475 1.038 2.475 2.325 0 1.288-1.108 2.33-2.475 2.33h-3.76V8.91z"
            clip-rule="evenodd">
          </path>
        </svg>
      </div>

      <!-- Right Buttons -->
      <div class="nav-right-aligned">
        <button id="language-button" class="nav-inv-btn">
          <span>DE</span>
          <svg viewBox="0 0 24 24" width="1em" height="1em"
            fill="currentColor" aria-labelledby="switch-language-:Ra9mq:"
            class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
            focusable="false" aria-hidden="false" role="img"
            data-testid="language-button">
            <title id="switch-language-:Ra9mq:">Switch Language</title>
            <path
              d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12h.001c6.624-.008 11.991-5.376 11.999-12zm-1.501-.024c-1.24-.38-2.502-.67-3.775-.904-.15-3.641-1.174-6.775-2.714-8.77a10.513 10.513 0 0 1 6.489 9.674zM11.25 1.626v8.89a33.51 33.51 0 0 0-4.462.295c.277-4.66 2.15-8.49 4.462-9.186zm0 10.389v10.36c-2.453-.74-4.41-5.01-4.492-10.053a32.06 32.06 0 0 1 4.492-.307zm1.5 10.36v-10.36c1.505.003 3.006.093 4.492.307-.082 5.042-2.04 9.314-4.492 10.053zm0-11.86v-8.89c2.311.697 4.185 4.527 4.462 9.186a33.51 33.51 0 0 0-4.462-.295zm-4.756-8.22c-1.542 1.996-2.568 5.133-2.718 8.777a33.497 33.497 0 0 0-3.775.904c.01-4.37 2.69-8.109 6.493-9.68zm-6.378 11.18c.046-.007.093-.004.139-.02a31.973 31.973 0 0 1 3.511-.859c.1 3.785 1.14 7.053 2.728 9.109a10.501 10.501 0 0 1-6.378-8.23zm14.39 8.23c1.588-2.056 2.627-5.324 2.728-9.109 1.183.228 2.358.498 3.511.859.045.016.092.017.139.024a10.501 10.501 0 0 1-6.378 8.226z">
            </path></svg>
        </button>
        <button id="login-button" class="nav-inv-btn" onclick=openLogin()>
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
            aria-labelledby="your-account-:R1amq:"
            class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
            focusable="false" aria-hidden="false" role="img"
            data-testid="user-account"><title id="your-account-:R1amq:">Your
              account</title><path
              d="M21.645 22.866a28.717 28.717 0 0 0-6.46-7.817c-2.322-1.892-4.048-1.892-6.37 0a28.74 28.74 0 0 0-6.46 7.817.75.75 0 0 0 1.294.76 27.264 27.264 0 0 1 6.113-7.413A3.98 3.98 0 0 1 12 15.125a3.81 3.81 0 0 1 2.236 1.088 27.252 27.252 0 0 1 6.115 7.412.75.75 0 1 0 1.294-.76zM12 12.002A6.01 6.01 0 0 0 18.003 6 6.003 6.003 0 1 0 12 12.002zm0-10.505a4.502 4.502 0 1 1 0 9.005 4.502 4.502 0 0 1 0-9.005z"></path></svg>
        </button>
        <button id="wishlist-button" class="nav-inv-btn">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
            aria-labelledby="wish-list-:R3mq:"
            class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
            focusable="false" aria-hidden="false" role="img"
            data-testid="wishlist"><title id="wish-list-:R3mq:">Wish list</title><path
              d="M17.488 1.11h-.146a6.552 6.552 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.745.745 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.432 6.432 0 0 0-6.42-6.306zM12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8z"></path></svg>
        </button>
        <button id="cart-button" class="nav-inv-btn" onclick=openCart()>
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
            aria-labelledby="your-bag-:R4mq:"
            class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
            focusable="false" aria-hidden="false" role="img" data-testid="cart"><title
              id="your-bag-:R4mq:">Your bag</title><path
              d="M21.193 8.712a2.984 2.984 0 0 0-2.986-2.726h-.952v-.751a5.255 5.255 0 0 0-10.51 0v.75h-.951a2.983 2.983 0 0 0-2.986 2.727L1.715 20.73A2.999 2.999 0 0 0 4.7 24h.005l14.599-.027a2.998 2.998 0 0 0 2.98-3.27L21.193 8.712zM8.246 5.235a3.754 3.754 0 0 1 7.508 0v.75H8.246v-.75zm11.056 17.238-14.599.025h-.002a1.496 1.496 0 0 1-1.49-1.631l1.093-12.02a1.488 1.488 0 0 1 1.49-1.36h.95V9.74a.75.75 0 0 0 1.502 0V7.487h7.508V9.74c0 .415.336.75.75.75h.002a.75.75 0 0 0 .75-.75V7.487h.951a1.49 1.49 0 0 1 1.49 1.361l1.092 11.993a1.496 1.496 0 0 1-1.488 1.632z"></path></svg>
        </button>
      </div>

      <!-- Modals -->

      <!-- Language Modal -->
      <div id="language-modal" class="modal">
        <div id="language-modal-content" class="modal-content">
          <span class="close">&times;</span>
          <h2 class="textbold">Welche Sprache möchtest du nutzen?</h2 class="textbold">
            <form action>
              <input type="radio" id="de" name="fav_language" value="HTML"
                class>
              <label for="html">Deutsch</label><br>
              <input type="radio" id="en" name="fav_language" value="CSS">
              <label for="css">English</label><br>

              <div>
                <button type="button" class="btn btn-dark rounded-0 textbold"
                  style="float: right;" onclick=closeLanguageSelector()>Abbrechen</button>
                <button type="button" class="btn btn-dark rounded-0 textbold"
                  style="float: right;" onclick=closeLanguageSelector()>Speichern</button>
              </div>
            </form>
          </div>
        </div>
        <script>openLanguageSelector()</script>
      </div>

      <!-- Cart Modal -->
      <div id="cart-modal" class="modal">
        <div class="modal-content">
          <!-- Add your login form or content here -->
          <h2>Cart</h2>
          <form>
            <!-- Your login form fields go here -->
          </form>
        </div>
        <script>openCartModal()</script>
      </div>

    </div>

    <!-- Second Row -->
    <div id="row-2" class="nav-row">
      <div class="nav-left-aligned">
        <ul class="nav-buttons-list">
          <li><button class="nav-inv-btn">Back to</button></li>
          <li><button class="nav-inv-btn">NEU</button></li>
          <li><button class="nav-inv-btn">Bekleidung</button></li>
          <li><button class="nav-inv-btn">Schuhe</button></li>
          <li><button class="nav-inv-btn">Sport</button></li>
          <li><button class="nav-inv-btn">Streetwear</button></li>
          <li><button class="nav-inv-btn">Accessoires</button></li>
          <li><button class="nav-inv-btn">Beauty</button></li>
          <li><button class="nav-inv-btn">Designer</button></li>
        </ul>
      </div>
      <form class="nav-right-aligned">
        <input id="nav-searchform" type="text">
      </form>
    </div>
    <hr />
    `;
  }
}

customElements.define('navbar-component', Navbar);