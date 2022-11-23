const para = document.querySelector(".figure-container-third");
const para1 = document.querySelector(".figure-container-fourth");
para.addEventListener("mouseover", function (event) {
  document.getElementById("Name").id = "name";
  document.getElementById("Belle").id = "belle";
  document.getElementById("Pelanio").id = "pelanio";
  document.getElementById("Contacts").id = "contacts";
  document.getElementById("Email").id = "email";
  document.getElementById("Gmail").id = "gmail";
  document.getElementById("Number").id = "number";
  document.getElementById("Address").id = "address";
  document.getElementById("Add").id = "add";
});

para1.addEventListener("mouseover", function (event) {
  document.getElementById("Education").id = "education";
  document.getElementById("College").id = "college";
  document.getElementById("Date1").id = "date1";
  document.getElementById("Program1").id = "program1";
  document.getElementById("High").id = "high";
  document.getElementById("Date2").id = "date2";
  document.getElementById("Program2").id = "program2";
});

function openForm() {
  document.getElementById("myForm").style.opacity = 1;
}

function closeForm() {
  document.getElementById("myForm").style.opacity = 0;
}

function openNav() {
  document.getElementById("mySidenav").style.height = "15%";
  document.querySelector("#firstMain").style.top = "15%";
  document.querySelector("#secondMain").style.top = "100%";
  document.querySelector("#firstMain").style.height = "85%";
  document.querySelector("#secondMain").style.height = "85%";
  document.querySelector(".phone").style.height = "70%";
  document.querySelector(".phone-second").style.height = "70%";
  document.querySelector(".phone-third").style.height = "70%";
  document.querySelector(".phone-fourth").style.height = "70%";
  document.querySelector(".slider").style.height = "70%";
  document.querySelector("#context").style.top = "50.5%";
  document.querySelector("#img-popup").style.height = "76%";
  document.querySelector("#img-popup").style.width = "45%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.querySelector("#firstMain").style.top = "0";
  document.querySelector("#secondMain").style.top = "100%";
  document.querySelector("#firstMain").style.height = "100%";
  document.querySelector("#secondMain").style.height = "100%";
  document.querySelector(".phone").style.height = "60%";
  document.querySelector(".phone-second").style.height = "60%";
  document.querySelector(".phone-third").style.height = "60%";
  document.querySelector(".phone-fourth").style.height = "60%";
  document.querySelector(".slider").style.height = "60%";
  document.querySelector("#context").style.top = "44.5%";
  document.querySelector("#img-popup").style.height = "90%";
  document.querySelector("#img-popup").style.width = "65%";
}

function goFirstMain() {
  const firstMain = document.getElementById("firstMain");

  firstMain.scrollIntoView({ behavior: "smooth" });
}
function goSecondMain() {
  const secondMain = document.getElementById("secondMain");
  secondMain.scrollIntoView({ behavior: "smooth" });
}

const slideContainer = document.querySelectorAll(".slider");

for (let i = 0; i < slideContainer.length; i++) {
  const slider = function () {
    const slides = slideContainer[i].querySelectorAll(".slide");
    const btnLeft = slideContainer[i].querySelector(".slider__btn--left");
    const btnRight = slideContainer[i].querySelector(".slider__btn--right");
    const dotContainer = slideContainer[i].querySelector(".dots");

    let curSlide = 0;
    const maxSlide = slides.length;

    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      slideContainer[i]
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      slideContainer[i]
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };
    init();

    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });

    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();
}

function openPopUp() {
  document.getElementById("openpop").id = "openpopup";
  document.getElementById("openpopup").style.backgroundColor =
    "rgba(21, 21, 21, 0.573)";
}

function closePopUp() {
  document.getElementById("openpopup").id = "openpop";
}

function swapPosOn() {
  document.querySelector(".div-context").style.opacity = 0;
  document.querySelector(".slider").style.opacity = 0;
  document.querySelector(".skills").style.opacity = 1;
}
function swapPosOff() {
  document.querySelector(".div-context").style.opacity = 1;
  document.querySelector(".slider").style.opacity = 1;
  document.querySelector(".skills").style.opacity = 0;
}
