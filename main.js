
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger i');
const navber = document.querySelector('.navbar')

const navberLink = document.querySelectorAll('nav a');

navberLink.onclick = function (){
    navberLink.classList.toggle('activeLink')
}


burger.onclick = function(){
   navber.classList.toggle('active')
   burgerIcon.classList.toggle('fa-xmark')
}


window.onscroll = ()=>{
    navber.classList.remove('active')
    burgerIcon.classList.remove('fa-xmark')

}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList;
    }
  });
});

const hidenEliments =document.querySelectorAll('skill-card');
hidenEliments.forEach((el) => observer.observe(el));


// qoralka kore

var textPhrases = [
    "Program analyst",
    "Programmer",
    "System Administrator"
  ];
  
  var typingText = document.getElementById("typingText");
  var currentPhraseIndex = 0;
  
  function updateTypingText() {
    typingText.textContent = textPhrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % textPhrases.length;
  }
  
  setInterval(updateTypingText, 3000);




  

  window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('skills');
                document.querySelector('skills*=' + id + ' ]').classList.add('active');
            });

        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};


















  //                 //

  // Define an array for each category of quotes
const motivationalQuotes = [
  "252-613187029",
  // "The only way to do great work is to love what you do. —Steve Jobs",
  // ... (more motivational quotes)
];

const sportsQuotes = [
  "abshiro@cu.edu.so"
  // ... (more sports quotes)
];

const medicalQuotes = [
"ab-atoo13"
  // ... (more medical quotes)
];

const businessQuotes = [
 "LIONEL ANDRES MESSI"
  // ... (more business quotes)
];

// Function to generate a random quote from a given category
function generateRandomQuote(category) {
  const quotes = {
      'motivational': motivationalQuotes,
      'sports': sportsQuotes,
      'medical': medicalQuotes,
      'business': businessQuotes,
  }[category];

  if (!quotes) return "Invalid category";

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Event listeners for category buttons
document.getElementById('motivational-button').addEventListener('click', () => {
  const quote = generateRandomQuote('motivational');
  document.getElementById('quote-text').textContent = quote;
});

document.getElementById('sports-button').addEventListener('click', () => {
  const quote = generateRandomQuote('sports');
  document.getElementById('quote-text').textContent = quote;
});

document.getElementById('medical-button').addEventListener('click', () => {
  const quote = generateRandomQuote('medical');
  document.getElementById('quote-text').textContent = quote;
});

document.getElementById('business-button').addEventListener('click', () => {
  const quote = generateRandomQuote('business');
  document.getElementById('quote-text').textContent = quote;
});

  