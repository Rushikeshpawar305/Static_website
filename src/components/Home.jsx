import React from "react";
import { Header } from "./header"; // Adjust import path as necessary
import { Features } from "./features"; // Adjust import path as necessary
import { About } from "./about"; // Adjust import path as necessary
import { Workingprocess } from "./Workingprocess"; // Adjust import path as necessary
import { Testimonials } from "./testimonials"; // Adjust import path as necessary

const Home = ({ data }) => {
  return (
    <div>
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Workingprocess data={data.Workingprocess} />
      <Testimonials data={data.Testimonials} />
    </div>
  );
};

export default Home;
