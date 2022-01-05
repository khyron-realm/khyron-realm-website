import React from "react";
import Project from "./Project";
const Index = () => {
  const works = [
    {
      stack: [],
      description:
        "The year is 2422. There are now 400 years since we sent advanced ships to discover another habitable planet. Researchers discovered the closest class M planet, Khyron. The satellite images reveal the great potential for sustaining human life. The planet is defined by the marvelous colors of its nature ...",
      title: "Beginning",
      url: "/docs/story/beginning",
      image: "/img/wiki/beginning.png",
      index: 0,
    },
    {
      stack: [],
      description:
        "Looking at all the ships traveling to their destinations, you’ll see how well the fleets are organized. The main ship, located in the middle, is the Mothership. It is the commander of the fleets and supervises all the operations. On the outside, organized in concentric circles, are the Starships, which are protecting the commander from space debris ...",
      title: "Arrival",
      url: "/docs/story/arrival",
      image: "img/wiki/khyron_crash_zone.png",
      index: 1,
    },
    {
      stack: [],
      description:
        "Collaboration increases the chances of building the equipment on the planet in the designated timeframe. You will be on the Spaceship, your home base ...",
      title: "Community",
      url: "/docs/story/community",
      image: "img/wiki/mothership_interior.png",
      index: 2,
    },
    {
      stack:[],
      description:
        "Great, you purchased your right to mine a designated zone. There are a few more things to do before you extract resources. You’ll need a few robots that have the necessary tools to perform the operations. Build the robots first and you are ready to go ...",
      title: "Supplies",
      url: "/docs/story/supplies",
      image: "img/wiki/mine_blocks.png",
      index: 3,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">Story</h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Index;
