var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  function mimo(){
      const memimo = confirm('Enviar mimo para Ana de R$ 15,00')
      if(memimo == true){
          alert('Você sera direcionado ao mercado pago')
          location='https://mpago.la/33zmawn'
      } else{
          alert(':-( Nossa princesa só queria um mimo')
      }
  }

  function insta(){
      location='https://instagram.com/linda.ht1?utm_medium=copy_link'
  }

  function telegram(){
      alert('Sem link')
  }

  function whast(){
    location='https://api.whatsapp.com/send?phone=5581983041033&text=QUERO+ADQUIRIR+O+CONTE%C3%9ADO%21'
}

function pacote(){
    const pack = confirm('Você sera direcionado ao WhastApp')
    if(pack == true){
        location='https://api.whatsapp.com/send?phone=5581983041033&text=QUERO+ADQUIRIR+O+CONTE%C3%9ADO%21'
    }
}

function chve(){
    const chave = prompt('Digite o neumero da chave')
    if(chave == 'anachave2525'){
        alert('Acesso permitido')
    }
    else{
        alert('Acesso negado!')
    }
}

function compraChave(){
    alert('indisponivel')
}

function irLoja(){
    location='https://lojapack.github.io/loja/'
}