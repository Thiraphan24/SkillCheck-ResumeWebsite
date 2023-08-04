import React, { useState } from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Full stack Developer",
    },
    {
      name: "Node js",
    },
    {
      name: "React js",
    },
    {
      name: "Vue js",
    },
    {
      name: "Express js",
    },
    {
      name: "Node js",
    },
    {
      name: "Nuxt js",
    },
    {
      name: "Angular js",
    },
    {
      name: "Vanila js",
    },
    {
      name: "Node js",
    },
    {
      name: "JavaScript",
    },
    {
      name: "TypeScript",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "UI/UX Design",
    },
  ];

  const colors = [
    "#F1C40F",
    "#F39C12",
    "#D35400",
    "#FF0000",
    "#00FFFF",
    "#FFA500",
    "#00008B",
    "#ADD8E6",
    "#800080",
    "#FFFF00",
    "#FFC0CB",
    "#00FF00",
    "#FFA500",
    "#FFA500",
    "#A52A2A",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h5> Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;
