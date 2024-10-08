import { useContext, useState } from "react";
import Title from "../components/Title";
import Loading from "./Loading";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const GeneratePainting = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const painting_types = [
    "Oil Painting",
    "Watercolor Painting",
    "Acrylic Painting",
    "Digital Painting",
    "Mixed Media Painting",
    "Gouache Painting",
    "Pastel Painting",
    "Globe Painting",
    "Encaustic Painting",
    "Fresco Painting",
    "Impasto Painting",
    "Miniature Painting",
    "Abstract Painting",
    "Realistic/Representational Painting",
  ];

  const painting_categories = [
    "Colorful",
    "Black and White",
    "Monochromatic",
    "Landscape",
    "Portrait",
    "Still Life",
    "Abstract",
    "Impressionistic",
    "Realistic",
    "Surrealistic",
    "Cultural",
    "Futuristic",
    "Contemporary",
    "Naturalistic",
  ];
  const [activeCategory, setActiveCategory] = useState("");
  const [activeType, setActiveType] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    if (activeCategory?.length === 0) {
      return Swal.fire("error", "Please select a category !", "error");
    }
    if (activeType?.length === 0) {
      return Swal.fire("error", "Please select a type !", "error");
    }
    if (prompt?.length < 10) {
      return Swal.fire("error", "Prompt should be at least 10 characters long!", "error");
    }
    setLoading(true);
    axios.post("http://localhost:5000/paintings/generate", {
      prompt,
      type: activeType,
      category: activeCategory,
      email: user?.email,
    }).then(res=>{
      if(res?.data?.insertedId){
        Swal.fire("success", "Your painting has been generated successfully!", "success");
        navigate(`/paintings/${res?.data?.insertedId}`);
        setLoading(false);
      }
    })
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container"> 
      <Title>GeneratePainting</Title>
      <div className="grid md:grid-cols-2 gap-3 mt-10">
        {/* Category */}
        <div>
          <h2 className="text-xl font-bold">Choose A Category</h2>
          <div className="space-x-3 space-y-2 flex flex-wrap justify-center items-center">
            {painting_categories?.map((category, index) => (
              <button
                key={index}
                className={`${activeCategory === category && "bg-orange-400"}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Type */}
        <div>
          <h2 className="text-xl font-bold">Choose A Type</h2>
          <div className="space-x-3 space-y-2 flex flex-wrap justify-center items-center">
            {painting_types?.map((type, index) => (
              <button
                key={index}
                className={`${activeType === type && "bg-orange-400"}`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 mt-5 justify-center w-full"
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
    </div>
  );
};

export default GeneratePainting;
