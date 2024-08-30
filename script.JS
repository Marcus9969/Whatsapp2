document.getElementById('b1').addEventListener('mouseover', function(){
    this.classList.add('carregando')
});
document.getElementById('b1').addEventListener('mouseout', function(){
    this.classList.remove('carregando')
});