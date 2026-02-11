const yesBtn = document.getElementById('yesBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const response = document.getElementById('response');
const loveNote = document.getElementById('loveNote');
const closeNote = document.getElementById('closeNote');

const yesReplies = [
  'Best decision ever 💞',
  'I knew your heart had amazing taste ✨',
  'Officially the cutest couple on the web 🌹'
];

yesBtn.addEventListener('click', () => {
  const reply = yesReplies[Math.floor(Math.random() * yesReplies.length)];
  response.textContent = reply;
});

surpriseBtn.addEventListener('click', () => {
  loveNote.showModal();
});

closeNote.addEventListener('click', () => {
  loveNote.close();
});
