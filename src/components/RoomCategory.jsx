import React from "react";
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
  return (
    <section className="room-category">
      <div className="line-divider" />
      <p className="section-subtitle">our room choices</p>
      <h2 className="section-title">Luxury Rooms & Suites</h2>

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
