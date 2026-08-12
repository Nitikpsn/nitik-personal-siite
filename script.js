// Select the button and change its text when clicked
const button = document.querySelector('button');

button.addEventListener('click', () => {
  button.textContent = 'You clicked me!';
  alert('Hello world!');
});             