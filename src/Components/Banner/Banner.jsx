import React from "react";
import bannerImg from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn text-lg font-bold btn-primary mt-8">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
