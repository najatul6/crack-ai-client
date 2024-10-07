import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const PaintingCard = ({ painting }) => {
  return (
    <div className="relative hover:mt-2 transition-all duration-200 rounded-lg ">
      <img src={painting?.url} alt="" className="rounded-lg" />
      <div className="detail absolute transition-all duration-200 inset-0 w-full h-full hover:opacity-80  bg-stone-600 opacity-5 flex flex-col gap-3 justify-center items-center rounded-lg">
        <p className="text-2xl text-center text-white">{painting?.title}</p>
        <button>
          <Link to={`/paintings/${painting?._id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

PaintingCard.propTypes = {
  painting: PropTypes.object.isRequired,
};

export default PaintingCard;