import { useLoaderData } from "react-router-dom"

const Paintings = () => {
    const data = useLoaderData()
    console.log(data);
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