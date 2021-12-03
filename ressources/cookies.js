const cookieContainer = document.querySelector(".cookiescontainer");
const cookieBtn = document.querySelector(".cookiesbtnaccept");
const cookieBtnRefuse = document.querySelector(".cookiesbtnrefuse");

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("activeBnr");
    localStorage.setItem("cookieBanner", "accepted");
});

cookieBtnRefuse.addEventListener("click", () => {
    cookieContainer.classList.remove("activeBnr");
    localStorage.setItem("cookieBanner", "refused");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBanner")) {
        cookieContainer.classList.add("activeBnr");
    }
}, 2000);

