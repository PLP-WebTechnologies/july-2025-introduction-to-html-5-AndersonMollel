const counterSpan = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
let count = 0;

// Event handler to increase the counter when button is clicked
incrementBtn.addEventListener('click', () => {
  count++;
  counterSpan.textContent = count;
});

const colorPicker = document.getElementById('colorPicker');
const colorText = document.getElementById('colorText');

// Event handler to change text color when user selects a color
colorPicker.addEventListener('input', () => {
  colorText.style.color = colorPicker.value;
});


const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting automatically

  // field
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let errors = [];
  if (name === '') {
    errors.push('Name is required.');
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    errors.push('Email is required.');
  } else if (!emailPattern.test(email)) {
    errors.push('Email format is invalid.');
  }

  // Message validation
  if (message === '') {
    errors.push('Message cannot be empty.');
  }

  // Display feedback
  if (errors.length > 0) {
    formFeedback.style.color = 'red';
    formFeedback.innerHTML = errors.join('<br>');
  } else {
    formFeedback.style.color = 'green';
    formFeedback.textContent = 'Form submitted successfully!';
    contactForm.reset(); // Clear form fields
  }
});
