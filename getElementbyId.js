const greet = document.querySelector('.hello'),
      input = document.querySelector('input'),
      btn = document.querySelector('button');


console.log(greet);
console.log(input);
console.log(btn);


btn.addEventListener('click', (e) => {
    e.preventDefault();

    greet.innerHTML =
        `<h3>Привет, ${input.value}!<h3/>`
    
    
})