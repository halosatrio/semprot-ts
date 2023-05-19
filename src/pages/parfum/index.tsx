import { useMemo } from "react";
import MainLayout from "@/components/MainLayout";
import AllParfumContent from "@/components/AllParfumContent";

import dataAllParfum from "@/data/all-parfum.json";
import { shuffleArray } from "@/utils/shuffle";

const ParfumIndexPage = () => {
  const shuffledData = useMemo(() => {
    const shuffledArray = shuffleArray(dataAllParfum);
    return shuffledArray;
  }, []);

  // console.log("shuffledData", shuffledData);

  return (
    <MainLayout page="parfum">
      <div className="mb-8">parfum index page</div>
      <AllParfumContent data={shuffledData} />
    </MainLayout>
  );
};

export default ParfumIndexPage;
