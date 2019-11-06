var auto = document.querySelector('#rijden');
console.log(auto);

function rijden() {
  auto.classList.add('rijden');
//  window.alert("het werkt");
}

auto.addEventListener("click", rijden);


var verstuur = document.querySelector('form > input');

function thanks() {
    verstuur.style.displayBlock;
    window.alert("het werkt");
}

verstuur.addEventListener("click", thanks);
