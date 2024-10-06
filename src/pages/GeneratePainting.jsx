import { useState } from "react";
import Title from "../components/Title";

const GeneratePainting = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.prompt.value);
    const form = new FormData();
    form.append("prompt", e.target.prompt.value);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": `import.meta.env.VITE_CLIP_DROP_API`,
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        console.log(buffer);
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const image_url = URL.createObjectURL(blob);
        setImages(image_url);
        // buffer here is a binary representation of the returned image
      });
  };
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
