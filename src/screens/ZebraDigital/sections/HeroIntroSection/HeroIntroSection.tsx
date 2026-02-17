import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { useCallback } from "react";

const navigationItems = [
  { label: "Chi Sono", isActive: true, href: "#" },
  { label: "Servizi", isActive: false, href: "#servizi" },
  { label: "Risultati", isActive: false, href: "#risultati" },
  { label: "Inizia ora", isActive: false, href: "#inizia-ora" },
];

export const HeroIntroSection = (): JSX.Element => {
  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <section className="relative w-full min-h-screen flex flex-col gap-6 md:gap-10 lg:gap-[42px] bg-[url(/background-2.png)] bg-cover bg-center">
      <header className="w-full px-10 md:px-20 lg:px-32 pt-4 md:pt-6 lg:pt-[27px]">
        <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <div className="font-extrabold text-primary-white text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-normal whitespace-nowrap">
            <span className="text-white">Joele</span>
            <span className="text-[#6E64D5]"> Forte</span>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-start gap-6 lg:gap-[50px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className={`flex flex-col items-start gap-2 [font-family:'Rubik',Helvetica] font-medium text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer ${
                      item.isActive
                        ? "text-secondary-grey"
                        : "text-secondary-grey hover:text-primary-white transition-colors"
                    }`}
                  >
                    {item.label}
                    {item.isActive && (
                      <span className="w-[58px] h-0.5 bg-secondary-grey" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-[121px] px-10 md:px-20 lg:px-32 flex-1 mx-auto w-full max-w-full">
        <div className="flex flex-col items-center lg:items-start gap-8 md:gap-11 max-w-full lg:max-w-[507px] w-full lg:w-auto text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-[22px]">
            <h1 className="font-extrabold text-primary-white text-3xl md:text-4xl lg:text-6xl tracking-[0] leading-normal">
              Crea Brand Milionari con Shopify
            </h1>

            <p className="max-w-full lg:max-w-[468px] font-normal text-secondary-grey text-base md:text-lg tracking-[0] leading-6 md:leading-7">
              Scopri come ho generato +5 milioni di euro in soli 18 mesi con
              Shopify. Strategie provate e testate per scalare il tuo ecommerce
              e dominare il tuo mercato.
            </p>
          </div>

          <Button
            onClick={() =>
              window.open("https://www.instagram.com/joeleforte/", "_blank")
            }
            className="w-[147px] h-[47px] bg-[#6E64D5] hover:bg-[#5850AA] [font-family:'Rubik',Helvetica] font-medium text-primary-white text-sm lg:text-base tracking-[0.48px] leading-[17px] transition-colors rounded-full"
          >
            Contattami
          </Button>
        </div>

        <img
          className="w-full lg:w-[612px] h-auto lg:h-[652px] object-cover max-w-full mx-auto"
          alt="Cover image"
          src="/cover-image.png"
        />
      </main>
    </section>
  );
};
