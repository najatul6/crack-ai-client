import { useLoaderData } from "react-router-dom";

const PaintingDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap">
        <div>
          <img src={data?.imageUrl} alt={data?.title} className="w-full" />
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl">{data?.title}</h2>
          <p className="p-3 border-black border-2 rounded-full  transition-all duration-200 backdrop-blur-lg shadow-inner shadow-black">{data?.category}</p>
          <p className="p-3 border-black border-2 rounded-full  transition-all duration-200 backdrop-blur-lg shadow-inner shadow-black">{data?.type}</p>
          <p>{data?.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;
