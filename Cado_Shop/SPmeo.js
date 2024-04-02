'use strict';



/**
 * add event on element
 */

const BANNER1 = document.querySelector('.BANNER1')
const imgs = document.getElementsByTagName('img')

setInterval(() => {
  let width= imgs[0].offsetWidth
  listImage.style.transfrom = 'transltateX(${width'
}, 4000);