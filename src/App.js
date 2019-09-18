import React from 'react';
import './style/index.scss';
import { ReactComponent as Linkedin } from './images/linkedin-in-brands.svg';
import { ReactComponent as Github } from './images/github-alt-brands.svg';
import { ReactComponent as Email } from './images/envelope-solid.svg';

function App() {
  return (
    <div className="App">
      <header className="background--img1">

        <div className="caption">
          <h1 className="cont">&lt;diana&gt; <span>Frontend Developer</span> &lt;/dias&gt;</h1>
        </div>

        <aside className="social">


          <a href="https://www.linkedin.com/in/diasdiana/">
            <Linkedin/>
          </a>
          <a href="https://github.com/dianadiasds">
            <Github/>
          </a>
          <a href="mailto:dianadiasds@gmail.com">
            <Email/>
            </a>
        </aside>

      </header>
      <section className="textbox">


        <p>
          Hello. My name is Diana. I am from Brazil and live in Eindhoven in the Netherlands. It's been more than 10
          years since I graduated from Digital Design. At the beginning of my career, I worked as a
          designer doing creations including for print media. Then I turned my focus to creating online, websites,
          emails
          and apps.
        </p>

        <p>
          Over time I have been improving my technical skills to work with web development. I had the opportunity to
          develop the frontend of numerous portals and e-commerces and work in agile development teams. Without
          forgetting
          my creative side, I also studied user interface and user experience.
        </p>

        <p>
          I learned a lot about site optimization for search and CMS content management in practice. In 2018 I completed
          my MBA in Digital Marketing, something that greatly enriched my vision of business as a whole. I'm a fan of
          old
          video games, and freehand drawing is my favourite hobby.
        </p>


      </section>

      <section className="background--gradient">
        <img src={require('./images/html5-brands.svg')} className="technologies" alt="HTML 5" title="HTML 5"/>
          <img src={require('./images/js-brands.svg')} className="technologies" alt="Java Scrip" title="Java Script"/>
            <img src={require('./images/css3-brands.svg')} className="technologies" alt="CSS 3" title=" CSS 3"/>
              <img src={require('./images/adobe-brands.svg')} className="technologies" alt="Adobe Suit" title="Adobe Suit"/>
                <img src={require('./images/react-brands.svg')} className="technologies" alt="React" title="React"/>
        <img src={require('./images/node-brands.svg')} className="technologies" alt="Node" title="Node"/>
        <img src={require('./images/docker-brands.svg')} className="technologies" alt="Docker" title="Docker"/>
        <img src={require('./images/sass-brands.svg')} className="technologies" alt="Sass" title="Sass"/>
                  <img src={require('./images/liferay-brands.svg')} className="technologies" alt="Liferay" title="Liferay"/>
      </section>

      <section className="brands">

        <img src={require('./images/brand-certisign.png')}  alt="Logotype of the company Certisign"/>
          <img src={require('./images/brand-smiles.png')} alt="Logotype of the company Smiles"/>
            <img src={require('./images/brand-capgemini.png')}  alt="Logotype of the company Capgemini"/>
              <img src={require('./images/brand-catho.png')} alt="Logotype of the company Catho"/>
                <img src={require('./images/brand-cnt.png')} alt="Logotype of the company CNT"/>
                  <img src={require('./images/brand-cvc.png')} alt="Logotype of the company CVC"/>
                    <img src={require('./images/brand-dpi.png')} alt="Logotype of the company DPI"/>
                      <img src={require('./images/brand-giftshop.png')} alt="Logotype of the company Gift Shop"/>
                        <img src={require('./images/brand-creative.png')} alt="Logotype of the company Creative Design"/>

      </section>

      <section className="row">

        <div className="column">
          <img src={require('./images/job-acoab.jpg')} alt="Acoab website developed for the Certisign"/>
            <img src={require('./images/job-ace.jpg')} alt="ACE website developed for the Certisign"/>
              <img src={require('./images/drawing-lion.jpg')}  alt="Free hand drawing made with colored pencils"/>
        </div>

        <div className="column">
          <img src={require('./images/job-smiles.jpg')}  alt="Smiles website"/>
            <img src={require('./images/drawing-flower.jpg')} alt="Free hand drawing made with colored pencils"/>
              <img src={require('./images/job-chatbot.jpg')}  alt="Smiles chatbot advertisement"/>
                <img src={require('./images/job-formainfoco.jpg')} alt="Cover of the magazine form in focus, academic work"/>
        </div>

        <div className="column">
          <img src={require('./images/job-caixa.jpg')}
               alt="Caixa Econômica Federal website developed for the Capgemini"/>
            <img src={require('./images/drawing-mouse.jpg')} alt="Free hand drawing made with nankin"/>
              <img src={require('./images/job-cassandre.jpg')} alt="Digital illustrations"/>
                <img src={require('./images/job-cvc.jpg')} alt="CVC hotsite"/>
        </div>

        <div className="column">
          <img src={require('./images/job-mondial.jpg')} alt="Mondial advertisement"/>
            <img src={require('./images/job-caixa-pj.jpg')}
                 alt="Caixa Econômica Federal website developed for the Capgemini"/>
        </div>

      </section>

      <footer className="background--gradient">

        <img src={require('./images/code-solid.svg')} className="closeimg" alt=""/>

      </footer>

    </div>
  );
}

export default App;
