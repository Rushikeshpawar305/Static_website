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

const Home = () => {
  const handleImageClick = (itemId) => {
    const url = generateGoogleFormUrl(itemId);
    window.open(url, "_blank");
  };

  const data = JsonData.Gallery.slice(0, 6); // Get the first 6 images

  return (
    <div id="home" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Welcome to Our Home Page</h2>
          <p>
            Explore a glimpse of our offerings with a selection of images from
            our gallery.
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

export default Home;
