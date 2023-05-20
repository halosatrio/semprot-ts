import Link from "next/link";

import MainLayout from "@/components/MainLayout";
import Categories from "@/components/Categories";
import { notes, occastion } from "@/data/categories-data";

const CariParfumPage = () => {
  return (
    <MainLayout page="cari-parfum">
      <div className="flex flex-col w-full">
        <div className="mx-auto mb-4">Cari berdasarkan aroma</div>
        <Categories data={notes} />
        <div className="mx-auto mt-8 mb-4">Cari berdasarkan kesempatan</div>
        <Categories data={occastion} />
        <Link href="/cari-parfum/all-parfum">
          <button className="w-full mt-8 py-2 font-bold shadow-md rounded-md text-white bg-crimson hover:bg-pink-pastel transform hover:-translate-y-0.5 duration-100 focus:-translate-y-0.5 focus:outline-none scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition animate-shadow">
            TAMPILKAN SEMUA PARFUM
          </button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default CariParfumPage;
