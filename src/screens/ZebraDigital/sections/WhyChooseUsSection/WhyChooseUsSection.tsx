import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <img
        className="absolute top-0 left-0 md:left-7 w-[200px] md:w-[400px] lg:w-[500px] h-auto md:h-[388px] pointer-events-none opacity-50 md:opacity-100"
        alt="Design elements"
        src="/design-elements.png"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-[90px]">
          <div className="relative w-full lg:w-[606.58px] flex-shrink-0 order-2 lg:order-1">
            <img
              className="w-full h-auto object-cover"
              alt="Why choose Zebra"
              src="/image-3.png"
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-[27px] w-full lg:w-auto order-1 lg:order-2">
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h2 className="font-semibold text-primary-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
                Perché scegliere Joele Forte
              </h2>

              <p className="max-w-full md:max-w-[468px] [font-family:'Rubik',Helvetica] font-normal text-secondary-grey text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                Ho aiutato decine di imprenditori a scalare i loro brand su
                Shopify con strategie collaudate. Risultati garantiti: dai 0 a
                milioni di euro in revenue.
              </p>
            </div>

            <Button
              onClick={() =>
                window.open("https://www.instagram.com/joeleforte/", "_blank")
              }
              className="w-[147px] h-[47px] bg-[#6E64D5] hover:bg-[#5850AA] border-none transition-colors flex-shrink-0 rounded-full"
            >
              <span className="[font-family:'Rubik',Helvetica] font-medium text-primary-white text-sm lg:text-base tracking-[0.48px]">
                Contattami
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
