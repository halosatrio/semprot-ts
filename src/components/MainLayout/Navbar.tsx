import Link from "next/link";

type NavbarProps = {
  page: string;
};

const Navbar = (props: NavbarProps) => {
  const navItemActive =
    "pb-0.5 text-pink-hot dark:text-pink-pastel border-b-2 border-pink-hot dark:border-pink-pastel";

  const navItem =
    "pb-0.5 border-b-2 border-transparent hover:border-pink-hot hover:text-pink-hot focus:border-pink-hot focus:text-pink-hot dark:hover:text-pink-pastel dark:hover:border-pink-pastel dark:focus:text-pink-pastel dark:focus:border-pink-pastel";

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between pt-6 pb-8 md:py-12 items-center">
      <div>
        <Link href="/">
          <p className="font-sans font-black tracking-wider no-underline text-center text-2xl text-pink-hot dark:text-pink-pastel hover:text-pink-pastel dark:hover:text-pink-hot mb-4 md:mb-0">
            Semprot
          </p>
        </Link>
      </div>

      <ul className="flex list-none justify-between md:justify-end text-sm sm:text-lg pt-1 font-bold space-x-6 mt-0 md:-mt-0.5">
        <li>
          <Link
            href="/parfum"
            className={props.page == "parfum" ? navItemActive : navItem}
          >
            cari parfum
          </Link>
        </li>
        <li>
          <Link
            href="/brand"
            className={props.page == "brand" ? navItemActive : navItem}
          >
            cari brand
          </Link>
        </li>
        <li>
          <Link
            href="/tentang"
            className={props.page == "tentang" ? navItemActive : navItem}
          >
            tentang
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
