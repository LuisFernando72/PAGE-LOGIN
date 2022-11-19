const pass = document.querySelector("#cont");
const eye_show = document.querySelector("#eye-show");
const eye_hide = document.querySelector("#eye-hide");
eye_show.onclick = () => {
  if (pass.type === "password") {
    pass.type = "text";
    eye_show.classList.replace("show", "hide");
    eye_hide.classList.replace("hide", "show");
  }
}
  eye_hide.onclick = () => {
  if (pass.type === "text") {
    pass.type = "password";
    eye_show.classList.replace("hide", "show");
    eye_hide.classList.replace("show", "hide");
  }
}