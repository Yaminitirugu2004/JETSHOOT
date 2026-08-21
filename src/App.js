import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./img.png";
import shreyas from "./shreyas.png";
import member1 from "./member1.png";
import member2 from "./member2.png";
import member3 from "./member3.png";
import member4 from "./member4.png";
import member5 from "./member5.jpeg";
import member6 from "./member6.png";

import {
  FaVideo,
  FaStar,
  FaSmile,
  FaTrophy,
  FaFilm,
  FaBirthdayCake,
  FaBuilding,
  FaBullhorn,
  FaChartLine,
  FaCarSide, FaHeart, 
  FaFacebookF,FaUserTie, FaInstagram, FaTwitter
} from "react-icons/fa";

import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

function App() {

  /* =========================
     STATES
  ========================= */

  const [selectedImage, setSelectedImage] = useState(null);
const [reviews, setReviews] = useState([]);
useEffect(() => {
  fetchReviews();
}, []);

const fetchReviews = async () => {
  try {
    console.log("Fetching reviews...");

    const querySnapshot = await getDocs(collection(db, "reviews"));

    console.log("Documents found:", querySnapshot.size);

    const reviewList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Review List:", reviewList);

    setReviews(reviewList);
  } catch (error) {
    console.error("Firestore Error:", error);
  }
};
const [showAll, setShowAll] = useState(false);

const [newReview, setNewReview] = useState({
  name: "",
  rating: 5,
  review: ""
});
const handleSubmitReview = async (e) => {
  e.preventDefault();

  if (!newReview.name || !newReview.review) return;

  await addDoc(collection(db, "reviews"), {
    name: newReview.name,
    rating: Number(newReview.rating),
    review: newReview.review,
  });

  fetchReviews();

  setNewReview({
    name: "",
    rating: 5,
    review: "",
  });
};
const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : "0.0";

    const fiveStar = reviews.filter(r => r.rating === 5).length;
const fourStar = reviews.filter(r => r.rating === 4).length;
const threeStar = reviews.filter(r => r.rating === 3).length;
const twoStar = reviews.filter(r => r.rating === 2).length;
const oneStar = reviews.filter(r => r.rating === 1).length;

const totalReviews = reviews.length;

const fivePercent =
  totalReviews > 0
    ? (fiveStar / totalReviews) * 100
    : 0;

const fourPercent =
  totalReviews > 0
    ? (fourStar / totalReviews) * 100
    : 0;

const threePercent =
  totalReviews > 0
    ? (threeStar / totalReviews) * 100
    : 0;

const twoPercent =
  totalReviews > 0
    ? (twoStar / totalReviews) * 100
    : 0;

const onePercent =
  totalReviews > 0
    ? (oneStar / totalReviews) * 100
    : 0;

  /* members of jetshoot */
  const features = [
  {
    title: "Founder & Creative Director",
    description:
      "Leading innovative ideas and transforming them into impactful creative solutions.",
    image: member3,
  },

  {
    title: "Co-Founder & Content Creator",
    description: "Creating Content That Inspires and Connects, Transforming Ideas into Powerful Visual Stories.",
    image: member2,
  },

  {
    title: "Managing Director",
    description: "Leading operations and driving the company's vision toward success.",
    image: member4,
  },
 
  {
    title: "Creative Planner",
    description: "Strategically planning creative ideas that bring visions to life.",
    image: member1,
  },
 
   {
    title: "Editor",
    description: "Creating powerful narratives through expert video editing techniques.",
    image: member5,
  },
  {
    title: "Event Co-Ordinator",
description: "Planning, coordinating, and managing every detail to ensure seamless events and unforgettable experiences.",
image: member6,
  },


];


  /* =========================
     MAIN WEBSITE
  ========================= */

  return (
      <div>
  
      {/* NAVBAR */}

      <nav className="navbar">

        <img
          src={logo}
          alt="JetShoot Logo"
          className="logo"
        />

        <ul className="nav-links">

          <li>
            <a href="#home">HOME</a>
          </li>

          <li>
            <a href="#about">ABOUT</a>
          </li>

          <li>
            <a href="#services">SERVICES</a>
          </li>

          <li>
            <a href="#plans">PLANS</a>
          </li>

          <li>
            <a href="#feedback">FEEDBACK</a>
          </li>

        </ul>
<a href="#contact">
  <button className="nav-btn">
    Contact Us
  </button>
</a>

      </nav>

      {/* HERO SECTION */}

      <section id="home" className="hero">

        <div className="hero-left">

          <p className="welcome-text">
            WELCOME TO
          </p>

          <img
            src={logo}
            alt="JetShoot"
            className="hero-logo"
          />

          <h6 className="hero-subtitle">
            WE CREATE IMPACT
          </h6>

          <p className="hero-description">
            From Celebrity Shoots to Grand Events, we transform every 
            moment into a powerful
            visual experience that captivates audiences.
          </p>

          <button
  className="explore-btn"
  onClick={() =>
    window.open("https://www.instagram.com/jetshoot.in", "_blank")
  }
>
  EXPLORE OUR WORK
</button>

        </div>

      </section>

      {/* ABOUT */}
      <div className="content-bg">
      <section id="about" className="about-section">

        <h2 className="section-title">
          About Us
        </h2>

        <h3 className="about-title">
          Turning Every Moment Into
          <span> A Cinematic Experience</span>
        </h3>

       <p className="about-description"> JetShoot is a creative visual 
        production brand passionate about capturing emotions, 
        energy, and unforgettable memories through cinematic storytelling. 
        From celebrity shoots and luxury weddings to business promotions and 
        live events, we create premium-quality visuals that leave a lasting 
        impact. </p>
<p className="about-description"> With 500+ successful events, 
  100+ celebrity videos, and years of creative expertise, 
  our team focuses on delivering high-quality reels with professional 
  editing, fast delivery, and modern cinematic techniques. </p>
      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-box">
          <div className="stat-icon">
            <FaVideo />
          </div>

          <h1>500+</h1>

          <p>EVENTS COVERED</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaStar />
          </div>

          <h1>100+</h1>

          <p>CELEBRITY SHOOTS</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaSmile />
          </div>

          <h1>98%</h1>

          <p>CLIENT SATISFACTION</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaTrophy />
          </div>

          <h1>5+</h1>

          <p>YEARS EXPERIENCE</p>
        </div>

      </section>
{/* SERVICES */}
<section id="services" className="services">

  <h2 className="section-title">Our Services</h2>


      <div className="service-grid">

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaFilm className="service-icon" />
    <h3>MOVIE PROMOTIONS</h3>
    <p>Promoting movies with cinematic trailers and creative campaigns.</p>
  </div>

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaBullhorn className="service-icon" />
    <h3>BRAND PROMOTIONS</h3>
    <p>Showcasing your brand with impactful promotional content.</p>
  </div>

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaChartLine className="service-icon" />
    <h3>DIGITAL MARKETING</h3>
    <p>Growing businesses with smart digital campaigns.</p>
  </div>

  <div
    className="service-card"
   onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaBuilding className="service-icon" />
    <h3>BUSINESS PROMOTIONS</h3>
    <p>Creative videos that promote your brand and attract customers.</p>
  </div>

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaBirthdayCake className="service-icon" />
    <h3>BIRTHDAY SHOOTS</h3>
    <p>Turning birthday celebrations into unforgettable memories.</p>
  </div>
  <div
    className="service-card"
   onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaVideo className="service-icon" />
    <h3>MAKING SHOOTS</h3>
    <p>Capturing Memories, Creating Impact.</p>
  </div>
   <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaUserTie className="service-icon" />
    <h3>CELEBRITY SHOOTS</h3>
    <p>Capturing iconic moments with celebrities through world-class photography and videography.</p>
  </div>

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaHeart className="service-icon" />
    <h3>WEDDING SHOOTS</h3>
    <p>Capturing every heartfelt moment of your special day with timeless photography.</p>
  </div>

  <div
    className="service-card"
    onClick={() =>
  window.open("https://www.instagram.com/jetshoot.in", "_blank")
}
  >
    <FaCarSide className="service-icon" />
    <h3>CAR DELIVERY SHOOTS</h3>
   <p>Capturing every proud delivery moment with premium photography.</p>
  </div>

</div>
</section>

      {/* PLANS */}

      <section id="plans" className="plans">

        <h2 className="section-title">
          Choose Your Perfect Plan
        </h2>

        <div className="plan-grid">

          <div className="plan-card">
            <h3>Basic Plan</h3> 
            <p>Xlent Cinematic Creations</p>
            <p>Professional Photography Services</p>
            <p>2 Edited Reel Delivered</p> 
            <p>Shot on the Latest iPhone for Cinematic Quality</p> 
            <p>Fast Delivery Within 10 Minutes After Shoot</p> 
            <p>Trained & Certified Professional Reel Maker</p>
            <p>After the Shoot they giving Magical Memories </p>
            <p>Official Jetshoot Branding Included</p>

            <h1>₹2,000</h1>

            <button
              className="plan-btn"
            >
              Choose Plan
            </button>

          </div>

          <div className="plan-card featured-plan">

            <h3>Standard Plan</h3>
            <p>Xlent Cinematic Creations</p>
            <p>Professional Photography Services</p> 
            <p>4 Edited Reel Delivered</p> 
            <p>Shot on the Latest iPhone for Cinematic Quality</p> 
            <p>Fast Delivery Within 10 Minutes After Shoot</p> 
            <p>Trained & Certified Professional Reel Maker</p>
            <p>After the Shoot they giving Magical Memories </p> 
            <p>Official Jetshoot Branding Included</p>

            <h1>₹5,000</h1>

            <button
              className="plan-btn"
              
            >
              Choose Plan
            </button>

          </div>

          <div className="plan-card">

            <h3>Premium Plan</h3>
            <p>Xlent Cinematic Creations</p>
            <p>Professional Photography Services</p> 
            <p>10 Edited Reel Delivered</p> 
            <p>Shot on the Latest iPhone for Cinematic Quality</p> 
            <p>Fast Delivery Within 10 Minutes After Shoot</p> 
            <p>Trained & Certified Professional Reel Maker</p>
            <p>After the Shoot they giving Magical Memories </p> 
            <p>Official Jetshoot Branding Included</p>

            <h1>₹10,000</h1>

            <button
              className="plan-btn"
              
            >
              Choose Plan
            </button>

          </div>

        </div>

      </section>
       
    <section className="why-section">
  <div className="why-badge">
    ✨ Why Choose Us
  </div>

  <h2 className="why-heading">
    Meet the Team Behind<span> JetShoot</span>
  </h2>

  <div className="why-grid">
    {features.map((item, index) => (
      <div className="why-card" key={index}>
        <div className="card-image">
          <img
            src={item.image}
            alt={item.title}
            onClick={() => setSelectedImage(item.image)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="card-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>

  {selectedImage && (
    <div
      className="image-popup"
      onClick={() => setSelectedImage(null)}
    >
      <span
        className="close-btn"
        onClick={() => setSelectedImage(null)}
      >
        &times;
      </span>

      <img
        src={selectedImage}
        alt="Preview"
        className="popup-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}
</section>

<section className="trusted-company">

  <img
    src={shreyas}
    alt="Shreyas Media"
    className="trusted-logo"
  />

  <div className="trusted-content">
    <h1>TRUSTED COMPANY - SHREYAS MEDIA</h1>

    <h3 className="trusted-title">
  India’s Leading Movie Promotion Company
</h3>

    <p>
      Delivering cinematic excellence through creative storytelling,
      impactful promotions, and premium digital experiences.
    </p>
  </div>

</section>
     
  
  <section id="feedback" className="reviews-section">

  <h2 className="review-title">
    FeedBack
  </h2>

  <div className="rating-summary">

    <div className="rating-left">
      <h1>{averageRating}</h1>
      <div className="stars">★★★★★</div>
      <p>Total {reviews.length} Reviews</p>
    </div>

    <div className="rating-bars">

  <div className="bar-row">
    <span>★★★★★</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${fivePercent}%` }}
      ></div>
    </div>
    <span>{fiveStar}</span>
  </div>

  <div className="bar-row">
    <span>★★★★</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${fourPercent}%` }}
      ></div>
    </div>
    <span>{fourStar}</span>
  </div>

  <div className="bar-row">
    <span>★★★</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${threePercent}%` }}
      ></div>
    </div>
    <span>{threeStar}</span>
  </div>

  <div className="bar-row">
    <span>★★</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${twoPercent}%` }}
      ></div>
    </div>
    <span>{twoStar}</span>
  </div>

  <div className="bar-row">
    <span>★</span>
    <div className="bar">
      <div
        className="fill"
        style={{ width: `${onePercent}%` }}
      ></div>
    </div>
    <span>{oneStar}</span>
  </div>

    </div>

  </div>

  {/* Review Form */}

  <div className="review-form">

    <h3>Leave a Review</h3>

    <form onSubmit={handleSubmitReview}>

      <input
        type="text"
        placeholder="Your Name"
        value={newReview.name}
        onChange={(e) =>
          setNewReview({
            ...newReview,
            name: e.target.value,
          })
        }
      />

      <select
        value={newReview.rating}
        onChange={(e) =>
          setNewReview({
            ...newReview,
            rating: e.target.value,
          })
        }
      >
        <option value="5">★★★★★</option>
        <option value="4">★★★★</option>
        <option value="3">★★★</option>
        <option value="2">★★</option>
        <option value="1">★</option>
      </select>

      <textarea
        placeholder="Write your review"
        value={newReview.review}
        onChange={(e) =>
          setNewReview({
            ...newReview,
            review: e.target.value,
          })
        }
      />

      <button type="submit">
        Submit Review
      </button>

    </form>

  </div>

  <h3 className="reviews-heading">Reviews</h3>

  {reviews.length === 0 ? (
  <p className="no-reviews">
    No reviews yet. Be the first to leave a review!
  </p>
) : (
  <>
    {(showAll ? reviews : reviews.slice(0, 2)).map(
      (review, index) => (
        <div className="review-card" key={index}>

          <div className="profile-circle">
            {review.name.charAt(0).toUpperCase()}
          </div>

          <div className="review-content">

            <div className="stars">
              {"★".repeat(review.rating)}
            </div>

            <h4>{review.name}</h4>

            <p>{review.review}</p>

          </div>

        </div>
      )
    )}

    {reviews.length > 2 && (
      <button
        className="show-more-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    )}
  </>
)}

</section>
 {/* CONTACT */}

  <section id="contact" className="contact-section">
  <h2>Contact Us</h2>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Get In Touch</h3>

      <p>📍 Hyderabad, Vijayawada, Guntur, Rajahmundry, Vizag, Bangalore.</p>
      <p>📞Imran: +91 9959845639</p>
      <p>📞Sriram: +91 7993349990</p>
      <p>📞Sharu: +91 8885553237</p>
      <p>📧 contact@jetshoot.in</p>
      <p>🌐 jetshoot.in</p>
    </div>

    <div className="contact-social">
      <h3>Follow Us</h3>

      <p>
  <a
    href="https://www.facebook.com/people/Jetshoot/61590346984823/"
    target="_blank"
    rel="noreferrer"
  >
    📘 Facebook
  </a>
</p>

<p>
  <a
    href="https://www.instagram.com/jetshoot.in"
    target="_blank"
    rel="noreferrer"
  >
    📸 Instagram
  </a>
</p>


    </div>

  </div>
</section>
</div>

      {/* FOOTER */}

      <footer className="flashoot-footer">
  <div className="footer-main">

    <div className="footer-company">
      <p>© 2026 JetShoot</p>

      <p>
        A product of Konchamkode
        Private Limited
      </p>
    </div>
    <div className="footer-links">
  <a href="/">Privacy</a>
  <span>|</span>

  <a href="/">Cookies</a>
  <span>|</span>

  <a href="/">Terms & Conditions</a>
  <span>|</span>

  <a href="/">Partner Terms & Conditions</a>
</div>


    <div className="footer-social">
      <a href="https://www.facebook.com/people/Jetshoot/61590346984823/?rdid=wuhSyMRr0V32F1O4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18kr1S2114%2F" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>

      <a href="https://www.instagram.com/jetshoot.in?igsh=NGlqbnE4eGt1cWx3" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>

  </div>
</footer>
    </div>
  );
}

export default App;