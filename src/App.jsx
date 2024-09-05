import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import image1 from "./assets/image1.svg"; // Placeholder image
import Vector from "./assets/Frame 1000002294.svg"; // Placeholder image
import Component from "./assets/Component 313.svg"; // Placeholder image
import Components from "./assets/Component 312.svg"; // Placeholder image
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("About Me");
  const [galleryImages, setGalleryImages] = useState([image1, image1, image1]);

  // Function to handle the image upload
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setGalleryImages([...galleryImages, newImageURL]);
    }
  };

  return (
    <div className="container">
      <div className="widget-container">
        {/* About Me Widget */}
        <div className="widget about-me">
        <div className="about">
        <div className="vector">
            <img src={Vector} alt="" className="vector-image" />
        </div>

          <div className="tab-header">
            <div className="tab-buttons">
              {["About Me", "Experiences", "Recommended"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="content-area">
              {activeTab === "About Me" && (
                <>
                  <p>
                    Hello! I'm Dave, your sales rep here from Salesforce. I've
                    been working at this awesome company for 3 years now.
                  </p>
                  <p>
                    I was born and raised in Albany, NY & have been living in
                    Santa Carla for the past 10 years with my wife Tiffany and
                    my 4-year-old twin daughters- Emma and Ella. Both of them
                    are just starting school, so my calendar is usually blocked
                    between 9-10 AM. This is a...
                  </p>
                </>
              )}
              {activeTab === "Experiences" && (
                <p>Here you can add content for the Experiences tab.</p>
              )}
              {activeTab === "Recommended" && (
                <p>Here you can add content for the Recommended tab.</p>
              )}
            </div>
          </div>
        </div>
        </div>

        {/* Gallery Widget */}
        <div className="widget gallery">
        <div className="add-Photo">

        <div className="vector">
            <img src={Vector} alt="" className="vector-image" />
        </div>

        <div className="tab-gallery">

          <div className="gallery-header">

            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-actions">
              <input
                type="file"
                id="image-upload"
                style={{ display: "none" }}
                onChange={handleAddImage}
                accept="image/*"
              />
              <label htmlFor="image-upload" className="gallery-button">
                <Plus size={14} />
                ADD IMAGE
              </label>
              <button className="gallery-button">
                {/* <img src={Component} alt=""  /> */}
                <ChevronLeft size={14} />
              </button>
              <button className="gallery-button">
                {/* <img src={Components} alt="" /> */}
                <ChevronRight size={14} />
              </button>
            </div>
        <div className="tab-header">  </div>
          </div>

          <div className="gallery-images">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                className="gallery-image"
                src={img}
                alt={`Gallery ${index + 1}`}
              />
            ))}
          </div>
        </div>

        </div>

      </div>
      </div>
    </div>
  );
}
