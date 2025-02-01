import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { reversedMyExperiences } from "../data/data";
import "../styles/Experience.css";

export default function Experience() {
  const content = (experience: any) => (
    <div className="experiences-content">
      <p className="experience-title">{experience.title}</p>
      <div className="experience-info">
        <div className="experience-detail">
          <ApartmentIcon />
          <p>{experience.company}</p>
        </div>
        <div className="experience-detail">
          <LocationOnIcon />
          <p>{experience.location}</p>
        </div>
        <div className="experience-detail">
          <AccessTimeIcon />
          <p>{experience.interval}</p>
        </div>
      </div>
      <p className="experience-description">{experience.description}</p>
      <div className="divider" />
    </div>
  );

  const wideScreen = (
    <Timeline className="timeline" position="alternate">
      {reversedMyExperiences.map((experience: any) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{content(experience)}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );

  const smallScreen = reversedMyExperiences.map((experience: any) => {
    return content(experience);
  });

  return (
    <div className="experiences">
      <div className="experience-wide-screen">{wideScreen}</div>
      <div className="experience-small-screen">{smallScreen}</div>
    </div>
  );
}
