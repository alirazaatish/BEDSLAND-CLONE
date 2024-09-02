console.log("Hello!");

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener('click', ()=>{
    console.log("Click!");
    window.location.href = 'order-form.html';
    
});