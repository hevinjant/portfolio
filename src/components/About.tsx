import myPic from "../assets/myPic.jpg";
import "../styles/About.css";
import { aboutMe } from "../data/data";

export default function About() {
  return (
    <div className="about-container">
      <img className="about-pic" alt="profile image" src={myPic} />
      <p className="about-text">{aboutMe}</p>
    </div>
  );
}
