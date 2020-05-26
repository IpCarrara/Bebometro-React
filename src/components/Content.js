import React from 'react'

let Content = () => {
    return (
        <div>

            <div>
                    <div id="sobre" class="divmargin"></div>
                    <div class="container">
                        <h2 id="aboutTitulo">Sobre o Aplicativo</h2>
                        <p id="aboutDescricao">Bebometro é um aplicativo Android informativo voltado à saúde,
                            onde o usuário mede seu nível alcoólico e é informado
                            de seus efeitos.</p>
                    </div>	
                    <div class="container">
                        <div class="divCentral2">
                            <div class="row">
                            
                                <div class="col-sm">
                                    <div class="card cardsSize">
                                    <img src={require('./imagens/Screenshot1.png')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Escolha a bebida</h5>
                                        <p class="card-text">Clique na bebida desejada.</p>
                                    </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="card cardsSize">
                                    <img src={require('./imagens/Screenshot2.png')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Quantidade</h5>
                                        <p class="card-text">Insira quantos copos tomou.</p>
                                    </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="card cardsSize">
                                    <img src={require('./imagens/Screenshot3.png')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Resultado</h5>
                                        <p class="card-text">Diagnóstico do seu estado alcoólico.</p>
                                    </div>
                                    </div>
                                </div>	
                                
                            </div>
                        </div>
                    </div>
             </div>

        </div>
    )
}

export default Content