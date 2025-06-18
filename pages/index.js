import { useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const [projectGroupsToShow, setProjectGroupsToShow] = useState(1);
  const visibleProjects = data.projects.slice(0, projectGroupsToShow).flat();
  const hasMoreProjects = projectGroupsToShow < data.projects.length;
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const handleShowMore = () => {
    setProjectGroupsToShow(data.projects.length);
    setProjectsExpanded(true);
  };
  const handleHideProjects = () => {
    setProjectGroupsToShow(1);
    setProjectsExpanded(false);
  };
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5 " />
        </div>

        {/* Projects Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-8 flex justify-center">
            {!projectsExpanded && hasMoreProjects && (
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 transition"
              >
                View More
              </button>
            )}

            {projectsExpanded && (
              <button
                onClick={handleHideProjects}
                className="px-6 py-3 bg-violet-700 text-white rounded hover:bg-violet-800 transition"
              >
                Hide Projects
              </button>
            )}
          </div>

          {!hasMoreProjects && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Explore More on GitHub
              </h2>

              <a
                href="https://github.com/RhexNiebres"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden w-full"
              >
                <div className="w-full overflow-hidden">
                  <div className="flex gap-6 w-max animate-scrollRight">
                    {[...data.githubCarousel, ...data.githubCarousel].map(
                      (item, index) => (
                        <div
                          key={index}
                          className="min-w-[300px] laptop:min-w-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        >
                          <img
                            src={item.image}
                            alt={`GitHub project ${item.id}`}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Edit Button */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        {/* About Section */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
