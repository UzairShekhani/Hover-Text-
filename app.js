let div = document.getElementById("move-div");
let title = document.getElementById("title");
let titleChars = title.innerHTML.split("");

title.innerHTML = ("")
window.onload = () => {
    titleChars.forEach((char,index) => {
        let span = document.createElement("span");
        span.innerText = char;
        span.id = "char-"+ index
        title.appendChild(span)
    })
}

const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType  = "Touch";
        return true;
    }
    catch(e){
        deviceType = "mouse"
        return false;
    }
};
function calculateDistance(element,mouseX,mouseY) {
    const rect = element.getBoundingClientRect();
    const elemX = rect.left + rect.width / 2;
    const elemY = rect.top + rect.height / 2;
    return Math.sqrt(Math.pow(mouseX - elemX,2) + Math.pow(mouseY - elemY, 2))
}

const move = (e) => {
    const x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    const y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    titleChars.forEach((_, index) => {
        let charElem = document.getElementById ("char-" + index);
        let distance = calculateDistance(charElem,x,y);

        if (distance < 50) {
            charElem.classList.add("glow")
        }else{
            charElem.classList.remove("glow")
        }
    })
}
document.addEventListener("mousemove", move);
document.addEventListener("touchmove", move);