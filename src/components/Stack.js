import React from "react";
export default function Stack() {
    return(
        <section className="background--gradient">
            <img src={require('../images/html5-brands.svg')} className="technologies" alt="HTML 5" title="HTML 5"/>
            <img src={require('../images/js-brands.svg')} className="technologies" alt="Java Scrip" title="Java Script"/>
            <img src={require('../images/css3-brands.svg')} className="technologies" alt="CSS 3" title=" CSS 3"/>
            <img src={require('../images/adobe-brands.svg')} className="technologies" alt="Adobe Suit" title="Adobe Suit"/>
            <img src={require('../images/react-brands.svg')} className="technologies" alt="React" title="React"/>
            <img src={require('../images/node-brands.svg')} className="technologies" alt="Node" title="Node"/>
            <img src={require('../images/docker-brands.svg')} className="technologies" alt="Docker" title="Docker"/>
            <img src={require('../images/sass-brands.svg')} className="technologies" alt="Sass" title="Sass"/>
            <img src={require('../images/liferay-brands.svg')} className="technologies" alt="Liferay" title="Liferay"/>
        </section>
    )
}
