import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./Seo";

type MainLayoutProps = {
  page: string;
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const MainLayout = (props: MainLayoutProps) => {
  let px = props.page === "home" ? "px-0" : "px-5";

  return (
    <>
      <div className="max-w-4xl m-auto py-0 px-3 sm:px-6 antialiased">
        <SEO title={props.title} description={props.description} />
        <Navbar page={props.page} />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
