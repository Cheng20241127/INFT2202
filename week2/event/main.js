
const images = [
  {file:'pic1.jpg', alt:'Human eye close up'}, 
  {file:'pic2.jpg', alt:'Rock that resembles a wave'},
  {file:'pic3.jpg', alt:'Purple and white flowers'},
  {file:'pic4.jpg', alt:'Hieroglyphics of pharaoh'},
  {file:'pic5.jpg', alt:'Moth on a leaf'}]

function setup(){
  const displayedImage = document.querySelector('.displayed-img');
  const thumbBar = document.querySelector('.thumb-bar').querySelector('ul');
  
  const btn = document.querySelector('button');
  const overlay = document.querySelector('.overlay');

  for (const image of images) {
    const newItem = document.createElement('li');
    const newImage = document.createElement('input');
    newImage.setAttribute('type', 'image');
    newImage.setAttribute('src', `images/${image.file}`);
    newImage.setAttribute('alt', `images/${image.alt}`);
    newItem.appendChild(newImage);
    thumbBar.appendChild(newItem);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt =e.target.alt;
    }); 
  }

  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
  });
}

function bodyLoad(event){
  console.log('bodyLoad');
  setup();
}

document.addEventListener('DOMContentLoaded', (evt)=>{
  console.log('DOMContentLoaded');
});