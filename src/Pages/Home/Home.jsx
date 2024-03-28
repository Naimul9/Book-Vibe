import Books from "../../Components/Books";
import Hero from "../../Components/Hero";


const Home = () => {
    return (
        <div className="lg:w-[1170px] w-11/12 mx-auto">
          <Hero/>
          <Books/>
          
        </div>
    );
};

export default Home;