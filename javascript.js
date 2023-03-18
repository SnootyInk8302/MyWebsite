const dark_mode_button = document.getElementById("dark_mode_button");

dark_mode_button.addEventListener("click", () => {
  if (document.body.classList.toggle("dark_mode")) {
    localStorage.setItem("theme", "true");
  } else {
    localStorage.setItem("theme", "false");
  }
});

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark_mode");
} else {
  document.body.classList.remove("dark_mode");
}

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


const container = document.getElementById('container');
const border = document.getElementById('border');
let hello = null;

border.addEventListener('click', function() {
  if (hello === null) {
    hello = document.createElement('div');
    hello.innerText = 'Hello';
    hello.id = 'hello';
    container.appendChild(hello);
  } else {
    container.removeChild(hello);
    hello = null;
  }
});



