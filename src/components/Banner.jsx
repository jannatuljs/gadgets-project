 import image from "../assets/banner.jpg"
 
const Banner = () => {
    return (
       <div className="mb-80">
          <div
  className=" hero min-h-[400px]  bg-purple-600 relative"
   >
  <div className="hero-overlay opacity-80 "></div>
  <div className=" hero-content text-neutral-content text-center">
    <div className=" max-w-md">
      <h1 className="mb-5 text-2xl font-bold  ">Upgrade Your Tech Accessorize With Gadget Heaven Accessorize</h1>
      <p className="mb-5">
        Explore the latest gadgets that will take your experience to the next level.
        From smart devices to the coolest accessories,We have it all!
      </p>
      <button className="btn rounded-full text-lg font-semibold text-purple-600"> Shop Now</button>
    </div>
      
  </div>
  <div className="w-1/2 ml-14 absolute mt-[600px]  border-t-8 border-l-8 border-r-8  rounded-2xl "> 
 <img className="rounded-2xl" src= {image} alt=""/>
</div>
</div>
 
       </div>
 
    );
};

export default Banner;