import React from 'react';
export default function Jobs() {
    return (
        <section className="row">
            <div className="column">
                <img src={require('../images/job-acoab.jpg')} alt="Acoab website developed for the Certisign"/>
                <img src={require('../images/job-ace.jpg')} alt="ACE website developed for the Certisign"/>
                <img src={require('../images/drawing-lion.jpg')}  alt="Free hand drawing made with colored pencils"/>
            </div>
            <div className="column">
                <img src={require('../images/job-smiles.jpg')}  alt="Smiles website"/>
                <img src={require('../images/drawing-flower.jpg')} alt="Free hand drawing made with colored pencils"/>
                <img src={require('../images/job-chatbot.jpg')}  alt="Smiles chatbot advertisement"/>
                <img src={require('../images/job-formainfoco.jpg')} alt="Cover of the magazine form in focus, academic work"/>
            </div>
            <div className="column">
                <img src={require('../images/job-caixa.jpg')}
                     alt="Caixa Econômica Federal website developed for the Capgemini"/>
                <img src={require('../images/drawing-mouse.jpg')} alt="Free hand drawing made with nankin"/>
                <img src={require('../images/job-cassandre.jpg')} alt="Digital illustrations"/>
                <img src={require('../images/job-cvc.jpg')} alt="CVC hotsite"/>
            </div>
            <div className="column">
                <img src={require('../images/job-mondial.jpg')} alt="Mondial advertisement"/>
                <img src={require('../images/job-caixa-pj.jpg')}
                     alt="Caixa Econômica Federal website developed for the Capgemini"/>
            </div>
        </section>)
}