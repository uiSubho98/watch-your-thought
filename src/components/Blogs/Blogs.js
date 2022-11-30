import React from "react";
import "./Blogs.css";
import blog from "../../assets/blog1.jpg";

const Blogs = () => {
  return (
    <div className="blog-container container">
      <div className="blog-header">
        <h2 className="text-center">Blog</h2>
      </div>
      <div className="blog-content container">
        <div className="first-blog">
          <div className="blog-image">
            <img src={blog} alt="" />
          </div>
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sunt modi ullam vitae distinctio nulla nihil, veritatis
              voluptatibus illo! At?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Molestiae, suscipit? Inventore laborum expedita,
              ratione accusamus iusto similique odit, nobis ea fugit dicta rerum
              nulla illo aperiam in, enim reiciendis minima voluptatem libero?
              Nobis libero amet placeat, in excepturi explicabo distinctio?
            </p>
          </div>
        </div>
        <div className="first-blog">
          <div className="blog-image">
            <img src={blog} alt="" />
          </div>
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sunt modi ullam vitae distinctio nulla nihil, veritatis
              voluptatibus illo! At?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi sed dicta maxime nostrum unde aspernatur
              natus nulla nihil delectus eveniet?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic consequatur quis nisi laudantium
              ab vitae ad laborum, ratione nulla magni dolore rerum mollitia
              facere maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
