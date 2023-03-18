const dark_mode_button = document.getElementById("dark_mode_button")
dark_mode_button.addEventListener("click", () =>{
    document.body.classList.toggle("dark_mode")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));