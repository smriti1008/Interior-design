import React from "react";
import "./Team.css";
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble } from "react-ionicons";

const Myteam = () => {
  const teamMembers = [
    {
      name: "JOHNATHAN HAWKINS",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      desc: "Johnathan brings 15 years of visionary architectural experience, ensuring spatial perfection in every project.",
    },
    {
      name: "ALEXANDRA SMITHS",
      role: "Principal Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      desc: "With an eye for detail and luxury, Alexandra curates the finest materials and aesthetics for our clients.",
    },
    {
      name: "ELISA JOHANSON",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      desc: "Elisa flawlessly manages timelines and execution, bringing the conceptual designs smoothly into reality.",
    }
  ];

  return (
    <section className="teamSection" id="team">
      <div className="header">
        <span className="eyebrow">The Visionaries</span>
        <h2 className="title">Behind <em>Oasis</em></h2>
      </div>
      
      <div className="grid">
        {teamMembers.map((member, index) => (
          <div className="teamCard" key={index}>
            <div className="imageWrapper">
              <img src={member.image} alt={member.name} />
              
              <div className="socialOverlay">
                <ul className="socialList">
                  {/* Using standard a tags with SVGs to fix missing imports for react-icons in original project */}
                  <li className="socialIcon"><a href="#">in</a></li>
                  <li className="socialIcon"><a href="#">tw</a></li>
                  <li className="socialIcon"><a href="#">ig</a></li>
                </ul>
              </div>
            </div>

            <div className="infoWrapper">
              <h3 className="memberName">{member.name}</h3>
              <p className="memberRole">{member.role}</p>
              <p className="memberDesc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myteam;
