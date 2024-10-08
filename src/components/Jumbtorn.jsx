
const Jumbtorn = () => {
  return (
    <div className="bg-gray-800 w-full font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
        <div className="p-8">
          <h1 className="sm:text-4xl text-2xl font-bold text-white">Readymadeui <span className="text-orange-400">Jumbotron Design</span></h1>
          <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
          <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh.</p>
          <button type="button"
            className="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Get started</button>
        </div>
        <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover shrink-0" />
      </div>
    </div>
  )
}

export default Jumbtorn