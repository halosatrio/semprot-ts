import Link from "next/link";

import MainLayout from "@/components/MainLayout";
import Categories from "@/components/Categories";
import { notes, occastion } from "@/data/categories-data";

const CariParfumPage = () => {
  return (
    <MainLayout page="cari-parfum">
      <div className="flex flex-col w-full">
        <div className="border-b border-slate-800">
          <h1 className="text-center mb-6 text-3xl font-bold text-slate-600">
            Cari berdasarkan aroma
          </h1>
          <Categories data={notes} />
        </div>
        <div>
          <h1 className="text-center mt-8 mb-6 text-3xl font-bold text-slate-600">
            Cari berdasarkan kesempatan
          </h1>
          <Categories data={occastion} />
        </div>
        <Link
          href="/cari-parfum/all-parfum"
          className="mx-auto mt-8 w-2/4 py-2 font-bold shadow-md rounded-md text-white bg-crimson hover:bg-pink-pastel transform hover:-translate-y-0.5 duration-100 focus:-translate-y-0.5 focus:outline-none scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition animate-shadow"
        >
          <p className="text-slate-100 text-center">
            TAMPILKAN SEMUA PARFUM {`> >`}
          </p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default CariParfumPage;
