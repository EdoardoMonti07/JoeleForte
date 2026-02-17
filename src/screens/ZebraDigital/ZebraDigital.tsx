import { ContactAndLegalSection } from "./sections/ContactAndLegalSection";
import { DigitalMarketingServicesSection } from "./sections/DigitalMarketingServicesSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { PortfolioShowcaseSection } from "./sections/PortfolioShowcaseSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const ZebraDigital = (): JSX.Element => {
  return (
    <div className="bg-[#0c0c0c] w-full relative">
      <HeroIntroSection />
      <DigitalMarketingServicesSection />
      <WhyChooseUsSection />
      <PortfolioShowcaseSection />
      <ContactAndLegalSection />
    </div>
  );
};
