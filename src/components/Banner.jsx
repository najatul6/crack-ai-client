import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="py-15  overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                
                <div className="w-full ">
                    <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                        <div className="w-11/12 sm:w-2/3 flex justify-center items-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">The Freedom to Create the Painting You Want</h1>
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"><Link to="/generate">Get Started</Link></button>
                           
                        </div>
                    </div>
                    
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>
  );
};

export default Banner;