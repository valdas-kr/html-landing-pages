document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[type=text]');
  inputs.forEach(input => {
    input.value = '';
  })
})