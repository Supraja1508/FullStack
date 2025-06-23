document.getElementById('myForm').addEventListener('submit', function(event) 
{
      event.preventDefault(); 

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const errorMsg = document.getElementById('error');

      if (email === '' || password === '') {
        errorMsg.textContent = 'All fields are required!';
      } 
      else {
        errorMsg.textContent = '';
        alert('Form submitted successfully!');
      }
    });