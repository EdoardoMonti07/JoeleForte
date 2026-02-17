import { Separator } from "../../../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const PartnerLogosSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 md:gap-12 lg:gap-16 w-full relative px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">
      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[30px] bg-transparent h-auto p-0 border-0 w-full md:w-auto">
          <TabsTrigger
            value="featured"
            className="[font-family:'Creato_Display-Bold',Helvetica] font-bold text-primary-white text-lg md:text-xl lg:text-[25px] tracking-[0] leading-7 whitespace-nowrap data-[state=active]:bg-transparent data-[state=active]:text-primary-white data-[state=inactive]:opacity-50 data-[state=inactive]:text-secondary-grey p-0 border-0 shadow-none"
          >
            Dove Sono Stato Pubblicato
          </TabsTrigger>

          <Separator
            orientation="vertical"
            className="hidden md:block h-[29px] w-px bg-primary-white"
          />

          <TabsTrigger
            value="certification"
            className="[font-family:'Creato_Display-Bold',Helvetica] font-bold text-secondary-grey text-lg md:text-xl lg:text-[25px] tracking-[0] leading-7 whitespace-nowrap data-[state=active]:bg-transparent data-[state=active]:text-primary-white data-[state=inactive]:opacity-50 data-[state=inactive]:text-secondary-grey p-0 border-0 shadow-none"
          >
            Mie Certificazioni
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-8 overflow-x-auto w-full">
          <img className="w-full h-auto" alt="Brands" src="/brands.svg" />
        </TabsContent>

        <TabsContent
          value="certification"
          className="mt-8 overflow-x-auto w-full"
        >
          <img
            className="w-full h-auto"
            alt="Certifications"
            src="/brands.svg"
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};
