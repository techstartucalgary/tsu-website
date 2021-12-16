import "./SponsorLogo.css";

type SponsorLogoProps = {
  sponsorLink: string;
  sponsorImage: string;
};

const SponsorLogo = (props: SponsorLogoProps) => {
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
