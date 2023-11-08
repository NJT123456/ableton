import { FirstComponent } from "./childrencomponent/FirstComponent";
import { Second } from "./childrencomponent/Second";

const Home = () => {
  return (
    <div className="relative w-full xl:w-[1600px] bg-white">
      <main>
        <div className="pb-[8.33vw] overflow-hidden lg:pb-[133.33px]">
          <FirstComponent />
        </div>
        <Second />
      </main>
    </div>
  );
};

export default Home;
