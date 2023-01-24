//adding class "change"
const generalContainer = document.querySelector(".general-container");
generalContainer.addEventListener("click", () => {
    generalContainer.classList.toggle("change");
    console.log("hello");
});

//playing audio

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.getElementsByTagName("audio")[0].play();
});

const icons = document.querySelectorAll("i");
icons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        document.getElementsByTagName("audio")[0].play();
    });
});

const subscribe = document.querySelector(".subscribe");
subscribe.addEventListener("click", () => {
    document.getElementsByTagName("audio")[0].play();
});

//ripple effect
const btn = document.querySelector(".btn-dashboard");
let ripple;
btn.addEventListener("mouseenter", (e) => {
    let left = e.clientX - e.target.getBoundingClientRect().left;
    let top = e.clientY - e.target.getBoundingClientRect().top;
    console.log(left, top);

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
});

btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
    console.log("leave")
});

