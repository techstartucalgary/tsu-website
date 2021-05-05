import React from "react";
import "./TechGuides.css"
import imgDjango from "images/django.png"
import imgGit from "images/git.png"
import imgWebDev from "images/webdev.png"
import DjangoGuide from "./DjangoGuide"
import GitGuide from "./GitGuide"
import WebDevGuide from "./WebDevGuide"
import { lightTheme, darkTheme, GlobalStyles } from 'types/Themes.js'


function TechGuides(props: any) {
    return <section className="techGuidesSection">
        <GlobalStyles />

        <div className="guide__background">
            <DjangoGuide
                link="https://docs.google.com/document/d/1Emq59prVwyzpnOW8CkTfz9FEWE00AH0epGFHji2k_lA/edit?usp=sharing"
                image={imgDjango}
                name="Django Guide"
                description="This guide provides content on Django, a python framework that lets you build backends for websites"
            />
        </div>
        <div className="guide__background">
            <GitGuide
                link="https://docs.google.com/document/d/19n16a4ksCs-MJmmru1TDtBWKjFOcfPF-bE8zuhR-RiQ/edit?usp=sharing"
                image={imgGit}
                name="Git Guide"
                description="Guide for getting started with git"
            />
        </div>
        <div className="guide__background">
            <WebDevGuide
                link="https://docs.google.com/document/d/1K1prdp8otB_cowT4E39qM6SYlduTSG4g7abx3FtM3YA/edit?usp=sharing"
                image={imgWebDev}
                name="Web Dev Guide"
                description=" This guide focuses on directing you towards the best free online content to teach you the fundamentals"
            />
        </div>


    </section>;
}

export default TechGuides;