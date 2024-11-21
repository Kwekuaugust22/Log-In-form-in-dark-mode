
alert("hello, Welcome to my page!");
          
let isSignUp = true;

function toggleForm() {
  const formTtle = document
  .getElementById ('formTile');
  const emailGroup = document
  .getElementById ('emailGroup');
  const toggleLink = document
  .querySelector ('.toggle-Link');
  const formButton = document
  .querySelector ('form-button');

  if (isSignUp) {
    formTtle.textContent = 'Sign In';

    emailGroup.style.display = 'none';

    formButton.textContent = 'Singn In';

    toggleLink.textContent = "Don't have an account? Sign Up";
    isSignUp = false;

  } else {
    formTtle.textContent = 'Sign Up';

    emailGroup.style.display = 'block';
    
    formButton.textContent = 'Sign Up';

    toggleLink.textContent = "Don't have an account? Sign Up";
    isSignUp = true;

  }

  function handleSubmit() {
    const username = document
    .getElementById = 'username'.valueOf;
    const password = document
    .getElementById = 'password'.valueOf;
    const email = document
    .getElementById = 'email'.valueOf;
  }


}



