console.log("Hello World!");
let intro = document.getElementById('intro');
intro.innerHTML = "My New Page Title";
intro.style.color = "lightblue";
intro.style.backgroundColor = "gray";
intro.style.textAlign = "center";


let para = document.getElementsByClassName("para1");

console.log(para);

let getClass = function(p) {
  let l = p.length;
  for(i = 0; i < l; i++) {
    return p[2];
  }
}
getClass(para);
