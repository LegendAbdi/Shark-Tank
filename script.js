document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const year = document.getElementById('year').value;
        const major = document.getElementById('major').value;
        
        // Validate input values
        if (firstName === '' || lastName === '' || year === '' || major === '') {
          alert('Please fill in all fields.');
          return; // Stop further execution
        }
        
        // If all fields are filled, show an alert with the entered data
        const userData = `First Name: ${firstName}\nLast Name: ${lastName}\nYear: ${year}\nMajor: ${major}`;
        alert(`Entered Data:\n${userData}`);
        
        // You can perform other actions like sending this data to a server, etc.
      });
      