(function() {
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const articles = document.querySelectorAll("article");
console.log(articles);
for (let i = 0; i < articles.length; i++) {
  //console.log(articles[i]['id']);
  const span = document.querySelector(
    `[id="${articles[i]["id"]}"] li span.like-glyph`
  );
  span.setAttribute("data-id", articles[i]["id"]);
  span.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (span.innerHTML === EMPTY_HEART){
          span.setAttribute("class","activated-heart");
          span.innerHTML = FULL_HEART;
        } else {
          span.removeAttribute("class");
          span.innerHTML = EMPTY_HEART;
        }
      })
      .catch((e) => {
        modal.classList.remove("hidden");
        modalMessage.innerHTML = e;
        setTimeout(() => {
          modal.className = "hidden";
        },5000)
      });
  });
}
})();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
