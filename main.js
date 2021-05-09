const button = document.querySelectorAll(".gallery-filter li");
const list = document.querySelectorAll(".box");

button.forEach((event)=>{
    event.addEventListener("click",()=>{

        for (let i=0;i <button.length; i++){
            button[i].classList.remove("active");
        }
        event.classList.add("active");

        list.forEach((current)=>{
            current.style.display="none";
            let pics = event.textContent.toLowerCase();

            if(current.getAttribute("data-att")=== pics || pics==="all"){
                current.style.display="block";
            }
        })
    })
});