const commands = {
  name: "Abdul Ali Khan",
  location: "Karachi, Pakistan",
  tech: "FastAPI, Django, Flask, Next.js, Flutter, Beego, Gin",
  projects: "<a href='projects.html'>Click here to view my Projects</a>",
  education:
    "<a href='education.html'>Click here to view the Education page</a>",
  interests: "Backend Development and Cyber Security",
  email: "k190128@nu.edu.pk",
};

const output = document.querySelector(".terminal-output");
const input = document.querySelector("#command-input");

function processCommand(inputValue) {
  inputValue = inputValue.toLowerCase().trim();

  if (inputValue === "help") {
    output.innerHTML += `<p>Available commands:</p><ul>`;
    for (const command in commands) {
      output.innerHTML += `<li>${command}</li>`;
    }
    output.innerHTML += `</ul>`;
  } else if (commands[inputValue]) {
    output.innerHTML += `<p>${commands[inputValue]}</p>`;
  } else {
    output.innerHTML += `<p>'${inputValue}' is not a recognized command. Type 'help' for a list of available commands.</p>`;
  }
}

input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    const inputValue = event.target.value;
    output.innerHTML += `<p class="text-green-400">$ ${inputValue}</p>`;
    processCommand(inputValue);
    event.target.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
