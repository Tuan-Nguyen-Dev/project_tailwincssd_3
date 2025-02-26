export default function Categories() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {/* Living Room */}
      <div className="bg-gray-100 p-6 flex flex-col justify-between">
        <h2 className="text-2xl font-bold">Living Room</h2>
        <a href="#" className="text-black font-medium flex items-center">
          Shop Now <span className="ml-2">→</span>
        </a>
        <img
          src="https://plus.unsplash.com/premium_photo-1683121150169-4b0f6c92a3ac?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Living Room"
          className="mt-4 w-full object-contain"
        />
      </div>

      {/* Bedroom & Kitchen */}
      <div className="grid gap-6">
        {/* Bedroom */}
        <div className="bg-gray-100 p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">Bedroom</h2>
          <a href="#" className="text-black font-medium flex items-center">
            Shop Now <span className="ml-2">→</span>
          </a>
          <img
            src="https://via.placeholder.com/200"
            alt="Bedroom"
            className="mt-4 w-full object-contain"
          />
        </div>

        {/* Kitchen */}
        <div className="bg-gray-100 p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">Kitchen</h2>
          <a href="#" className="text-black font-medium flex items-center">
            Shop Now <span className="ml-2">→</span>
          </a>
          <img
            src="https://via.placeholder.com/200"
            alt="Kitchen"
            className="mt-4 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
