const lists = document.querySelectorAll("li a");
const section = document.querySelectorAll("section");


  const highlightSection = () => {
    let scrollPosition = window.scrollY + window.innerHeight / 4;

    section.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const h1 = section.querySelector("h1");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Highlight the active nav link
        lists.forEach(link => link.classList.remove("active"));
        lists[index].classList.add("active");

        // Highlight the active section's h1
        h1.classList.add("active3");
      } else {
        h1.classList.remove("active3");
      }
    });
  };

  window.addEventListener("scroll", highlightSection);

// window.onscroll = () => {
//   section.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 50;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       lists.forEach((link) => {
//         link.classList.remove("active");
//         link.classList.remove("active2");

//         document
//           .querySelector("li a[href*=" + id + "]")
//           .classList.add("active");

//           document
//           .querySelector("li a[href*=" + id + "]")
//           .classList.add("active2");
    
//               });
      
//     }
    
//   });
// };
const change = document.querySelector(".change");
const box = () => {
  setTimeout(() => {
    change.textContent = "front end";
    change.style.color="red"
  }, 0);
  setTimeout(() => {
    change.textContent = "developer";
    change.style.color="red"
  }, 4000);
  setTimeout(() => {
    change.textContent = "web developer";
    
  }, 8000);
};
box();
setInterval(box, 12000);
const menu = document.querySelector(".menubox");
const list = document.querySelector(".sub-container");
const menuimg = document.querySelector(".menubox");
const cancelimg = document.querySelector(".cancelbox");

menu.addEventListener("click", () => {
  list.classList.toggle("sub-class");
  menuimg.classList.add("unvis");

  cancelimg.classList.add("vis");
});
cancelimg.addEventListener("click", () => {
  // list.classList.toggle("sub-class")
  list.classList.remove("sub-class");
  cancelimg.classList.remove("vis");
  menuimg.classList.remove("unvis");
});
list.addEventListener("click", () => {
  list.classList.remove("sub-class");
  cancelimg.classList.remove("vis");
  menuimg.classList.remove("unvis");
});
const backgroundimg = document.querySelector("#home");
const changespan = document.querySelector(".change");

const back = () => {
  setTimeout(() => {
    backgroundimg.style.backgroundImage = "url(./images/com_3.jpg)";
    //    changespan.style.backgroundColor="rgb(246, 246, 246)"
    backgroundimg.style.transition = "0.4s ease-in";
  }, 0);

  setTimeout(() => {
    // backgroundimg.style.backgroundImage="url(./images/com_1.jpg)"
    //  changespan.style.backgroundColor="rgb(246, 246, 246)"
    backgroundimg.style.transition = "0.4s ease-in";
  }, 4000);
};
back();
setInterval(back, 7000);
// body.addEventListener("click",()=>{
//     list.classList.remove("sub-class")
// });

// var Name="rupesh";

const span = document.querySelector("li span");
//   span.textContent=`${Name}`
span.style.padding = "10px 10px";
const contactimg = document.querySelector(".con-inner2");

const img = () => {
  setTimeout(() => {
    contactimg.style.backgroundImage = "url(./images/com_3.jpg)";
    //    changespan.style.backgroundColor="rgb(246, 246, 246)"
    contactimg.style.transition = "0.4s ease-in";
  }, 0);

  setTimeout(() => {
    contactimg.style.backgroundImage = "url(./images/06.jpg)";
    contactimg.style.transition = "0.4s ease-in";
  }, 4000);
};
img();
setInterval(img, 7000);
const reimg = document.querySelector(".re-btn");
reimg.addEventListener("click", () => {
  reimg.disabled = true;
  reimg.textContent = "Downloading....";

  setTimeout(() => {
    reimg.textContent = "completed";
    confetti({
      particleCount: 400,
      spread: 100,
      origin: { y: 0.9 },
    });
  }, 3000);
  setInterval(() => {
    reimg.textContent = "Download";
  }, 8000);
});
