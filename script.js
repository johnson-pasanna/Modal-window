'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
  });

// react to a click on each of these 3 buttons now we have to attach the event handler to each of these 3 buttons now. we create a loop which loops over the 3 buttons and added event listencer hence when the user click on the button this triggers the event listerner function
