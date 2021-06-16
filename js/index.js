// // ITERATION 1

// function updateSubtotal(product) {
//   console.log('Calculating subtotal, yey!');
//   const price = product.querySelector('.price span').innerText;
//   const quantity = product.querySelector('.quantity input').value;
//   const subtotal = price * quantity;
//   product.querySelector('.subtotal span').innerText = subtotal;
//   return subtotal;
//   //... your code goes here
// }

// function calculateAll() {
//   let total = 0;
//   const products = document.getElementsByClassName('product');

//   for (let i = 0; i < products.length; i++) {
//     total += updateSubtotal(products[i]);
//   }
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   //const singleProduct = document.querySelector('.product');
//   //updateSubtotal(singleProduct);
//   // end of test
//   // ITERATION 2
//   // document.querySelectorAll('.product').forEach(product =>{
//   //   updateSubtotal(product);
//   // });
//   // ITERATION 3
//   //... your code goes here
// }

// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price, quantity);

  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

document.querySelector('#calculate').onclick = function (event) {
  let rows = document.querySelectorAll('.product');

  let sum = 0;
  for (let row of rows) {
    sum += updateSubtotal(row);
    console.log(sum);
  }
  document.querySelector('#total-value span').innerText = sum;
};

function removeStuff() {
  let allButton = document.querySelectorAll('.btn-remove');
  for (let button of allButton) {
    button.onclick = function (e) {
      console.log(button);

      this.parentNode.parentNode.remove(); //e.target,button
    };
  }
}

// document.querySelectorAll('.btn-remove').onclick = function (event) {
//   console.log('Tiger');
//   document.querySelector('.product').remove();
// };
