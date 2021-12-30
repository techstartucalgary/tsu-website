import * as S from "./SponsorLogo.styles";

type SponsorLogoProps = {
  sponsorLink: string;
  sponsorImage: string;
};

const SponsorLogo = (props: SponsorLogoProps) => {
  return (
    <S.SponsorLogo
      href={props.sponsorLink}
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
    </S.SponsorLogo>
  );
};

export default SponsorLogo;
