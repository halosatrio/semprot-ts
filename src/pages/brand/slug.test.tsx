import { render, screen } from "@testing-library/react";
import fs from "fs";
import path from "path";

import BrandSlugPage, {
  getStaticPaths,
  getStaticProps,
} from "@/pages/brand/[slug]";
import "@testing-library/jest-dom";
import dataMockedParfum from "@/data/brand/1945.json";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("fs");
jest.mock("path");

describe("BrandSlugPage", () => {
  const mockBrand = {
    id: "010",
    name: "Project 1945",
    slug: "1945",
    logo_url: "/images/logo-1945.jpg",
  };

  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockReturnValue(
      JSON.stringify(dataMockedParfum)
    );
    (path.join as jest.Mock).mockReturnValue("src/data/brand/1945.json");
  });

  it("renders correctly", () => {
    render(<BrandSlugPage data={dataMockedParfum} brand={mockBrand} />);

    expect(screen.getByText("Project 1945")).toBeInTheDocument();

    dataMockedParfum.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it("returns correct paths from getStaticPaths", async () => {
    const paths = await getStaticPaths();

    expect(paths).toEqual({
      paths: [
        {
          params: {
            slug: "hmns",
          },
        },
        {
          params: {
            slug: "onix",
          },
        },
        {
          params: {
            slug: "usual",
          },
        },
        {
          params: {
            slug: "saffco",
          },
        },
        {
          params: {
            slug: "alchemist",
          },
        },
        {
          params: {
            slug: "sansoe",
          },
        },
        {
          params: {
            slug: "carlnclaire",
          },
        },
        {
          params: {
            slug: "mine",
          },
        },
        {
          params: {
            slug: "medici",
          },
        },
        {
          params: {
            slug: "1945",
          },
        },
      ],
      fallback: "blocking",
    });
  });

  it("returns correct props from getStaticProps", async () => {
    const props = await getStaticProps({
      params: {
        slug: "1945",
      },
    });

    expect(props).toEqual({
      props: {
        data: dataMockedParfum,
        brand: mockBrand,
      },
    });
  });
});
