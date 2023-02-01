let input1 = document.querySelector("#r1");
let input2 = document.querySelector("#r2");
let input3 = document.querySelector("#r3");
let input4 = document.querySelector("#r4");
let input5 = document.querySelector("#r5");
let input6 = document.querySelector("#r6");
let input7 = document.querySelector("#r7");
let input8 = document.querySelector("#r8");
let pic1 = document.querySelector(".i-classic")
let pic2 = document.querySelector(".i-tel")
let pic3 = document.querySelector(".i-line")
let pic4 = document.querySelector(".i-moto")
let pic5 = document.querySelector(".i-auto")
let pic6 = document.querySelector(".i-plus")
let pic7 = document.querySelector(".i-taxi")
let pic8 = document.querySelector(".i-hamyar")

if(input1.checked){
    pic1.style = "opacity: 1;"
}

input1.addEventListener("click",()=>{
    pic1.style = "opacity: 1;"

    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input2.addEventListener("click",()=>{
    pic2.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input3.addEventListener("click",()=>{
    pic3.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input4.addEventListener("click",()=>{
    pic4.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input5.addEventListener("click",()=>{
    pic5.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input6.addEventListener("click",()=>{
    pic6.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input7.addEventListener("click",()=>{
    pic7.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic8.style = "opacity: .5;"
})
input8.addEventListener("click",()=>{
    pic8.style = "opacity: 1;"

    pic1.style = "opacity: .5;"
    pic2.style = "opacity: .5;"
    pic3.style = "opacity: .5;"
    pic4.style = "opacity: .5;"
    pic5.style = "opacity: .5;"
    pic6.style = "opacity: .5;"
    pic7.style = "opacity: .5;"
})

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("#nav");

    hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("change");
        nav.classList.toggle("active")
    })
    

