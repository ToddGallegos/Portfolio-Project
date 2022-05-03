const image1 = document.getElementById('screenshot1');
const image2 = document.getElementById('screenshot2');
const image3 = document.getElementById('screenshot3');
const proj1 = document.getElementById('proj1');
const proj2 = document.getElementById('proj2');
const proj3 = document.getElementById('proj3');

proj1.onclick = function() {
  if (image1.style.display == "none" || image1.style.display == '') {
    image1.style.display = "block"
  } else {
    image1.style.display = "none"
  }
}

proj2.onclick = function() {
  if (image2.style.display == "none" || image2.style.display == '') {
    image2.style.display = "block"
  } else {
    image2.style.display = "none"
  }
}
proj3.onclick = function() {
  if (image3.style.display == "none" || image3.style.display == '') {
    image3.style.display = "block"
  } else {
    image3.style.display = "none"
  }
}
