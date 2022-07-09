// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseFloat(product.querySelector('.quantity input').value)
  
  const subtotalValue= price*quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalValue
  
  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //console.log(singleProduct)
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsRows = document.querySelectorAll('.product')
  let subTotals = [];
  productsRows.forEach(row => {
    subTotals.push(updateSubtotal(row));
  });

  // ITERATION 3
  let totalValue = 0;
  subTotals.forEach(x => {
    totalValue += x
  });

  const total = document.querySelector('#total-value span');
  total.textContent = totalValue

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
