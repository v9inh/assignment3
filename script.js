// document.querySelector("#thongtincanhan").textContent = "";
document.querySelector("#submit-button").addEventListener("click", function () {
  const input = document.querySelector(".input").value;
  const email = "hhvinhvt@gmail.com";
  if (input == email) {
    document.querySelector("#thongtincanhan").style.display = "block";
    document.querySelector(".input-email").style.display = "none";
  } else {
  }
});
document.querySelector("#to-show1").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});

document.querySelector("#to-show2").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});
document.querySelector("#to-show3").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});
document.querySelector("#to-show4").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});
document.querySelector("#to-show5").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});
document.querySelector("#to-show6").addEventListener("click", function () {
  const textofbutton = this.textContent;
  // console.log(textofbutton);
  if (textofbutton == "VIEW MORE") {
    this.textContent = "VIEW LESS";
  } else {
    this.textContent = "VIEW MORE";
  }
});
