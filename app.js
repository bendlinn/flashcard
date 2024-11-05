function criaCartao(categoria, pergunta, resposta) { 
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML =
    <div class="cartao__conteudo">
                    <h3>Matematica</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p> 2x+15=25+4x-4x, qual o valor de x?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>x=5.</p>
                    </div>
                </div>

                let container = document.getElementById('container')
                container.appendChild(cartao)
}