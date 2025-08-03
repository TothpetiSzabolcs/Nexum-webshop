import { useItems } from "../contexts/useItems";
import { FaTshirt, FaLaptop, FaChair, FaBook } from "react-icons/fa";

const LeftSideBar = () => {
  const { items } = useItems();
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="w-1/4 h-full bg-transparent backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Categories</h1>
        {uniqueCategories.map((category) => (
          <button key={category} className="w-full h-10 flex justify-start items-center gap-4 pl-10">
            {category === "Clothing" && (<div className="flex justify-center items-center gap-4">
              <FaTshirt size={20} />
              <p>{category}</p>
              </div>
              )}
              {category === "Electronics" && (<div className="flex justify-center items-center gap-4">
                <FaLaptop size={20} />
                <p>{category}</p>
                </div>
                )}
                {category === "Furniture" && (<div className="flex justify-center items-center gap-4">
                  <FaChair size={20} />
                  <p>{category}</p>
                  </div>
                  )}
                  {category === "Book" && (<div className="flex justify-center items-center gap-4">
                    <FaBook size={20} />
                    <p>{category}</p>
                    </div>
                    )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar