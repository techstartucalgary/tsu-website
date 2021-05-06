import React from "react";
import "./GuidesSection.css"
import imgDjango from "images/django.png"
import imgGit from "images/git.png"
import imgWebDev from "images/webdev.png"
import { lightTheme, darkTheme, GlobalStyles } from 'types/Themes.js'
import Guide from "./Guide";


function GuidesSection(props: any) {
    return <section className="techGuidesSection">
        <GlobalStyles />

        <Guide guideName="Django Guide" link="https://docs.google.com/document/d/1Emq59prVwyzpnOW8CkTfz9FEWE00AH0epGFHji2k_lA/edit?usp=sharing" image={imgDjango}
            description="Learn Django, a python-based web framework for building backends, APIs, multi-page applications, and more!" />

        <Guide guideName="Git Guide" link="https://docs.google.com/document/d/19n16a4ksCs-MJmmru1TDtBWKjFOcfPF-bE8zuhR-RiQ/edit?usp=sharing" image={imgGit}
            description="Git is a fundamental tool for source control and collaborative development. This guide will help you learn and master git and GitHub workflows!" />

        <Guide guideName="Web Dev Guide" link="https://docs.google.com/document/d/1K1prdp8otB_cowT4E39qM6SYlduTSG4g7abx3FtM3YA/edit?usp=sharing" image={imgWebDev}
            description="Learn the fundamentals of web development, with free resources and advice for mastering HTML, CSS, JS, and more!" />
    
    </section>;
}

export default GuidesSection;