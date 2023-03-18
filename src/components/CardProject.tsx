import Link from "next/link";

type CardProjectPorps = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const CardProject = (props: CardProjectPorps) => {
  const { slug, title, description, image } = props;

  return (
    <Link key={slug} href={`/project/${slug}`}>
      <div className="group font-serif mb-6 sm:mb-12 min-h-32 border-2 border-pink-hot dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md transform hover:-translate-y-1 duration-300 focus:-translate-y-0.5">
        <div className="h-auto">
          <img
            src={image ? image : "/404.png"}
            alt={title}
            className="w-full h-full object-cover border-box rounded-t-md"
            loading="lazy"
          />
        </div>
        <div className="py-4 px-4 sm:py-6 sm:px-8">
          <h4 className="mb-2 sm:mb-4 text-xl sm:text-2xl font-black dark:text-pink-pastel group-hover:underline">
            {title}
          </h4>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
