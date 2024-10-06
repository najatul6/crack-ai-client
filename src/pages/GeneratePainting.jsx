import Title from "../components/Title";

const GeneratePainting = () => {
  return (
    <div className="container">
      <Title>GeneratePainting</Title>

      <form className="flex flex-wrap gap-3 mt-10 justify-center w-full">
        <textarea
          type="text"
          placeholder="What kind of painting you want ..."
          className="textarea textarea-bordered w-11/12 py-4"
        />
        <button className="w-11/12 rounded-xl">Generate</button>
      </form>
    </div>
  );
};

export default GeneratePainting;
