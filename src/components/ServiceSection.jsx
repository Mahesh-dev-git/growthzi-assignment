import React, { useState } from "react";
import "../styles/ServiceSection.css";
import gymIcon from "../assets/gym.png";
import spaIcon from "../assets/spa.png";
import breakfastIcon from "../assets/breakfast.png";

const initialServices = [
  {
    icon: gymIcon,
    title: "Workout & Yoga Rooms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: spaIcon,
    title: "Spa, Massage & Sauna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: breakfastIcon,
    title: "Multiple Cuisines & Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ServiceSection = () => {
  const [services, setServices] = useState(initialServices);
  const [customButtons, setCustomButtons] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText] = useState("");
  const [btnLink, setBtnLink] = useState("");
  const [btnColor, setBtnColor] = useState("#bf9766");

  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [headingText, setHeadingText] = useState("Amenities That You Can Enjoy");

  const handleAddButton = (e) => {
    e.preventDefault();
    setCustomButtons([...customButtons, { text: btnText, link: btnLink, color: btnColor }]);
    setBtnText("");
    setBtnLink("");
    setBtnColor("#bf9766");
    setShowForm(false);
  };

  const handleSaveHeading = async () => {
    try {
      await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          component: "ServiceSection",
          field: "section-heading",
          value: headingText,
        }),
      });
      console.log("FRONTEND EDIT DETECTED");
      console.log("Component: ServiceSection");
      console.log("Field: section-heading");
      console.log("New Value:", headingText);
      console.log("--------------------------------------------------");
    } catch (error) {
      console.error("API error:", error);
    }
    setIsEditingHeading(false);
  };

  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-left">
          <div className="intro-wrapper">
            <div className="gold-line" />
            <p className="subheading">introducing our services</p>
          </div>
          <div className="heading-edit-wrapper">
            {isEditingHeading ? (
              <>
                <input
                  className="heading-input"
                  type="text"
                  value={headingText}
                  onChange={(e) => setHeadingText(e.target.value)}
                />
                <button className="save-btn" onClick={handleSaveHeading}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h2 className="main-heading">{headingText}</h2>
                <button className="edit-btn" onClick={() => setIsEditingHeading(true)}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
        <div className="service-right">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="service-grid">
        {/* Row 1: Empty, Card 1 */}
        <div className="empty-block" />
        <div className="service-card dark">
          <img src={services[0].icon} alt="" className="service-icon" />
          <h4>{services[0].title}</h4>
          <p>{services[0].description}</p>
          <button className="discover-button">Discover More →</button>
        </div>

        {/* Row 2: Card 2, Empty */}
        <div className="service-card dark">
          <img src={services[1].icon} alt="" className="service-icon" />
          <h4>{services[1].title}</h4>
          <p>{services[1].description}</p>
          <button className="discover-button">Discover More →</button>
        </div>
        <div className="empty-block" />

        {/* Row 3: Empty, Card 3 */}
        <div className="empty-block" />
        <div className="service-card dark">
          <img src={services[2].icon} alt="" className="service-icon" />
          <h4>{services[2].title}</h4>
          <p>{services[2].description}</p>
          <button className="discover-button">Discover More →</button>
        </div>
      </div>

      <button className="add-btn" onClick={() => setShowForm(true)}>
        + Add Button
      </button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <form className="add-form" onSubmit={handleAddButton}>
              <h3>Create CTA Button</h3>
              <input
                type="text"
                placeholder="Button Text"
                value={btnText}
                onChange={(e) => setBtnText(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Link (e.g., tel:1234567890 or https://...)"
                value={btnLink}
                onChange={(e) => setBtnLink(e.target.value)}
                required
              />
              <label>Button Color:</label>
              <input
                type="color"
                value={btnColor}
                onChange={(e) => setBtnColor(e.target.value)}
              />
              <div className="form-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="custom-buttons">
        {customButtons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={{ backgroundColor: btn.color }}
          >
            {btn.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
