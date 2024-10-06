import Title from "../components/Title";

const GeneratePainting = () => {
  return (
    <div className="container">
      <Title>GeneratePainting</Title>
      <form>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn join-item">Generate</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default GeneratePainting;
