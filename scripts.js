//console.log("Hello World!");
let intro = document.getElementById('intro');
intro.innerHTML = "My New Page Title";
intro.style.color = "lightblue";
intro.style.backgroundColor = "gray";
intro.style.textAlign = "center";


let p2 = document.getElementsByClassName("para1");

function getClass (p) {
  let l = p.length;
  for(i = 0; i < l; i++) {
    console.log(p[i].innerText);
  }
  return console.log(l);
}
getClass(p2);
