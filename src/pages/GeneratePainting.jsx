import { useState } from "react";
import Title from "../components/Title";
import Loading from "./Loading";

const GeneratePainting = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading]=useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    
  };
  if (loading) {
    return <Loading/>
  }
  return (
    <div className="container">
      <Title>GeneratePainting</Title>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 mt-10 justify-center w-full"
      >
        <textarea
          type="text"
          name="prompt"
          placeholder="What kind of painting you want ..."
          className="textarea textarea-bordered w-10/12 py-4"
        />
        <button type="submit" className="w-10/12 rounded-xl">
          Generate
        </button>
      </form>
      <div className="grid lg:grid-cols-2 gap-3 mt-10">
        {images?.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratePainting;
