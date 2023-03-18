import Link from "next/link";
import dayjs from "dayjs";

type RecentPostProps = {
  posts: {
    slug: string;
    date: string | Date;
    title: string;
  }[];
};

const RecentPosts = ({ posts }: RecentPostProps) => {
  return (
    <div className="mb-16">
      <h2 className="mb-3 sm:mb-5 pl-px font-sans font-black text-2xl sm:text-3xl dark:text-pink-pastel">
        Recent Posts
      </h2>
      {posts.map(({ slug, title, date }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <div className="group font-serif flex mb-6 border-2 border-black dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md transform hover:-translate-y-0.5 duration-300 focus:-translate-y-0.5">
            <div className="py-4 px-7">
              <h4 className="mb-1 font-black text-xl sm:text-2xl group-hover:underline">
                {title}
              </h4>
              <h6 className="font-serif text-sm mb-4">
                {dayjs(date).format("DD MMMM YYYY")} / Satrio
              </h6>
            </div>
          </div>
        </Link>
      ))}
      <Link href="/blog">
        <button className="font-mono px-4 py-1.5 text-sm sm:text-base font-bold shadow-md rounded-md text-white dark:text-light-text bg-crimson dark:bg-pink-pastel hover:bg-pink-pastel dark:hover:bg-pink-hot transform hover:-translate-y-0.5 duration-300 focus:-translate-y-0.5">
          view all blog posts →
        </button>
      </Link>
    </div>
  );
};

export default RecentPosts;
