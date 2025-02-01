import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BusinessIcon from "@mui/icons-material/Business";
import { reversedMyExperiences } from "../data/data.ts";
import { ExperienceEntryType } from "../data/data.ts";
import "../styles/Experience.css";

export default function Experience() {
  const content = (experience: ExperienceEntryType) => (
    <div className="experiences-content">
      <p className="experience-title">{experience.title}</p>
      <div className="experience-info">
        <div className="experience-detail">
          <BusinessIcon fontSize="inherit" />
          <p>{experience.company}</p>
        </div>
        <div className="experience-detail">
          <LocationOnIcon fontSize="inherit" />
          <p>{experience.location}</p>
        </div>
        <div className="experience-detail">
          <DateRangeIcon fontSize="inherit" />
          <p>{experience.interval}</p>
        </div>
      </div>
      <p className="experience-description">{experience.description}</p>
      <div className="divider" />
    </div>
  );

  const wideScreen = (
    <Timeline className="timeline" position="alternate">
      {reversedMyExperiences.map((experience: ExperienceEntryType) => {
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

  const smallScreen = reversedMyExperiences.map(
    (experience: ExperienceEntryType) => {
      return content(experience);
    }
  );

  return (
    <div className="experiences">
      <div className="experience-wide-screen">{wideScreen}</div>
      <div className="experience-small-screen">{smallScreen}</div>
    </div>
  );
}
