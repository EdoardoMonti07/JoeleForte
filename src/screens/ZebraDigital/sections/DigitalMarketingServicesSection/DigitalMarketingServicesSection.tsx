import { Card, CardContent } from "../../../../components/ui/card";

const services = [
  {
    icon: "/icon.png",
    title: "Scelta strategica dei prodotti",
    iconWidth: "w-[74px]",
    iconHeight: "h-[67.83px]",
    gap: "gap-5",
    topPadding: "top-12",
  },
  {
    icon: "/icon-1.png",
    title: "Posizionamento competitivo",
    iconWidth: "w-[74px]",
    iconHeight: "h-[54.27px]",
    gap: "gap-[23px]",
    topPadding: "top-[53px]",
  },
  {
    icon: "/icon-2.png",
    title: "Programmi di Mentorship",
    iconWidth: "w-[77px]",
    iconHeight: "h-[49.25px]",
    gap: "gap-[23px]",
    topPadding: "top-[57px]",
    iconMargin: "mt-[-1.50px] ml-[-1.50px]",
  },
  {
    icon: "/icon-3.png",
    title: "Sequenze email",
    iconWidth: "w-[62.91px]",
    iconHeight: "h-[63.18px]",
    gap: "gap-[23px]",
    topPadding: "top-[39px]",
  },
  {
    icon: "/icon-4.png",
    title: "Personal Branding",
    iconWidth: "w-[64.77px]",
    iconHeight: "h-[64.77px]",
    gap: "gap-[19px]",
    topPadding: "top-[41px]",
  },
  {
    icon: "/icon-5.png",
    title: "Pubblicità a Pagamento (PPC)",
    iconWidth: "w-[40.2px]",
    iconHeight: "h-[59.62px]",
    gap: "gap-6",
    topPadding: "top-[41px]",
  },
];

export const DigitalMarketingServicesSection = (): JSX.Element => {
  return (
    <section
      id="servizi"
      className="relative w-full py-12 md:py-20 lg:py-32 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6 md:gap-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {services.slice(0, 2).map((service, index) => (
                <Card
                  key={index}
                  className="bg-[url(/background-3.svg)] bg-[100%_100%] border-0 overflow-hidden"
                >
                  <CardContent
                    className={`flex flex-col items-start ${service.gap} ${service.topPadding} p-6 md:p-8`}
                  >
                    <img
                      className={`${service.iconWidth} ${service.iconHeight} ${service.iconMargin || ""}`}
                      alt="Icon"
                      src={service.icon}
                    />
                    <h3 className="[font-family:'Rubik',Helvetica] font-medium text-secondary-grey text-base md:text-lg lg:text-lg tracking-[0] leading-6 md:leading-7 break-words">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-7">
              {services.slice(2, 5).map((service, index) => (
                <Card
                  key={index}
                  className="bg-[url(/background-3.svg)] bg-[100%_100%] border-0 overflow-hidden"
                >
                  <CardContent
                    className={`flex flex-col items-start ${service.gap} ${service.topPadding} p-4 md:p-8`}
                  >
                    <img
                      className={`${service.iconWidth} ${service.iconHeight} ${service.iconMargin || ""}`}
                      alt="Icon"
                      src={service.icon}
                    />
                    <h3 className="[font-family:'Rubik',Helvetica] font-medium text-secondary-grey text-sm md:text-base tracking-[0] leading-6 md:leading-7 break-words">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover -z-10"
              alt="Background"
              src="/background-1.png"
            />
            <div className="flex flex-col gap-4 md:gap-[22px] pt-8 md:pt-12 lg:pt-[171px] pl-4 md:pl-8 lg:pl-[105px] h-full justify-center lg:justify-start">
              <h2 className="font-semibold text-primary-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
                I miei servizi per far crescere il tuo brand
              </h2>
              <p className="max-w-full md:max-w-[480px] [font-family:'Rubik',Helvetica] font-normal text-secondary-grey text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                Strategie complete di digital marketing per scalare il tuo
                ecommerce su Shopify e raggiungere milioni di euro in revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
