imagenZoom = document.getElementById("imagenZoom");
const tamañoImagen = document.getElementById("imagenEjemplo").clientWidth;
imagenZoom.addEventListener("wheel", (event) => {
  const delta = Math.sign(event.deltaY);
  if (delta > 0) {
    zoomin();
  } else {
    zoomout();
  }
});
const zoomin = () => {
  var GFG = document.getElementById("imagenEjemplo");
  var currWidth = GFG.clientWidth;
  GFG.style.width = currWidth + 50 + "px";
};
const zoomout = () => {
  var GFG = document.getElementById("imagenEjemplo");
  var currWidth = GFG.clientWidth;
  if (currWidth - 50 > tamañoImagen) GFG.style.width = currWidth - 50 + "px";
};
