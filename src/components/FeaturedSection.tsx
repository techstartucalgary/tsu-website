import "./FeaturedSection.css";

type FeaturedSectionProps = {
  sectionImage: string;
  sectionTitle: string;
  sectionDescription: string;
  sectionLink: string;
};

const FeaturedSection = (props: FeaturedSectionProps) => (
  <article className="featuredSection">
    <img
      src={props.sectionImage}
      alt=""
      className="featuredSection__sectionImage"
    />
    <h3 className="featuredSection__sectionTitle">{props.sectionTitle}</h3>
    <p className="featuredSection__sectionDescription">
      {props.sectionDescription}
    </p>
    <a href={props.sectionLink} className="featuredSection__btn">
      Learn More
    </a>
  </article>
);
export default FeaturedSection;
