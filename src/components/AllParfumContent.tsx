import { DataParfum } from "@/types/data";
import Link from "next/link";
import { useState } from "react";

type AllParfumContentProps = {
  data: DataParfum[];
};

const AllParfumContent = (props: AllParfumContentProps) => {
  const { data } = props;

  const [visibleData, setVisibleData] = useState<DataParfum[]>(
    data.slice(0, 9)
  );

  const loadMoreData = () => {
    const currentVisibleCount = visibleData.length;
    const newData = data.slice(currentVisibleCount, currentVisibleCount + 9);
    setVisibleData((prevData) => [...prevData, ...newData]);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {visibleData.map((item) => (
          <Link href={`/parfum/${item.slug}`} key={item.id}>
            <div className="p-4 border border-gray-500 rounded-md brand-grid">
              <img
                className="object-fill h-60 w-60 m-auto rounded-md"
                src={item.image}
                alt={item.name}
              />
              <h2 className="font-bold text-xl mt-4 truncate">{item.name}</h2>
              <p>{item.brand}</p>
            </div>
          </Link>
        ))}
      </div>
      {visibleData.length < data.length && (
        <button
          className="mx-auto mt-8 w-2/4 py-1.5 font-bold shadow-md rounded-md text-white bg-crimson hover:bg-pink-pastel transform hover:-translate-y-0.5 duration-100 focus:-translate-y-0.5 focus:outline-none scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition animate-shadow"
          onClick={loadMoreData}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default AllParfumContent;
