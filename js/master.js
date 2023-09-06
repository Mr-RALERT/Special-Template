let pageLanding = document.querySelector(".landing");

let imgesList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

pageLanding.style.backgroundImage = `url(https://github.com/Mr-RALERT/Special-Template/tree/main/images/landing/${
  imgesList[Math.floor(Math.random() * imgesList.length)]
})`;

// Setting Button :

let settingButton = document.querySelector(".setting-box  .icon-container");
let icon = document.querySelector(".setting-box  .icon-container i");
let settingBox = document.querySelector(".setting-box");

settingButton.onclick = function () {
  settingBox.classList.toggle("open");
  icon.classList.toggle("spin");
};

// Colors Option Box  :

let allLis = document.querySelectorAll(
  ".setting-box .setting-container .option-box .color-list li"
);

allLis.forEach((li) => {
  li.style.backgroundColor = li.dataset.color;
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--color-org",
      e.target.dataset.color
    );
    allLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
  });
});

// background Random Option Box :

let backgroundOption = true;
let backgroundIntrval;
let url;

let backSpans = document.querySelectorAll(".random-container span");
backSpans.forEach((sp) => {
  sp.addEventListener("click", (e) => {
    e.target.parentElement
      .querySelectorAll(".random-container span")
      .forEach((span) => {
        span.classList.remove("active");
      });
    e.target.classList.add("active");
    window.localStorage.setItem("backgroundOption", e.target.dataset.back);
    if (e.target.dataset.back == "yes") {
      backgroundOption = true;
      randomeBackground();
    } else {
      window.localStorage.setItem("lastImage", url);
      backgroundOption = false;
      // console.log("Start ClearnIntrval")
      clearInterval(backgroundIntrval);
      // console.log("End ClearnIntrval")
    }
  });
});



// Function To Chansh BackGround Landing Randome :

function randomeBackground() {
  if (backgroundOption == true) {
    backgroundIntrval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * imgesList.length);
      url = `../images/landing/${imgesList[randomIndex]}`;
      pageLanding.style.backgroundImage = `url(${url})`;
    }, 3000);
  }
}

// Scrool Window

// Spans In Boxs In Our Skills :
let boxSkills = document.querySelectorAll(".our-skills .box span");

window.onscroll = function () {
  if (window.scrollY <= 750) {
    boxSkills.forEach((spa) => {
      spa.style.width = "0%";
    });
  } else {
    boxSkills.forEach((spa) => {
      spa.style.width = spa.dataset.width;
    });
  }
};

// Get Gallary Images :

let gallaryImages = document.querySelectorAll(".gallary .box img");

gallaryImages.forEach((img) => {
  img.onclick = function () {
    let overly = document.createElement("div");
    overly.className = "popupOverly";
    document.body.appendChild(overly);
    let boxImg = document.createElement("div");
    boxImg.className = "boxPopup";
    let imag = document.createElement("img");
    imag.style.cssText = "max-width : 100%;";
    imag.src = img.src;
    console.log(img.alt);
    if (img.alt !== "") {
      let imgTitle = document.createElement("h3");
      imgTitle.innerHTML = img.alt;
      boxImg.prepend(imgTitle);
    }
    let buttonClouse = document.createElement("span");
    buttonClouse.innerHTML = "X";
    buttonClouse.className = "btnClouse";

    boxImg.prepend(buttonClouse);
    boxImg.appendChild(imag);
    document.body.appendChild(boxImg);

    overly.addEventListener("click", () => {
      boxImg.remove();
      overly.remove();
    });
  };
});

// Add Evint To BtnClouse :
document.addEventListener("click", (e) => {
  if (e.target.className == "btnClouse") {
    document.querySelector(".popupOverly").remove();
    document.querySelector(".boxPopup").remove();
  }
});

// Start TimeLine Year :

let year = document.querySelector(".timeline .container .year");

let newData = new Date();

year.innerHTML = newData.getFullYear();



// Start Bullts :
let navBullts = document.querySelector(".bullts-nav")

let allBullts = document.querySelectorAll(".bullts-nav .bull ");

// Select ul li header : 
let headerAllLis = document.querySelectorAll(".header ul li a");


// Start ScroolTo Function : 

function scrollToSec(element) {

  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.cls).scrollIntoView({
        behavior: "smooth",
      });
      e.preventDefault()
    });
  });
  
}

scrollToSec(allBullts)



headerAllLis.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.cls).scrollIntoView({
      behavior: "smooth",
    });
    e.preventDefault()
  });
});








// Selected On Bullts Spans Setting : 

let spanBullts = document.querySelectorAll(".show-container span");

spanBullts.forEach((sp) => {
  sp.addEventListener("click",(e) => {
    spanBullts.forEach((s) => {
      s.classList.remove("active")
    })
    e.target.classList.add("active");
    window.localStorage.setItem("showBullts",e.target.classList[0])
    if (window.localStorage.getItem("showBullts") == "yes") {
      navBullts.style.cssText = "display : block"
    }else {
      navBullts.style.cssText = "display : none"
    }
  })
})


// Start Reast Setting Button : 

let resatSetting = document.querySelector(".resetBtn")

resatSetting.onclick = function () {
  window.localStorage.setItem("backgroundOption","yes")
  window.localStorage.setItem("lastImage",undefined)
  window.localStorage.setItem("showBullts","yes")
  window.localStorage.setItem("color","#ff9800")
  window.location.reload()
}




// Selelct Btn Header Bars :

let btnBars = document.querySelector(".header .fa-bars");

let ulHeaderList = document.querySelector(".header ul");


btnBars.addEventListener("click",() => {
  ulHeaderList.classList.toggle("open")
})
document.querySelector(".landing").addEventListener("click",() => {
  if (document.querySelector(".header .open") !== null) {
    document.querySelector(".header ul").className = "";
  }
})








// Window OnLoad :

window.onload = function () {
  // Check if locale Storage Has color value
  if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty(
      "--color-org",
      window.localStorage.getItem("color")
    );
    allLis.forEach((li) => {
      if (li.dataset.color == window.localStorage.getItem("color")) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }
  // Check if locale Storage Has backgroundOption value
  if (window.localStorage.getItem("backgroundOption")) {
    backSpans.forEach((span) => {
      span.classList.remove("active");
      if (
        span.dataset.back == window.localStorage.getItem("backgroundOption")
      ) {
        span.classList.add("active");
      }
    });
    if (window.localStorage.getItem("backgroundOption") == "yes") {
      backgroundOption = true;
      randomeBackground();
    } else {
      pageLanding.style.backgroundImage =
        window.localStorage.getItem("lastImage");
      backgroundOption = false;
      clearInterval(backgroundIntrval);
    }
  }
  // Check if locale Storage Has ShowBullts value :
  if (window.localStorage.getItem("showBullts")) {
    if (window.localStorage.getItem("showBullts") == "yes") {
      navBullts.style.cssText = "display : block"
    }else {
      navBullts.style.cssText = "display : none"
    }
    spanBullts.forEach((spn) => {
      spn.classList.remove("active");
      if (spn.dataset.show == window.localStorage.getItem("showBullts")) {
        spn.classList.add("active")
      }
    })
  }

};


