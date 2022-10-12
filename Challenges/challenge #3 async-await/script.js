const container = document.querySelector('.container');
const imageContainer = document.querySelector('.images');

let image;
/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image 
(use document.createElement('img')) 
and sets the .src attribute to the provided image path. When the image is done loading, 
append it to the DOM element with the 'images' class, 
and resolve the promise. 
The fulfilled value should be the image element itself. 
In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path.
 Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    image = document.createElement('img')
    image.src = imgPath
    image.addEventListener('load', () => {
      imageContainer.append(image)
      resolve(image);
    })
    image.addEventListener('error', () => {
      reject(new Error('Image not found'));
    })

  })
}


const wait = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  })
}
wait(1).then(() => {
  createImage('img/img-1.jpg').then((img) => console.log(img)).catch((error) => console.error(error));
  return wait(2)
}).then(() => {
  image.style.display = 'none'
  createImage('img/img-2.jpg').then((img) => console.log(img)).catch((error) => console.error(error));
  return wait(2)
}).then(() => {
  image.style.display = 'none'

})

const loadNPause = async function () {
  try {
    const image1 = await createImage('img/img-1.jpg');
    console.log(image1);
    await wait(2);
    image.style.display = 'none'
    const image2 = await createImage('img/img-2.jpg')
    console.log(image2);
    await wait(2);
    image.style.display = 'none'
  } catch (err) {
    console.error(err)
  }
}
loadNPause();


// part 2

const loadAll = async function (imgPath) {
  try {
    const images = imgPath.map(async (path) => await createImage(path))
    console.log(images)

    const imgs = await Promise.all(images);
    console.log(imgs)
  } catch (error) {
    console.error(error);
  }

}
console.log('first')
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
console.log('second')

import {rand} from '.math.js'
import {showDice} from '.dom.js'
const dice = rend(1,6,3);
showDice(dice)