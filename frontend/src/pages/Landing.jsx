import Navbar from '../components/Navbar';
import AccordionImages from '../components/AccordionImages';
import SectionCards from '../components/SectionCards';

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <AccordionImages />
      <SectionCards />
    </div>
  );
}
