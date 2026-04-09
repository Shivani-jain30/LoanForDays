
import Banner from "@/components/HomePage/Banner";
import WhyTrust from "@/components/HomePage/WhyTrust";
import { ModeToggle } from "@/components/ModeToggle";
import LoanCalc from "@/components/LoanCalc";

export default function Home() {
  return (
    <div>
      <Banner/>
      <WhyTrust/>
      <LoanCalc/>
    </div>
  );
}
