interface guideProps {
  guideName: string;
  link: string;
  image: string;
  description: string;
}

/**
 * A component to render a card that shows a guide. Clicking on the guide takes you to a Google Doc. All info for guides is currently in TechGuides.tsx
 * @param props Should follow the interface above, guideProps
 * @returns A Guide React component
 */
const Guide = (props: guideProps) => (
  <a href={props.link} className="guide" target="_blank">
    <div className="guide__background">
      <header className="guideName">{props.guideName}</header>
      <img src={props.image} alt="" />
      <p className="guideDescription">{props.description}</p>
    </div>
  </a>
);

export default Guide;
