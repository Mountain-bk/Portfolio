
//Lists//
const lightColors = [" ", "blue", "orange", "gold", "red"]

const darkColors = ["dark-theme", "dark-theme bluedark", "dark-theme orangedark", "dark-theme golddark", "dark-theme reddark"]

const mainItem = [...document.getElementsByClassName("mainItem")]

const sections = [...document.getElementsByTagName("section")]

const navLink = [...document.getElementsByClassName("nav-link")]

const darkItems = [...document.getElementsByClassName("darkItems")]

//---Toggle Dark Mode Light Mode---//
const checkbox = document.querySelector(".darkLightSwitch");
checkbox.addEventListener("change", function(){
  document.body.classList.toggle("dark-theme");
});

//---Change Background Color when Scroll Down---//
window.addEventListener("scroll", function(){
  changeBackgroundColor(document.body.className);
})

function changeBackgroundColor(key){
  for (i=0; mainItem.length > i; i++){
    var scrollTop = window.pageYOffset
    if (scrollTop <= mainItem[i].offsetTop){
      if (key == "dark-theme" || key == "dark-theme bluedark" || key == "dark-theme orangedark" || key == "dark-theme golddark" || key == "dark-theme reddark"){
        document.body.className = darkColors[i]
        break
      } else{
        document.body.className = lightColors[i]
        break
      }
    }
  }
}


//---Fade Contents and Change Background Color when Scroll Down---//
const items = document.querySelectorAll(".animation")
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if (entry.intersectionRatio > 0){
      entry.target.classList.add("appear");
    } else{
      entry.target.classList.remove("appear");
    }
  })
})

items.forEach(item => {
  observer.observe(item);
})



function scrollDown(key){
  if (key == "a nav-link" || key == "a nav-link dark"){
    window.scrollTo({top: sections[1].offsetTop, behavior: "smooth"});
  } else if (key == "b nav-link" || key == "b nav-link dark"){
    window.scrollTo({top: sections[2].offsetTop, behavior: "smooth"});
  } else if (key == "c nav-link" || key == "c nav-link dark"){
    window.scrollTo({top: sections[3].offsetTop, behavior: "smooth"});
  } else if (key == "d nav-link" || key == "d nav-link dark"){
    window.scrollTo({top: sections[4].offsetTop, behavior: "smooth"});
  }
}

//---About Me page---//

//Open CV(pdf) when Click Button//
function goCV(){
  open("CV-Ryo Yamamoto.pdf", "_blank");
}

//---Copy email address to clip board---//
function copyEmail(){
  var copyEmail = document.getElementById("email");
  copyEmail = copyEmail.getAttribute("data-email");
  var textArea = document.createElement("textarea");
  textArea.value = copyEmail;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

//---Display copying message when hover or click email font---//

const emailFont = document.querySelector("#email");
const emailFontContact = document.querySelector("#emailContact");
const copyPop = document.querySelector(".top-copy-email-text");
const copyPopContact = document.querySelector(".contact-copy-email-text");

//---Top page---//
function displayPop(){
  copyPop.innerHTML = "Copy email address";//Display copy-pop when on mouse over email font//
  copyPop.style.opacity = "1";
}

function hidePop(){
  copyPop.style.opacity = "0";//Hide copy-pop when out mouse over email font//
}

emailFont.addEventListener("click", () =>{//Display message when you click email font//
  copyPop.innerHTML = "Copied!";
  copyPop.style.opacity = "1";
  setTimeout(hidePop, 500);
});

//Scroll Down when click Nav//
for (var i = 0; navLink.length > i; i++){
  navLink[i].addEventListener("click", function(){
    scrollDown(this.className);
  })
}

//---Works Page---//

//Open information of works//
const infoBtn = document.querySelectorAll(".information-link");
const modal = document.querySelector(".modal");
const titleText = document.querySelector(".title-text");
const languagesText = document.querySelector(".languages-text");
const productionPeriodText = document.querySelector(".production-period-text");

for(let i = 0; infoBtn.length > i; i++){
  infoBtn[i].addEventListener("click", () =>{
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    if(infoBtn[i].value == "Portfolio"){
      titleText.innerHTML = "<p>My Portfolio</p>";
      languagesText.innerHTML =
      "<div class='language-icon'>" +
        "<i class='fab fa-html5'></i>" +
        "<p>HTML</p>" +
      "</div>" +
      "<div class='language-icon'>" +
        "<i class='fab fa-css3-alt'></i>" +
        "<p>CSS</p>" +
      "</div>" +
      "<div class='language-icon'>" +
        "<i class='fab fa-js'></i>" +
        "<p>JavaScript</p>" +
      "</div>";
      productionPeriodText.innerHTML =
      "<p>Since July 19th</p>" +
      "<p>(Start learning HTML, CSS, JavaScript since June 22nd)</p>";
    }else if(infoBtn[i].value == "Jappalo Wings"){
      titleText.innerHTML = "<p>Jappalo Wings(Fast food imitation)</p>";
      languagesText.innerHTML =
      "<div class='language-icon'>" +
        "<i class='fab fa-html5'></i>" +
        "<p>HTML</p>" +
      "</div>" +
      "<div class='language-icon'>" +
        "<i class='fab fa-css3-alt'></i>" +
        "<p>CSS</p>" +
      "</div>" +
      "<div class='language-icon'>" +
        "<i class='fab fa-js'></i>" +
        "<p>JavaScript</p>" +
      "</div>";
      productionPeriodText.innerHTML =
      "<p>Since July 30th</p>" +
      "<p>(Start learning HTML, CSS, JavaScript since June 22nd)</p>";
    }
  });
}


//Close information of works//
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () =>{
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
})

//---Contact Page---//
function displayContactPop(){
  copyPopContact.innerHTML = "Copy email address";
  copyPopContact.style.opacity = "1";
}

function hideContactPop(){
  copyPopContact.style.opacity = "0";
}

emailFontContact.addEventListener("click", () =>{
  copyPopContact.innerHTML = "Copied!";
  copyPopContact.style.opacity = "1";
  setTimeout(hideContactPop, 500);
});
