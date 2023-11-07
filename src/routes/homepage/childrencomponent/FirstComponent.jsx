import { effect, signal } from "@preact/signals-react";
import { Link } from "react-router-dom";

const showScrollDown = signal(true);

export const FirstComponent = () => {
  effect(() => {
    const getSectionId = document.getElementById('blog')
    const handleScroll = () => {
      if (window.scrollY >= getSectionId.offsetTop()) {
        showScrollDown.value = true;
      } else {
        showScrollDown.value = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className="lg:float-left lg:w-[58.33vw] xl:w-[881.33px]">
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
      <div className="w-[91.67vw] ml-[8.33vw] lg:float-right mt-[16.67vw] lg:w-[33.33vw] xl:w-[533.33px] xl:mt-[239.67px]">
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

      {showScrollDown && window.innerWidth >= 1028 && (
        <div className="z-10 cursor-pointer overflow-hidden bg-[#0000ff] fixed bottom-0 w-[60px] h-[60px] text-base whitespace-nowrap flex items-center justify-center transition-[bottom]">
          <i className="bx bx-chevron-down text-white text-5xl"></i>
        </div>
      )}
    </>
  );
};
