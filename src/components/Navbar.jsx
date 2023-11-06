import "@/static/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { signal } from "@preact/signals-react";
import { useEffect, useRef } from "react";
import $ from "jquery";

const links = {
  link_header: [
    {
      link: "Live",
    },
    {
      link: "Push",
    },
    {
      link: "Note",
    },
    {
      link: "Link",
    },
    {
      link: "Shop",
    },
    {
      link: "Packs",
    },
    {
      link: "Help",
    },
    {
      link: "Live",
    },
    {
      link: "Help",
    },
  ],
  link_more_on: [
    {
      link: "Blog",
      href: "#",
    },
    {
      link: "Ableton for the Classroom",
      href: "#",
    },
    {
      link: "Ableton for Colleges and Universities",
      href: "#",
    },
    {
      link: "Certified Training",
      href: "#",
    },
    {
      link: "About Ableton",
      href: "/about",
    },
    {
      link: "Jobs",
      href: "#",
    },
    {
      link: "Apprenticeships",
      href: "#",
    },
  ],
  link_from: [
    {
      header: "Loop",
      title:
        "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
      href: "#",
    },
    {
      header: "Learning Music",
      title: "Learn the fundamentals of music making right in your browser.",
      href: "#",
    },
    {
      header: "Learning Synths",
      title:
        "Get started with synthesis using a web-based synth and accompanying lessons.",
      href: "#",
    },
    {
      header: "Making Music",
      title: "Some tips from 74 Creative Strategies for Electronic Producers.",
      href: "#",
    },
  ],
};

const showLinks = signal(false);
const showMore = signal(false);

const showAllLinks = () => {
  showLinks.value = !showLinks.value;
};

const showAllMore = () => {
  showMore.value = !showMore.value;
};

const Navbar = ({ classnames }) => {
  const linksContainer = useRef(null);
  const linksRef = useRef(null);
  const moreFromRef = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1028) {
        showLinks.value = true;
      } else {
        showLinks.value = false;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const linksElement = linksRef.current;
    const moreFromElement = moreFromRef.current;

    if (linksElement && moreFromElement) {
      const linksHeight = linksElement.clientHeight;
      const moreFormHeight = moreFromElement.clientHeight;
      const totalHeight = linksHeight + moreFormHeight + 16;

      if (showLinks.value) {
        linksContainer.current.style.height = `${totalHeight}px`;
      } else {
        linksContainer.current.style.height = "0px";
      }
    }
  }, [showLinks.value]);

  const handleScroll = (direction) => {
    const scrollRef = scroll.current;
    const itemsWidth = 15 * 16 + 16; // assuming 1em = 16px
    const scrollAmount = direction === "left" ? -itemsWidth : itemsWidth;

    if (scrollRef) {
      const currentScrollLeft = scrollRef.scrollLeft;

      let newPosition = currentScrollLeft + scrollAmount;

      const animationDuration = 500;

      $(scrollRef).stop().animate(
        {
          scrollLeft: newPosition,
        },
        animationDuration
      );
    }
  };

  return (
    <>
      <nav
        className={`h-20 ${
          showLinks.value
            ? "bg-[#0000ff] text-white lg:bg-white lg:border-b-2 lg:border-solid lg:border-[#eee] lg:text-black"
            : "bg-white border-b-2 border-solid border-[#eee] text-black"
        } ${classnames}`}>
        <div className="relative lg:flex lg:h-full lg:p-4 lg:items-center">
          <div className="flex items-center justify-start p-4 transition-padding ease-in-out duration-[2s] lg:p-0">
            <Link to={"/"} id="link-hp-logo" className="flex items-center">
              <i
                className={`bx bxl-react bx-lg ${
                  showLinks.value ? "text-white lg:text-black" : null
                }`}></i>
            </Link>

            <div className="ml-4 lg:hidden" onClick={showAllLinks}>
              <button className="flex items-center justify-center text-lg font-bold">
                <div className="mr-[0.25rem]">Menu</div>
                <div
                  className={`mt-[1px] down-arrow ${
                    showLinks.value ? "active-arrow" : ""
                  }`}>
                  <i
                    className={`bx bxs-down-arrow text-[13px] ${
                      showLinks.value ? "text-white lg:text-black" : null
                    }`}></i>
                </div>
              </button>
            </div>
          </div>

          <div
            key={showLinks.value}
            className="w-full h-0 bg-[#0000ff] lg:w-auto overflow-hidden transition-all lg:flex text-base font-bold lg:items-center lg:bg-transparent"
            ref={linksContainer}>
            <ul
              className="mt-0 w-full flex link-a lg:flex-row flex-col lg:space-x-8 lg:items-center lg:justify-between"
              ref={linksRef}>
              <div className="flex px-4 lg:flex-row flex-col lg:space-x-8 lg:items-center">
                {links.link_header.map((linkItem, index) => (
                  <li key={index} className="pb-4 lg:pb-0">
                    <Link to={"#"} className="md:block w-full md:h-full">
                      {linkItem.link}
                    </Link>
                  </li>
                ))}
                <li className="hidden lg:block" onClick={showAllMore}>
                  <Link to={"#"} className="flex items-center justify-center">
                    More{" "}
                    <div className="mt-[1px] ml-1 flex">
                      <i className="bx bx-plus text-[16px]" />
                    </div>
                  </Link>
                </li>
              </div>
              <div className="flex px-4 lg:flex-row flex-col lg:space-x-8 lg:items-center">
                <li className="lg:text-[#0000ff] pb-4 lg:pb-0 text-lg lg:text-base">
                  <Link to={"#"}>Try Live for free</Link>
                </li>
                <li className=" pb-4 lg:pb-0">
                  <Link to={"#"}>Log in or register</Link>
                </li>
              </div>
            </ul>
            {/* click More + to show  */}
            {showMore.value || showLinks.value ? (
              <div className="px-4" ref={moreFromRef}>
                <section className="h-auto">
                  <h3 className="text-lg pb-4">More on Ableton.com:</h3>
                  <ul className="w-full flex link-a lg:flex-row flex-col lg:space-x-8 lg:items-center">
                    {links.link_more_on.map((linkItem, index) => (
                      <li key={index} className="pb-4 lg:pb-0">
                        <Link
                          to={`${linkItem.href}`}
                          style={{
                            color: showLinks.value ? "white" : "black",
                          }}
                          className="link-more-on-ab">
                          {linkItem.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="h-auto">
                  <div className="text-lg pb-4 flex justify-between items-center">
                    <h3>More from Ableton:</h3>
                    <div className="flex justify-between items-center w-[60px]">
                      <div
                        className="w-[25px] h-[25px] flex items-center rounded-full shadow-md shadow-[#b1c5ff] cursor-pointer lg:hidden"
                        onClick={() => handleScroll("left")}>
                        <i className="bx bx-chevron-left" />
                      </div>
                      <div
                        className="w-[25px] h-[25px] flex items-center rounded-full shadow-md shadow-[#b1c5ff] cursor-pointer lg:hidden"
                        onClick={() => handleScroll("right")}>
                        <i className="bx bx-chevron-right" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul
                      className="w-full flex link-a flex-row lg:space-x-8 lg:items-center snap-x snap-mandatory overflow-x-auto scrollbar-none"
                      ref={scroll}>
                      {links.link_from.map((linkItem, idx) => (
                        <li key={idx} className="min-w-[15em] mr-4 pb-4">
                          <Link to={linkItem.href}>
                            <div>
                              <h4>{linkItem.header}</h4>
                              <p className="font-normal">{linkItem.title}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

Navbar.propTypes = {
  classnames: PropTypes.string,
};

export default Navbar;
