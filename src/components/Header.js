import React from 'react';
import {ReactComponent as Linkedin} from "../images/linkedin-in-brands.svg";
import {ReactComponent as Github} from "../images/github-alt-brands.svg";
import {ReactComponent as Email} from "../images/envelope-solid.svg";

export default function Header () {
    return(
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
    )
}