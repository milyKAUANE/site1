document.addEventListener("DOMConcertLoaded", funcion (){
    const aumentaFonteBotao = document.getElementByld("aumentar-fonte");

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao,addEventListener("click", function(){
        tamanhoAtualFonte += 0.1;
        documento.body.style.fontSize = `${tamanhoAtualFonte}`;

});
});