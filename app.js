// const kelime = prompt("kelime giriniz")

// let liste= kelime.split(" ")
// let bigs = "";
// let sayi = 0;
// for (let i= 0;i < liste.length;i++){
//   let oku = liste[i]
//   for (let j =0;  j < oku.length;j++ ){
//     if (oku.matchAll("oku[j]").length > sayi )
//   }
//   if ( liste[i].length > bigs.length){
//     bigs = liste[i]
//    } 
// }
// console.log(bigs)

let a ="selem"
let b = a.split()
let c = b.push
console.log(c)

 var btn = document.getElementById("btnHesap");
 btn.onclick = function () {
   let i, j;
   let toplam = 0;
   let sayi = Number(document.getElementById("txtSayi").value);

   var btn1 = document.getElementById("btnHesap1");
    btn1.onclick = function () {
document.getElementById("txtSayi").value = 0;
document.getElementById("lblSonuc").innerHTML="Sonuç:";
    }

   for (i = 1; i < sayi; i++) {
     if (sayi % i == 0) {
       toplam += i;
     }
   }
   if (sayi == toplam) {
    document
       .getElementById("lblSonuc")
       .appendChild(document.createTextNode(`${sayi} Sayısı Mükemmel Sayıdır`));
   }   else if (Number(sayi) !== Number(sayi)){
    document
      .getElementById("lblSonuc")
      .appendChild(document.createTextNode(`${sayi} Sayı Değildir Değiştir`));
   } 
   else {
     document
       .getElementById("lblSonuc")
       .appendChild(document.createTextNode(`${sayi} Sayısı Mükemmel Sayı Değildir.`));
   }
 };

//  let paragraf = document.getElementById("lblSonuc");
//  let text = document.createTextNode()

 let dizi = [
   "#D24D57",
   "#e74c3c",
   "#f1c40f",
   "#2c3e50",
   "#8e44ad",
   "#bdc3c7",
   "#1abc9c",
   "#3498db",
   "#95a5a6",
 ];

 let renk = document.getElementById("renk")

 renk.onclick=function(){
  let rasgele =Math.round(Math.random() * dizi.length);
  document.body.style.background=dizi[rasgele];
 }

 const circle = document.querySelectorAll('.circle');
 let activeLight = 0;
 setInterval(changeLight,1000);
 function changeLight(){
  circle[activeLight].className = 'circle';
  activeLight++;
  if(activeLight > 2){
    activeLight = 0;
  }
  const currentLight = circle[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
 }


//  ***************YANDAN AÇILAN*******************

const list = document.querySelector(".rect");
const clos = document.querySelector(".round_content");

clos.addEventListener("click", () => {
  clos.classList.toggle("active");
  list.classList.toggle("active");
});



// ************ALTTAN AÇILAN MENU*****************

 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

      // Close the dropdown if the user clicks outside of it
      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };

// *****************AŞAĞI İNMELİ********************

      const liste = document.querySelector(".ic");
      const close = document.querySelector(".bas1");

      close.addEventListener("click", () => {
        close.classList.toggle("active");
        liste.classList.toggle("active");
      });