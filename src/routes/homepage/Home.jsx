import { FirstComponent } from "./childrencomponent/FirstComponent";
import { Second } from "./childrencomponent/Second";

const Home = () => {
  return (
    <div className="relative">
      <main className="block">
        <div className="pb-8.33vw">
          <FirstComponent />
        </div>
        <Second />
      </main>
    </div>
  );
};

export default Home;
