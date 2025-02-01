import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
// import EmailIcon from "@mui/icons-material/Email";
import Resume from "../assets/Hevin_Jantasmin_Resume.pdf";
import "../styles/Other.css";

export default function Other() {
  return (
    <div className="other">
      <a href="https://www.linkedin.com/in/hevinjant/" target="_blank">
        <LinkedInIcon /> LinkedIn
      </a>
      <a href="https://github.com/hevinjant" target="_blank">
        <GitHubIcon /> GitHub
      </a>
      <a href={Resume} download>
        <DownloadIcon />
        Download my resume here
      </a>
    </div>
  );
}
