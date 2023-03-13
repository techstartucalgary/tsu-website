import { ApplicationContent } from "./ApplySection.styles";

type ApplySectionProps = {
  role: string;
  description: string;
  statusIsOpen: boolean;
  applicationLink: string;
  closedStatus: string;
  deadline: string;
};

const ApplySection = (props: ApplySectionProps) => (
  <ApplicationContent data-aos="fade-down" data-aos-duration="1000">
    <li>
      <h2>{props.role}</h2>
      <p>{props.description}</p>
    </li>
    {props.statusIsOpen ? (
      <a href={props.applicationLink} rel="noreferrer" target="_blank">
        <button className="applyPage__btn">Apply Now</button>
      </a>
    ) : (
      <h4 className="applyPage__closed">{props.closedStatus}</h4>
    )}
    <h5>{props.deadline}</h5>
  </ApplicationContent>
);
export default ApplySection;
