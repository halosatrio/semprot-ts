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
          <div
            className={`flex rounded-lg mb-8 justify-between items-center ${item.color}`}
          >
            <h1 className="font-semibold text-3xl text-neutral-100 ml-8">
              {item.label}
            </h1>
            <div className="w-2/4 h-32 rounded-lg">
              <img
                className="object-cover w-full h-full custom-gradient rounded-lg"
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
