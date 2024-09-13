/*let table = document.querySelectorAll("table tbody tr td");
let p = document.querySelector("p")

let btn =document.getElementById("btn");
*/
const toggleButton = document.getElementById('btn');
const themeStylesheet = document.getElementById('styling');

toggleButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'light.css') {
        themeStylesheet.setAttribute('href', 'dark.css');
        toggleButton.textContent = 'Light';
    } else {
        themeStylesheet.setAttribute('href', 'light.css');
        toggleButton.textContent = 'dark';
    }
});
/*let img=document.getElementById("up");
img.addEventListener("touchstart", function () {
  // Tab to edit
  console.log(img)
   img.style.setProperty("width","90%","important");
}
  
);*/


/*let h =document.querySelectorAll("h1");
window.onload= function (arg) {
  h.style.cssText="margin-left:50px;"
  // Tab to edit
}

let img = document.getElementById("up");
img.addEventListener("click", function () {
    console.log(img); // تأكد من أن الدالة تُستدعى
    img.style.setProperty("width", "90%", "important"); // تأكد من إغلاق القوس هنا
});*/
  var i=0
  var btn=
  document.querySelector(".down");
  btn.onclick=()=>{
    if (i==0){
      i=1;
      var elem=document.getElementById("progress");
      var width =7;
      var id=setInterval(frame,50);
      function frame(){
        if (width>=100){
          clearInterval(id);
          i=0;
        }
        else {
          width++;
          elem.style.width= width + "%";
          elem.innerHTML=width+"%";
        }
      }
    }
  }

