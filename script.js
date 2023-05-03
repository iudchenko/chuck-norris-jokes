const api = "https://api.chucknorris.io/jokes/random";
const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getJoke() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
      const response = JSON.parse(xhttp.response);
      // console.log(response.value);
      joke.textContent = response.value;
    }
  };
  xhttp.open("GET", api, true);
  xhttp.send();
}

jokeBtn.addEventListener("click", getJoke);
document.addEventListener("DOMContentLoaded", getJoke);
