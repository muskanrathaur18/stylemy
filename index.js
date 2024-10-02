const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
// icon name remove
      const screenWidth =document.getElementById("demo").innerHTML =
          "Screen Width: " + screen.width;
            console.log(screenWidth);
            const Demo=document.getElementById("demo1")
            const Demo1=document.getElementById("demo2")
            const Demo2=document.getElementById("demo3")
             let k="";
             if(screen.width <=820) {
                 Demo.innerHTML=k;
                 Demo1.innerHTML=k;
                 Demo2.innerHTML=k;
               }             
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Circular
const initSlider=()=>{
    const imageList = document.querySelector(".image-list")
    const slideButtons = document.querySelectorAll(".slide-button")
    //Slide image according to the slide button click
    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction = button.id === "arrow-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left : scrollAmount,behaviour:"smooth"})
        });
    });
}
 window.addEventListener("load",initSlider);

