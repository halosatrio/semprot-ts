const Footer = () => {
  return (
    <footer className="mt-12 font-serif leading-4 h-28 md:h-20 text-sm border-t border-gray-400">
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-3 md:mb-1">
        <div className="my-3 md:my-0">
          2023 with ❤️ by{" "}
          <a
            href="https://instagram.com/stariobyau"
            target="_blank"
            className="underline font-bold text-crimson dark:text-pink-pastel hover:text-pink-pastel hover:no-underline"
          >
            Satrio Bayu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
