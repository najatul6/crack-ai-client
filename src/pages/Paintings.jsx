import { useLoaderData } from "react-router-dom"

const Paintings = () => {
    const data = useLoaderData()
    console.log(data);
  return (
    <div>
        <img src={data?.imageUrl} alt="" />
    </div>
  )
}

export default Paintings