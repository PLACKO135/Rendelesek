let trelemek=document.querySelectorAll("tr");

function trszinvalt(){
    this.style.backgroundColor="aqua";
}

for (const i of trelemek) {
    if (!i.classList.contains("sor")) {
        i.addEventListener("click",trszinvalt);
    }
}
