import Link from "next/link";

type ProjectProps = {
  projects: {
    slug: string;
    title: string;
    cover: string;
    description: string;
  }[];
};

const FeaturedProjects = ({ projects }: ProjectProps) => {
  return (
    <div className="mb-16">
      <h2 className="mb-3 sm:mb-5 pl-px font-sans font-black text-2xl sm:text-3xl dark:text-pink-pastel">
        Featured Projects
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-x-6">
        {projects.map(({ slug, title, cover, description }) => (
          <Link key={slug} href={`${slug}`}>
            <div className="group font-serif mb-6 sm:mb-8 border-2 border-black dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md transform hover:-translate-y-1 duration-300 focus:-translate-y-0.5">
              <div className="sm:h-60 md:h-72">
                <img
                  src={cover ? cover : "/404.png"}
                  alt="post"
                  className="w-full h-full object-cover border-box rounded-t-md"
                  loading="lazy"
                />
              </div>
              <div className="ml-7 py-4 pr-6">
                <h4 className="mb-2 text-xl font-black group-hover:underline">
                  {title}
                </h4>
                <p className="text-sm leading-6">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/project">
        <button className="font-mono px-4 py-1.5 sm:-mt-2 text-sm sm:text-base font-bold shadow-md rounded-md text-white dark:text-light-text bg-crimson dark:bg-pink-pastel hover:bg-pink-pastel dark:hover:bg-pink-hot transform hover:-translate-y-0.5 duration-300 focus:-translate-y-0.5">
          view all projects →
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProjects;
