import React from 'react';
import { Jumbotron } from 'reactstrap';

let HeaderJumbotron = () => {
    return (
        <div>

            <Jumbotron>
                    <div id="inicio"></div>
                    <div className="jumbotronConteiner"></div>
                    <div id="textoJumbotron">
                        <h1 className="negrito tituloJumbotron">Bebometro</h1>
                        <p className="lead subJumbText">Beba com responsabilidade!</p>
                    </div>
                    <hr className="my-4"/>
            </Jumbotron>

        </div>
    )
}


export default HeaderJumbotron