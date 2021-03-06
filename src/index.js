import './styles/main.scss';
import { ImageElement } from './containers/ImgElement';
import { registerImage, stats } from './utils/lazy';

function main() {
  let app = document.getElementById('app');
  const addImage = document.querySelector('#new-image');
  const removeImages = document.querySelector('#remove-images');

  addImage.addEventListener('click', () => {
    const newImage = ImageElement();
    app.appendChild(newImage);
    registerImage(newImage);
  });

  removeImages.addEventListener('click', () => {
    // [...app.childNodes].forEach((child) => child.remove());
    stats.loadedImages = 0;
    stats.totalImages = 0;
    app.remove();
    const main = document.querySelector('main');
    const newApp = document.createElement('div');
    newApp.id = 'app';
    main.appendChild(newApp);
    app = newApp;
  });
}

main();
