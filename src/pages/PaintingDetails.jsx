import { ImDownload } from "react-icons/im";
import { useLoaderData } from "react-router-dom";

const PaintingDetails = () => {
  const data = useLoaderData();
  const handleDownload = async () => {
    const response = await fetch(data?.imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data?.title.replace(/-/g, " ")}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 gap">
        <div>
          <img src={data?.imageUrl} alt={data?.title} className="w-full" />
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl capitalize text-orange-300">
            {data?.title.replace(/-/g, " ")}
          </h2>
          <div className="flex justify-start gap-6 items-center">
            <p className="p-3 border-black border-2 rounded-full transition-all duration-200 backdrop-blur-lg shadow-inner shadow-black">
              {data?.category}
            </p>
            <p className="p-3 border-black border-2 rounded-full  transition-all duration-200 backdrop-blur-lg shadow-inner shadow-black">
              {data?.type}
            </p>
          </div>
          <p>{data?.details}</p>
          <button
            onClick={handleDownload}
            className="flex justify-center items-center gap-3 mt-4 bg-orange-500 overflow-hidden py-2 px-4 text-white transition-all duration-200 hover:bg-orange-600"
          >
            Download Image <ImDownload className="animate-bounce"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
