const guideContainer = document.querySelector("#htu-container");
const closeGuide = document.querySelector("#close-guide-btn");
const openGuide = document.querySelector("#open-guide-btn");
closeGuide.addEventListener("click",()=>{
    guideContainer.style.transform = "scale(0)";
    guideContainer.classList.remove("active");
})

openGuide.addEventListener("click",()=>{
    guideContainer.style.transform = "scale(1)";
    guideContainer.classList.add("active");
})