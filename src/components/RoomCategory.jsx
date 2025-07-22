import React, { useEffect, useState } from "react";
import "../styles/RoomCategory.css";
import roomImage from "../assets/fac-img.png";
import facilityIcon from "../assets/fac-icon.png";

const rooms = [
  { title: "Superior Suite", price: "$300/Night", showExtras: true },
  { title: "Junior Suite", price: "$270/Night" },
  { title: "Deluxe Room", price: "$210/Night" },
  { title: "Double Room", price: "$180/Night" },
  { title: "Family Room", price: "$150/Night" },
];

const RoomCategory = () => {
  const [heading, setHeading] = useState("Luxury Rooms & Suites");
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(heading);

  useEffect(() => {
    // Simulated fetch to show console log on load
    const fetchRooms = async () => {
      try {
        const result = { data: rooms };
        console.log("API Response:", result);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("https://flask-backend-u613.onrender.com/update-section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component: "RoomCategory",
          field: "heading",
          value: editedText,
        }),
      });

      const result = await response.json();
      console.log("API Response:", result);
      setHeading(editedText);
      setIsEditing(false);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <section className="room-category">
      <div className="line-divider" />
      <p className="section-subtitle">our room choices</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              style={{ fontSize: "32px", fontFamily: "Forum, serif", padding: "4px 8px" }}
            />
            <button
              onClick={handleSave}
              style={{ padding: "6px 12px", background: "#bf9766", color: "#fff", border: "none", cursor: "pointer" }}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="section-title">{heading}</h2>
            <button
              onClick={() => setIsEditing(true)}
              style={{ padding: "6px 12px", background: "#bf9766", color: "#fff", border: "none", cursor: "pointer" }}
            >
              Edit
            </button>
          </>
        )}
      </div>

      <div className="room-grid">
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`room-card ${index === 0 ? "wide" : "square"}`}
            style={{ backgroundImage: `url(${roomImage})` }}
          >
            <div className="room-details">
              <h6 className="room-title">{room.title}</h6>
              <p className="room-price">{room.price}</p>
              <hr className="room-divider" />

              {room.showExtras && (
                <div className="room-footer">
                  <button className="book-now">
                    <span>Book Now</span> <span className="arrow">→</span>
                  </button>
                  <img
                    src={facilityIcon}
                    alt="Facilities"
                    className="facility-icons"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomCategory;
