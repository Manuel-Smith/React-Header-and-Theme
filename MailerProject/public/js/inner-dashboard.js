// (async () => {
//   try {
//     let mainSection = document.getElementById("main-section");
//     let dashboardLogo = document.getElementById("mail-dashboard");
//     let dashBoardData = await fetch("/views/mail-dashboard.html");
//     let data = await dashBoardData.text();
//     setTimeout(() => {
//       mainSection.innerHTML = data;
//     }, 1000);

//     dashboardLogo.addEventListener("click", (event) => {
//       console.log(data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// })();
