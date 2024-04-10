function isNotValidNumber(input) {
  let regex = /^[0-9]+$/;
  return !regex.test(input);
}

function addItemToList(item, amt) {
  let text = `${String(amt)} ${item}`;
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.textContent = text;
  ul.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let itemName = document.getElementById('item-name').value;
    let quantityEle = document.getElementById('quantity');
    let quantity = quantityEle.value;

    if (quantity === '') {
      quantity = 1;
      form.reset();
      addItemToList(itemName, quantity);
    } else if (quantity === '0') {
      alert('Quantity entered must be greater than 0.');
      quantityEle.value = '';
    } else if (isNotValidNumber(quantity)) {
      alert('Quantity entered must be a valid number greater than 0.');
      quantityEle.value = '';
    } else {
      quantity = +quantity;
      form.reset();
      addItemToList(itemName, quantity);
    }
  })
})