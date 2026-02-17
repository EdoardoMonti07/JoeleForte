import { Card, CardContent } from "../../../../components/ui/card";

const portfolioItems = [
  {
    image: "/image.png",
    title: "Un milione e mezzo durante il 2025",
    description:
      "Da 0 a €1.5 Milioni durante il 2025 con store online in paesi diversi",
  },
  {
    image: "/image-1.png",
    title: "700k di margine nel 2025",
    description: "Più del 33% di margine durante il 2025 in 3 store online",
  },
  {
    image: "/image-2.png",
    title: "186k di vendite lorde nello store italiano",
    description:
      "186.000€ di vendite lorde solamente nello store italiano nel mese di novembre 2025",
  },
];

export const PortfolioShowcaseSection = (): JSX.Element => {
  return (
    <section
      id="risultati"
      className="flex flex-col items-start gap-6 md:gap-8 lg:gap-[41px] w-full px-4 md:px-6 lg:px-[87px] py-8 md:py-12"
    >
      <h2 className="font-sans font-semibold text-primary-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
        I miei ultimi risultati
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[35px] w-full">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="bg-transparent border-0">
            <CardContent className="flex flex-col items-start gap-4 md:gap-6 lg:gap-[33px] p-0">
              <img
                className="w-full aspect-[4/3] object-contain"
                alt={item.title}
                src={item.image}
              />

              <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                <h3 className="[font-family:'Creato_Display-Bold',Helvetica] font-bold text-primary-white text-lg md:text-xl lg:text-[25px] tracking-[0] leading-7">
                  {item.title}
                </h3>

                <p className="[font-family:'Rubik',Helvetica] font-normal text-secondary-grey text-sm md:text-base lg:text-lg tracking-[0] leading-6 md:leading-7">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
