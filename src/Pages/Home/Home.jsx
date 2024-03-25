import Books from "../../Components/Books";
import Hero from "../../Components/Hero";


const Home = () => {
    return (
        <div className="w-[1280px] mx-auto">
          <Hero/>
          <Books/>
        </div>
    );
};

export default Home;