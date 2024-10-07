import PaintingCard from "../components/PaintingCard";

const Paintings = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 gap-5">
        {data.map((painting) => (
          <PaintingCard key={painting._id} painting={painting}></PaintingCard>
        ))}
      </div>
    </div>
  )
}

export default Paintings