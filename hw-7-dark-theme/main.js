let _;
const theme = document.getElementById("theme");
theme.addEventListener("click", () => {_ = document.body.classList[0]; swapper((_ === "dark") ? "default" : (_ === "default") ? "dark" : null);})

const swapper = (param) => {document.body.className = param; theme.innerHTML = (param === "default") ? "Dark Theme" : "Default Theme"};