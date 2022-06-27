
const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  burger.addEventListener("click", () =>{
});

  burger.addEventListener("click", () =>{
    this.classList.toggle("close");
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = "";
      }else{
        link.style.animation = "navLinkFade 0.5s ease forwards ${index/7 + 1.3}s";
      }
    });
    burger.classList.toggle("toggle");
  });
}

navSlide();
