import "./SponsorLogo.css";

const SponsorLogo = (props: any) => {
  return (
    <a
      href={props.sponsorLink}
      className="sponsorLogo"
      target="blank"
      data-aos="zoom-in-up"
    >
      <img
        src={props.sponsorImage}
        alt=""
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
    </a>
  );
};

export default SponsorLogo;
