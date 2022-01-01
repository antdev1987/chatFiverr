// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var buttonClose = document.getElementsByClassName('optionClose')[0];

buttonClose.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// ////////////////////////////////////

const msg = [
  { from: 'other', txt: 'Hi, hi...' },
  { from: 'other', txt: 'Here is another link if you need it :)' },
  { from: 'you', txt: 'Sure, Thank you' },
  { time: '2:15 PM' },
  { from: 'other', txt: 'BWT, How are you' },
  { from: 'you', txt: "I'm well!" },
  { time: '8.43 PM' },
  { from: 'other', txt: 'hahahahhahahaha' },
];

for (const item of msg) {
  
}