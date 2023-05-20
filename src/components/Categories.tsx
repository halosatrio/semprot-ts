import Link from "next/link";

type CategoriesProps = {
  data: {
    id: string;
    label: string;
    url: string;
    image: string;
    color: string;
  }[];
};

const Categories = (props: CategoriesProps) => {
  const { data } = props;

  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} href={item.url}>
          <div className="flex border border-red-400 rounded-md mb-4 justify-between items-center">
            <h1 className="font-semibold text-3xl text-zinc-600 p-4">
              {item.label}
            </h1>
            <div className="w-2/4 h-32">
              <img
                className="object-cover w-full h-full custom-gradient"
                src={item.image}
                alt={item.label}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
