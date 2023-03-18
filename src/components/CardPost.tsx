import Link from "next/link";

type CardPostProps = {
  slug: string;
  title: string;
  date: Date | string;
  description: string;
  image?: string;
};

const CardPost = (props: CardPostProps) => {
  const { slug, title, date, description, image } = props;

  return (
    <Link key={slug} href={`/blog/${slug}`}>
      <div className="group font-serif flex mb-6 min-h-32 border-2 border-black dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md transform hover:-translate-y-0.5 duration-300 focus:-translate-y-0.5">
        <img
          src={image ? image : "/404.png"}
          alt={slug}
          className="w-36 object-cover border-box hidden md:block rounded-l-md"
          loading="lazy"
        />
        <div className="ml-7 py-4 pr-6">
          <h4 className="mb-1 font-black text-2xl group-hover:underline">
            {title}
          </h4>
          <h6 className="font-serif text-sm mb-4">
            <>{date} / Satrio</>
          </h6>
          <p className="leading-6">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
