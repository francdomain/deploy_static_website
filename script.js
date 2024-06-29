document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickMeButton');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
    message.textContent = 'Hello, HNG Internship!';
  });
});
