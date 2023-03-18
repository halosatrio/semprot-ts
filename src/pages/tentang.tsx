import MainLayout from "@/components/MainLayout";

const TentangPage = () => {
  return (
    <MainLayout page="tentang">
      <div>tentang page</div>
      <p className="mt-8">
        ceritanya mau bikin web katalog yg isinya parfum lokal. mirip-mirip
        kayak fragrantica gitu deehhh
      </p>
      <p className="mt-4 mb-2">TODO:</p>
      <ul className="pl-6 list-decimal">
        <li>lengkapin data parfum (step paling malesin)</li>
        <li>wireframming</li>
        <li>lanjut design webnya dengan design yg lebih serius</li>
        <li>tentukan colors</li>
        <li>rapihin components</li>
        <li>
          define data types (especially notes: string | top, middle, base)
        </li>
      </ul>
    </MainLayout>
  );
};

export default TentangPage;
