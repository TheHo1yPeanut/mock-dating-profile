window.addEventListener("scroll", () => {

    var scroll = window.scrollY;

    document.getElementById("pfp").style.setProperty("opacity", 1 - scroll*0.0055);
    document.getElementById("pfp").style.setProperty("transform", `scale(${1 - scroll*0.0020}) rotate(${360 - scroll*0.2}deg`);
    document.getElementById("contentcont").style.setProperty("box-shadow", `0 -${scroll*0.011}vh 2vh black`);

    if(scroll > 600){
        document.getElementById("bush1").style.setProperty("transform", "translateX(-8vw) translateY(5vh) scale(0.9)");
        document.getElementById("bush2").style.setProperty("transform", "translateX(8vw) translateY(5vh) scale(0.9)");
    } else {
        document.getElementById("bush1").style.setProperty("transform", "translateX(3vw) translateY(0vh) scale(1)");
        document.getElementById("bush2").style.setProperty("transform", "translateX(-3vw) translateY(0vh) scale(1)");
    }
});

    console.log(document.getElementsByClassName("userChoice"));

for(let i = 0; i < document.getElementsByClassName("userChoice").length; i++){
    document.getElementsByClassName("userChoice")[i].addEventListener("click", (e) => {
        e.target.classList.toggle("activeUserChoice");
    });
}

