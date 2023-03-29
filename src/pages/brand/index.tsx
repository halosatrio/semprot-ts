import MainLayout from "@/components/MainLayout";

import dataAllBrands from "@/data/brands.json";
import Link from "next/link";

const BrandIndexPage = () => {
  return (
    <MainLayout page="brand">
      <div className="mb-8">brand index page</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dataAllBrands.map((item) => (
          <Link href={`brand/${item.slug}`} key={item.id}>
            <div className="p-4 border border-gray-500 rounded-md brand-grid">
              <img
                className="object-fill h-56 w-56 m-auto rounded-full"
                src={item.logo_url}
                alt={item.name}
              />
              <h2 className="text-center font-bold text-xl pt-2 mt-8 border-t">
                {item.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default BrandIndexPage;
