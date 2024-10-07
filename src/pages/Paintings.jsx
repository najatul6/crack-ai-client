import { useLoaderData } from "react-router-dom"

const Paintings = () => {
    const data = useLoaderData()
  return (
    <div>
        <img src={data?.url} alt="" />
    </div>
  )
}

export default Paintings