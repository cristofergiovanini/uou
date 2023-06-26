window.addEventListener('DOMContentLoaded', (event) => {
  let greyBtn = document.getElementById('branca');
  let redBtn = document.getElementById('vermelha');
  let greenBtn = document.getElementById('cinza');
  let bike = document.getElementById('bike');

  greyBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('Imagem/motobrancaP.png')";
  });

  redBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('Imagem/motovermelha.png')";
  });

  greenBtn.addEventListener('click', function () {
    bike.style.backgroundImage = "url('Imagem/motocinzaP.png')";
  });






});
  

