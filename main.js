// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
let heartsNodeArray = [...document.getElementsByClassName("like-glyph")];
let modal = document.getElementById("modal")

let callServerAndCatch = (event) => {
 mimicServerCall()
 .then(() => handleResponse(event ))
 .catch(error => errorHandle(error))
}

 let errorHandle = (errorMessage) => {
  modal.classList.remove('hidden');
  let p = document.createElement('p');
  p.innerText = errorMessage;
  modal.appendChild(p);
  setTimeout(()=> {modal.classList.add('hidden')}, 3000);
}

 heartsNodeArray.map( heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})
  
  let handleResponse = (event) => {
    if(event.target.textContent === EMPTY_HEART){
 event.target.classList.add('activated-heart')
 event.target.textContent = FULL_HEART}
 else  {
  event.target.classList.add('activated-heart')
  event.target.textContent = EMPTY_HEART
  }
 }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)

///// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red

///// When a user clicks on a full heart:
// Change the heart back to an empty heart
// Remove the .activated-heart class

// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.

// Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.