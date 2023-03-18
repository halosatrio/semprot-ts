import MainLayout from "@/components/MainLayout";

import dataAllParfum from "@/data/all-parfum.json";
import Link from "next/link";

const ParfumIndexPage = () => {
  return (
    <MainLayout page="parfum">
      <div className="mb-8">parfum index page</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dataAllParfum.map((item) => (
          <Link href={`parfum/${item.slug}`} key={item.id}>
            <div className="p-4 border border-gray-500 rounded-md">
              <h2>{item.name}</h2>
              <p>{item.brand}</p>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default ParfumIndexPage;
