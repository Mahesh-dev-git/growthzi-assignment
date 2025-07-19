import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Page404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <Navbar />

      <main className="error-main">
        <h1 className="big-404">404</h1>
        <h2 className="oops-text">Oops!! Something Is Missing</h2>
        <p className="error-description">
          Sorry But The Page You Are Looking<br />
          For Does Not Exist, Have Been Removed,<br />
          Name Changed Or Is Temporarily Unavailable
        </p>
        <Link className="back-home-btn" to="/">Back To Home →</Link>
      </main>

      <Footer />
    </div>
  );
};

export default Page404;
