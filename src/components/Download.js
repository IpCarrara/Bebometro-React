import React from 'react'

let Download = () => {
    return (
        <div>

            <div id="download"></div>
            <div id="divDownload">
                <div class="container centralDownload">
                    <div class="divCentral">
                        <div class="row col-sm">
                            <a href="https://docs.google.com/uc?export=download&id=1cjhY06CiI3AGaadI9Cy02_P_G5G8XgIT"><img class="downloadButton" src={require('./imagens/botaodownload2.png')}/></a>
                        </div>
                        <p class="textoDownload">Ou</p>
                        <div class="row col-sm">
                            <img id="qrCode" src={require('./imagens/BebometroQr2.png')}/>
                        </div>
                        <p class="textoDownload2">Escaneie o QR code com o smartphone</p>
                    </div>
                </div>
                    
            </div>

        </div>
    )
}

export default Download