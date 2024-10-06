import Title from "../components/Title";

const GeneratePainting = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.prompt.value);
    const form = new FormData();
    form.append("prompt", e.target.prompt.value);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": YOUR_API_KEY,
      },
      body: form,
    })
    //   .then((response) => response.arrayBuffer())
    //   .then((buffer) => {
    //     // buffer here is a binary representation of the returned image
    //   });
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
    </div>
  );
};

export default GeneratePainting;
