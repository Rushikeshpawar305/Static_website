import React from "react";
import { Image } from "./image";
import JsonData from "../data/data.json";

const generateGoogleFormUrl = (itemId) => {
  const baseUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSejMtsdFfQhZVVmnCmjWU8Xy6dLe6mZ3XS87ZJVqlhOKu9oZg/viewform?usp=pp_url";
  const entryId = "entry.1773706981";
  const url = `${baseUrl}&${entryId}=${encodeURIComponent(itemId)}`;
  return url;
};

const Gallery = () => {
  const handleImageClick = (itemId) => {
    const url = generateGoogleFormUrl(itemId);
    window.open(url, "_blank");
  };

  const data = JsonData.Gallery;

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Discover our products through vibrant visuals in our gallery,
            showcasing quality and innovation in every snapshot.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-6 col-md-4 col-lg-4"
                    onClick={() => handleImageClick(item.id)}
                  >
                    <Image
                      title={item.title}
                      largeImage={item.largeImage}
                      smallImage={item.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
