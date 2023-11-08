import { Link } from "react-router-dom";
import $ from "jquery";
import { effect } from "@preact/signals-react";
import { useRef } from "react";

export const FirstComponent = () => {
  const downIcon = useRef(null);
  effect(() => {
    const checkScreen = () => {
      const blogsection = document.getElementById("blog");
      if (blogsection) {
        const blogRect = blogsection.getBoundingClientRect();
        
        if (window.innerWidth < 1028 || blogRect.top < window.innerHeight && blogRect.bottom > 0) {
          downIcon.current.style.display = "none";
        } else {
          downIcon.current.style.display = "flex";
        }
      } else {
        // กรณีไม่มี element ที่มี id="blog"
        downIcon.current.style.display = "flex";
      }
    };

    window.addEventListener("scroll", checkScreen);
    window.addEventListener("resize", checkScreen);

    return () => {
      // นำออก event listeners เมื่อ component unmount
      window.removeEventListener("scroll", checkScreen);
      window.removeEventListener("resize", checkScreen);
    };
  });

  const handleClick = () => {
    const blogSectionId = "#blog";

    $("html, body").animate(
      {
        scrollTop: $(blogSectionId).offset().top,
      },
      1000
    );
  };

  return (
    <>
      <div className="lg:float-left lg:w-[58.33vw] xl:w-[933.33px]">
        <article className="relative bg-hp-image1 bg-no-repeat bg-center bg-cover w-full pb-[66.67%] cursor-pointer mb-[8.33vw] lg:mb-0">
          <Link
            to={"#"}
            className="w-full h-full absolute text-[#D5B3FF] p-[8.33vw] lg:p-[4.1667vw]">
            <h1>Update Lice and Push for free</h1>
            <div className="font-semibold flex items-center">
              <p className="underline">Download Live 11.3.10 </p>
              <i className="bx bx-chevron-right"></i>
            </div>
          </Link>
        </article>
      </div>
      {/* img2 */}
      <div className="w-[91.67vw] ml-[8.33vw] lg:ml-0 lg:float-right mt-[16.67vw] lg:w-[33.33vw] xl:w-[533.33px] xl:mt-[266.67px]">
        <article className="relative bg-hp-image2 bg-no-repeat bg-center bg-cover pb-[66.67%]">
          <Link
            to={"#"}
            className="w-full h-full absolute text-cyan-400 p-[8.33vw] lg:p-[2.083vw]">
            <h1 className="lg:text-2xl">Update Lice and Push for free</h1>
            <div className="font-semibold flex items-center">
              <p className="underline">Download Live 11.3.10 </p>
              <i className="bx bx-chevron-right"></i>
            </div>
          </Link>
        </article>
      </div>
      {/* img3 */}
      <div className="w-[91.67vw] lg:float-right lg:z-10 -mt-[16.67vw] lg:-mt-[4.167vw] xl:mt-[-66.67px] lg:relative lg:clear-both lg:mr-[25vw] xl:mr-[400px] lg:w-[33.33vw] xl:w-[533.33px]">
        <article className="relative bg-hp-image3 bg-no-repeat bg-center bg-cover pb-[66.67%]">
          <Link
            to={"#"}
            className="w-full h-full absolute text-yellow-200 p-[8.33vw] lg:p-[2.083vw]">
            <h1 className="lg:text-2xl">Update Lice and Push for free</h1>
            <div className="font-semibold flex items-center">
              <p className="underline">Download Live 11.3.10 </p>
              <i className="bx bx-chevron-right"></i>
            </div>
          </Link>
        </article>
      </div>

      <div className="w-full flex items-center justify-center" ref={downIcon}>
        <div
          className="z-10 cursor-pointer overflow-hidden bg-[#0000ff] fixed bottom-0 w-[60px] h-[60px] text-base whitespace-nowrap flex items-center justify-center transition-[bottom]"
          onClick={handleClick}
          id="down-icon"
          >
          <i className="bx bx-chevron-down text-white text-5xl"></i>
        </div>
      </div>
    </>
  );
};
