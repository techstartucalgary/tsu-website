import "./BrandingAndReachOut.css"
import Emoji from 'components/Emoji'

function Branding(props: any) {
    return <section>

        <ul className="sectionContent">
            <li><Emoji symbol="👩🏽‍💻 " />Club Name: Refer to the club as "Tech Start UCalgary" or "Tech Start", but avoid the acronyms "TS" and "TSU".</li>
            <li><Emoji symbol="🖥️ " />Logos: Want to use the Tech Start logo? You can download official versions from our Google Drive <a href="https://drive.google.com/drive/folders/1VW7TTFteVvLU4avbyZvtdizZ9fdNhYRC?usp=sharing">here</a>!</li>
            <li><Emoji symbol="🔖 " />Styling Guide: You can find a more in-depth styling guide <a href="#">here</a>.</li>
        </ul>
    </section>;
}

export default Branding;