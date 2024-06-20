import React from "react";
import { Header } from "./header"; // Adjust import path as necessary
import { Features } from "./features"; // Adjust import path as necessary
import { About } from "./about"; // Adjust import path as necessary
import { Workingprocess } from "./Workingprocess"; // Adjust import path as necessary
import { Testimonials } from "./testimonials"; // Adjust import path as necessary
import { Image } from "./image";
import JsonData from "../data/data.json";

const generateGoogleFormUrl = (itemId) => {
  const baseUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSejMtsdFfQhZVVmnCmjWU8Xy6dLe6mZ3XS87ZJVqlhOKu9oZg/viewform?usp=pp_url";
  const entryId = "entry.1773706981";
  const url = `${baseUrl}&${entryId}=${encodeURIComponent(itemId)}`;
  return url;
};

const Home = ({ data }) => {
  const handleImageClick = (itemId) => {
    const url = generateGoogleFormUrl(itemId);
    window.open(url, "_blank");
  };

  const galleryData = JsonData.Gallery.slice(0, 6); // Get the first 6 images

  return (
    <div>
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Workingprocess data={data.Workingprocess} />
      <div id="home-gallery" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Explore a glimpse of our offerings with a selection of images from
              our gallery.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {galleryData.map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonials data={data.Testimonials} />
    </div>
  );
};

export default Home;
