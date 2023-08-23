(() => {
  let menuIcon = document.getElementById("menu-icon");
  let asideMenu = document.querySelector(".left-side");
  let menuClicked = false;
  let sideMenuIcons = document.getElementById("menu-items-side");
  let logoutIcon = document.getElementById("footer-item");
  let copyIcon = document.getElementById("copyright");
  let mainSection = document.querySelector(".main-section");

  menuIcon.addEventListener("click", (event) => {
    if (!menuClicked) {
      //   height: 90%;
      //   position: fixed;
      //   left: 0.5rem;
      //   top: 5.5rem;
      //   width: 18%;
      //   display: grid;
      //   padding: 1rem;

      //   asideMenu.style.backgroundColor = "red";
      // asideMenu.style.boxShadow = "1px 1px 10px 2px rgba(236, 227, 224, 0.404)";
      asideMenu.style.width = "5%";

      mainSection.style.width = "90%";
      mainSection.style.left = "8%";
      asideMenu.style.transition = "ease-in-out 400ms";
      mainSection.style.transition = "ease-in-out 400ms";
      sideMenuIcons.style.color = "red";
      menuClicked = true;
      sideMenuIcons.classList.add("none-display");
      sideMenuIcons.classList.add("bigger-icons");
      logoutIcon.classList.add("none-display");
      copyIcon.classList.add("hide-copyright");
      logoutIcon.classList.add("bigger-icons");
    } else {
      //   asideMenu.style.backgroundColor = "transparent";

      asideMenu.style.transition = "ease-in-out 400ms";
      mainSection.style.transition = "ease-in-out 400ms";
      // asideMenu.style.bo1xShadow = "none";
      asideMenu.style.width = "18%";
      mainSection.style.left = "19%";
      mainSection.style.width = "80%";
      setTimeout(() => {
        sideMenuIcons.classList.remove("none-display");
        sideMenuIcons.classList.remove("bigger-icons");
        logoutIcon.classList.remove("none-display");
        copyIcon.classList.remove("hide-copyright");
        logoutIcon.classList.remove("bigger-icons");
      }, 405);

      //   mainSection.style.width = "80%";
      menuClicked = false;

      //   sideMenuIcons.style.display = "block";
    }
  });
})();
