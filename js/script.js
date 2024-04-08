'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('button');
  const openBtn = document.querySelector('.open');

  function createCart() {
    const cart = document.createElement('div');
    const field = document.createElement('div');
    const heading = document.createElement('h2');
    const closeBtn = document.createElement('button');

      cart.classList.add('cart');
      field.classList.add('cart-field');
      closeBtn.classList.add('close');
    
        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';
    
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
    
    }

  createCart();
  
    const field = document.querySelector('.cart-field');
    const cart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.close');

  function openCart() {
    cart.style.display = 'block';
  }

  function closeCart() {
    cart.style.display = 'none';
  }

  openBtn.addEventListener("click", openCart);

  closeBtn.addEventListener("click", closeCart);

  // for (let i = 0; i < buttons.length; i += 1) {
  //   buttons[i].addEventListener('click', function () {
  //     let item = products[i].cloneNode(true);
  //     let btn = item.querySelector('button');

  //     btn.remove();

  //     field.appendChild(item);
  //     products[i].remove();
  //   })
  // }


  buttons.forEach((item, i) => {
        item.addEventListener("click", () => {
          let item = products[i].cloneNode(true);
          let btn = item.querySelector("button");

          btn.remove();

          field.appendChild(item);
          products[i].remove();
        });
      })
})