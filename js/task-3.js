const userInput = document.getElementById('name-input');
const userSpan = document.getElementById('name-output');

const setUserName = () => {
  if (userInput.value.trim() !== "") {
    userSpan.textContent = userInput.value.trim();
  } else {
    userSpan.textContent = "Anonymous";
  }
};

userInput.addEventListener('input', setUserName);
