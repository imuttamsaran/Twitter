function myFunction() {
    var element = document.getElementById("love");
    element.classList.toggle("lite");
  }
  function myFunction2() {
    var element = document.getElementById("love2");
    element.classList.toggle("lite");
  }
  function myFunction3() {
    var element = document.getElementById("love3");
    element.classList.toggle("lite");
  }
  function myFunction4() {
    var element = document.getElementById("love4");
    element.classList.toggle("lite");
  }
  function myFunction5() {
    var element = document.getElementById("love5");
    element.classList.toggle("lite");
  }
  function myFunction6() {
    var element = document.getElementById("love6");
    element.classList.toggle("lite");
  }
  function myFunction7() {
    var element = document.getElementById("love7");
    element.classList.toggle("lite");
  }
  function myFunction8() {
    var element = document.getElementById("love8");
    element.classList.toggle("lite");
  }
  function myFunc() {
    var element = document.getElementById("nFollow");
    element.style.border = "2px solid #ffffff";
    element.style.backgroundColor = "transparent";
    element.style.color = "#ffffff";
    element.innerHTML = "Following";
  }
  function myFunc1() {
    var element = document.getElementById("nFollow1");
    element.style.border = "2px solid #ffffff";
    element.style.backgroundColor = "transparent";
    element.style.color = "#ffffff";
    element.innerHTML = "Following";
  }
  function myFunc2() {
    var element = document.getElementById("nFollow2");
    element.style.border = "2px solid #ffffff";
    element.style.backgroundColor = "transparent";
    element.style.color = "#ffffff";
    element.innerHTML = "Following";
  }
  function openNav() {
    document.getElementById("myNav").style.width = "80%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var btnContainer = document.getElementById("myDIV");
  var btns = btnContainer.getElementsByClassName("link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  