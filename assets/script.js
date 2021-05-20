let webInventory = document.querySelector(".inventaris");


webInventory.addEventListener('mouseover', function(event) {
    document.querySelector('.inventory').setAttribute("src", "assets/image/inventaris.jpg");
 });

 webInventory.addEventListener('mouseout', function(event) {
    document.querySelector('.inventory').setAttribute("src", "assets/image/page-login.jpg");
 });

 const toTop = document.querySelector(".to-top");

 window.addEventListener("scroll",()=>{
     if (window.pageYOffset >100) {
         toTop.classList.add("active");
     } else{
         toTop.classList.remove("active");
     }
 })