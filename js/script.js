function alterarSaturacao() {
    document.body.style.filter = 'saturate(2)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 5000);
  }

function aumentarFonte() {
    let corpo = document.body;
    let tamanhoFonteAtual = window.getComputedStyle(corpo).fontSize;
    let tamanhoFonteNumerico = parseInt(tamanhoFonteAtual);
    let novoTamanhoFonte = tamanhoFonteNumerico + 2;
    corpo.style.fontSize = novoTamanhoFonte + "px";
  }

function diminuirFonte() {
    let corpo = document.body;
    let tamanhoFonteAtual = window.getComputedStyle(corpo).fontSize;
    let tamanhoFonteNumerico = parseInt(tamanhoFonteAtual);
    let novoTamanhoFonte = tamanhoFonteNumerico - 2;
    corpo.style.fontSize = novoTamanhoFonte + "px";
  }