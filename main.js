let btnNav1 = document.getElementById("btnNav1");

btnNav1.onclick = () =>{
    window.location.reload()
}

let Accunt = document.getElementById("Accunt");

let contact = document.getElementById("contact");

let Close = document.getElementById("Close");

Accunt.onclick = () =>{
    contact.classList.add("classContact")
}

Close.onclick = () =>{
    contact.classList.remove("classContact");
}

let input = document.getElementById("number");

input.onclick = function(){
    input.type = "number"
}

let btnToUp = document.getElementById("toUp");

window.addEventListener("scroll",function(){
    if(scrollY >= 250){
        btnToUp.style.display = "block"
    }else{
        btnToUp.style.display = "none"
    }
})

btnToUp.addEventListener("click",function(){
   window.scroll({
       top: 0,
       left: 0,
       behavior: "smooth"
   })
})