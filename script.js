const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

ham.addEventListener("click",() => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>{
    n.addEventListener("click",() => {
        ham.classList.remove("active");
        navMenu.classList.remove("active");
    })
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((element)=> observer.observe(element));


GitHubCalendar(".calendar", "amanvyas1");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "amanvyas1", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "amanvyas1", {
       proxy (amanvyas1) {
         return fetch(`https://your-proxy.com/github?user=${amanvyas1}`)
       }
    }).then(r => r.text())

let btnres = document.querySelector("#btn-resume");
btnres.addEventListener("click", () => {
    window.location.href = "resume/Aman_Vyas_Resume.pdf"
})