import { BrushOutline, LeafOutline, BuildOutline, HomeOutline } from "react-ionicons";
import './Services.css'; 

const Services = () => {
  const services = [
    {
      title: "Interior Design",
      icon: HomeOutline,
      desc: "Comprehensive interior design solutions that blend functionality with timeless aesthetics to create your perfect sanctuary.",
    },
    {
      title: "Space Planning",
      icon: BuildOutline,
      desc: "Strategic spatial optimization maximizing flow, light, and utility while maintaining the architectural integrity of your home.",
    },
    {
      title: "Sustainable Design",
      icon: LeafOutline,
      desc: "Eco-conscious material selection and energy-efficient designs that minimize environmental impact without compromising luxury.",
    },
    {
      title: "Custom Furnishings",
      icon: BrushOutline,
      desc: "Bespoke furniture and cabinetry designed specifically for your space, crafted by master artisans to exacting standards.",
    },
  ];

  return (
    <section className="servicesSection" id="services">
      <div className="header">
        <span className="eyebrow">Our Expertise</span>
        <h2 className="title">Bespoke <em>Services</em></h2>
      </div>
      
      <div className="grid">
        {services.map((service) => (
          <div key={service.title} className="card">
            <div className="iconWrapper">
              <service.icon
                color="currentColor"
                width="28px"
                height="28px"
              />
            </div>
            <h3 className="cardTitle">{service.title}</h3>
            <p className="cardDesc">{service.desc}</p>
            <a href="#contactUs" className="readMore">
              Discover More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
