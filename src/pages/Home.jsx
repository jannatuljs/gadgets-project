import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
 
 
import Cards from "../components/Cards";
 
 
const Home = () => {
 
  // Fetch products when component mounts
   
  return (
    <div className="home-container">
      {/* Banner */}
      <Banner />

      {/* Heading */}
      <Heading />

     

      <div className="home    ">
        
         

         <div className=" ">
         <Cards/>
         </div>
         
      </div>
    </div>
  );
};

export default Home;
