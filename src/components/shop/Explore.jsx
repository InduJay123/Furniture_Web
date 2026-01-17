const categories = [
  { title: "Living Room", items: 24 },
  { title: "Bedroom", items: 18 },
  { title: "Dining", items: 12 },
  { title: "Lighting", items: 15 },
  { title: "Storage", items: 9 },
];

const Explore = () => {
    return(
        <div className="bg-[#5A3E2B]/10 px-8 text-center">
            <h6 className="text-lg text-gray-400 tracking-widest mt-2 pt-4 mb-2"> Explore </h6>            
            <h2 className="text-5xl font-serif font-medium text-black/70 mb-4">Shop by Room</h2>
        
             <section className="px-6 md:px-20 lg:px-32 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className="bg-[#FBF9F6] p-6  hover:shadow-sm transition cursor-pointer"
                    >
                        <h3 className="text-xl font-medium text-black">
                        {cat.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                        {cat.items} items
                        </p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Explore;