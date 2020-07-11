const myForm = document.querySelector('.add-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const memberList = document.querySelector('#member');

myForm.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    memberList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}
