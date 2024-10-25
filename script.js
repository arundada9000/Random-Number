document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".headings");
  const sections = document.querySelectorAll(".section");

  headings.forEach((heading) => {
    heading.style.color = randomColor();
  });

  sections.forEach((section) => {
    section.style.backgroundColor = randomColor();
  });

  document.body.style.backgroundColor = randomColor();
});
let colors = "0123456789abcdefg";

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colors.length);
    color += colors[random];
  }
  return color;
}

const generated = document.querySelectorAll(".generated");
generated.forEach((element) => {
  element.addEventListener("click", () => {
    navigator.clipboard.writeText(element.textContent);
    getNotified();
  });
});

// Notification
let notification = document.querySelector(".notification");
function getNotified() {
  if (notification.classList.contains("hidden")) {
    notification.classList.toggle("hidden");
  }
  notification.classList.toggle("active");
  const timeout = setTimeout(() => {
    if (
      notification.classList.contains("active") &&
      !notification.classList.contains("hidden")
    ) {
      notification.classList.toggle("active");
      notification.classList.toggle("hidden");
    } else {
      window.clearTimeout(timeout);
    }
  }, 3000);
}
function closeNote() {
  notification.classList.toggle("active");
  notification.classList.toggle("hidden");
}
function diceRoll() {
  let a = 1,
    b = 7;
  let random = Math.floor(Math.random() * (b - a) + a);
  document.getElementById("dice-result").textContent = random;
}

function randomNumber(a, b) {
  let random = Math.floor(Math.random() * (b - a) + a);
  document.getElementById("randomNumber").textContent = random;
}

function randomInRange() {
  let a = document.getElementById("min").value;
  a = parseInt(a);
  if (isNaN(a) || a === "") {
    a = 0;
  }
  let b = document.getElementById("max").value;
  b = parseInt(b);
  if (isNaN(b) || b === "") {
    b = 1000;
  }
  let random = Math.floor(Math.random() * (b - a) + a);
  document.getElementById("range").textContent = random;
}

function randomAlpha(a = 0, b = 26) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random = Math.floor(Math.random() * (b - a) + a);
  document.getElementById("alphabet").textContent = alphabet[random];
}

function multipleRandoms() {
  let a = document.getElementById("min1").value;
  a = parseInt(a);
  if (isNaN(a) || a === "") {
    a = 0;
  }
  let b = document.getElementById("max1").value;
  b = parseInt(b);
  if (isNaN(b) || b === "") {
    b = 1000;
  }
  let count = document.getElementById("count").value;
  count = parseInt(count);
  if (isNaN(count) || count === "") {
    count = 10;
  }
  let text = "";
  while (count > 0) {
    let random = Math.floor(Math.random() * (b - a) + a);
    text += random;
    if (count != 1) text += ", ";
    count--;
  }
  document.getElementById("range1").textContent = text;
}

function coinFlipper() {
  let random = Math.random();

  if (random < 0.5) {
    random = "Heads";
  } else {
    random = "Tails";
  }
  document.getElementById("flip-result").textContent = random;
}

let letters = [
  (uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  (lowercase = "abcdefghijklmnopqrstuvwxyz"),
  (numbers = "0123456789"),
  (symbols = "!@#$%&*?"),
];
let l = document.getElementById("password-length");
const passwordP = document.getElementById("password");
const passwordCopyBtn = document.getElementById("password-copy-btn");

passwordCopyBtn.addEventListener("click", () => {
  if (passwordP.textContent != "") {
    navigator.clipboard.writeText(passwordP.textContent);
    getNotified();
  }
});

function generatePassword() {
  len = l.value;
  if (len == "") {
    len = 12;
  }
  len = parseInt(len);
  if (isNaN(len)) {
    alert("Please enter a number");
    return;
  }
  let password = createPassword("");
  passwordP.textContent = password;
  passwordCopyBtn.style.display = "block";
}

function createPassword(password) {
  let l = 2,
    random1,
    random2;
  do {
    random1 = Math.floor(Math.random() * l);
    random2 = Math.floor(Math.random() * letters[random1].length);
    password += letters[random1][random2];
    l = 4;
  } while (password.length < len);
  return password;
}

let otp = "";
let otpInput = document.getElementById("otp-length");
otpInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    generateOtp();
  }
});
function generateOtp() {
  let len = document.getElementById("otp-length").value;
  if (len == "") {
    len = 6;
  }
  len = parseInt(len);
  if (isNaN(len)) {
    alert("Please enter a number ");
    return;
  }
  otp = "";
  let otpDiv = document.getElementById("otp");
  otpDiv.innerHTML = "";
  while (otp.length < len) {
    let random = Math.floor(Math.random() * 10);
    otp += random;

    let el = document.createElement("div");
    el.textContent = random;
    el.className = "otp-num";
    otpDiv.appendChild(el);
  }
  document.getElementById("otp-copy-btn").style.display = "block";
}
document.getElementById("otp-copy-btn").addEventListener("click", () => {
  if (otp != "") {
    navigator.clipboard.writeText(otp);
    getNotified();
  }
});
