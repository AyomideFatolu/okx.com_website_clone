//----------- navigation visibility -------------

let open_menu = document.getElementById("menu_button");
let close_menu = document.getElementById("close_button");
let menu_items = document.getElementById("menu_item");
let logo = document.getElementById("logo_link");
let nav_signup = document.getElementById("nav_cta");


function toggle(tap) {
  if (tap == 1) {
    open_menu.style.display = "none";
    close_menu.style.display = "block";
   // menu_items.style.display = "flex";
    menu_items.style.left = "0px";
    logo.style.display = "none";
    nav_signup.style.display = "none";
  }
  else {
    open_menu.style.display = "block";
    close_menu.style.display = "none";
   // menu_items.style.display = "none";
   menu_items.style.left = "120%";
    logo.style.display = "block";
    nav_signup.style.display = "block";
  }
};

//---------------- the_tabs------------------

let tab_header_lite = document.getElementById("tabs_header_lite");
let tab_header_web3 = document.getElementById("tabs_header_web3");
let tab_header_pro = document.getElementById("tabs_header_pro");


let tab_body_lite = document.getElementById("tabs_body_lite");
let tab_body_web3 = document.getElementById("tabs_body_web3");
let tab_body_pro = document.getElementById("tabs_body_pro");

function tabs(click){
  if(click == 1) {
    tab_header_lite.style.background = "white";
    tab_header_lite.style.color = "black";
    
    tab_header_web3.style.background = "transparent";
    tab_header_web3.style.color = "white";
    
    tab_header_pro.style.background = "transparent";
    tab_header_pro.style.color = "white";
    
    
    tab_body_lite.style.top = "0px";
    tab_body_web3.style.top= "-200%";
    tab_body_pro.style.top = "-200%";
  }
    else if(click == 2) {
    tab_header_lite.style.background = "transparent";
    tab_header_lite.style.color = "white";
    
    tab_header_web3.style.background = "white";
    tab_header_web3.style.color = "black";
    
    tab_header_pro.style.background = "transparent";
    tab_header_pro.style.color = "white";
    
    
    tab_body_lite.style.top = "-200%";
    tab_body_web3.style.top = "0px";
    tab_body_pro.style.top = "-200%";
  }
  
 else {
   tab_header_lite.style.background = "transparent";
    tab_header_lite.style.color = "white";
    
    tab_header_web3.style.background = "transparent";
    tab_header_web3.style.color = "white";
    
    tab_header_pro.style.background = "white";
    tab_header_pro.style.color = "black";
    
    
    tab_body_lite.style.top= "-200%";
    tab_body_web3.style.top = "-200%"; 
    tab_body_pro.style.top = "0px";
 }
}


/*------------CLEAR FIXED CTA --------------*/
let fixed_cta = document.querySelector("#fixed_cta");

function remove() {
  fixed_cta.style.display = "none";
}

/*-----------TOGGLE_LANGUAGE_CURRENCY--------*/

let lang_curr = document.querySelector(".change_lang_currency");
let chevron = document.querySelector("#chevronity");

function toogle_cl() {
if (lang_curr.style.display == "none") {
lang_curr.style.display = "flex";
chevronity.style.transform = "rotate(180deg)";
}
else {
lang_curr.style.display = "none"; 
chevronity.style.transform ="rotate(-360deg)";
}

} 