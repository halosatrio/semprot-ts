import { render, screen, fireEvent } from '@testing-library/react';
import AllParfumContent from '@/components/AllParfumContent';
import dataAllParfum from "@/data/all-parfum.json";

describe('AllParfumContent', () => {
  it('renders correctly', () => {
    render(<AllParfumContent data={dataAllParfum} />);

    dataAllParfum.slice(0, 9).forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('loads more data when button is clicked', () => {
    render(<AllParfumContent data={dataAllParfum} />);

    fireEvent.click(screen.getByText('Load More'));

    dataAllParfum.slice(0, 18).forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
