import { Button } from "../../../../components/ui/button";

export const ContactAndLegalSection = (): JSX.Element => {
  return (
    <footer
      id="inizia-ora"
      className="relative w-full bg-transparent py-8 md:py-12 lg:py-16 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[34px] z-10">
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h2 className="[font-family:'Creato_Display-Bold',Helvetica] font-bold text-primary-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[0] leading-normal">
                Inizia la tua crescita oggi
              </h2>

              <p className="max-w-full md:max-w-[468px] font-normal text-secondary-grey text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                Rispondi “ECOM” ad una storia e ti dirò come scalare il tuo
                brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-6 lg:gap-[43px]">
              <Button
                onClick={() =>
                  window.open("https://www.instagram.com/joeleforte/", "_blank")
                }
                className="w-[147px] h-[47px] bg-[#6E64D5] hover:bg-[#5850AA] font-medium text-primary-white text-sm md:text-base tracking-[0.48px] leading-[17px] transition-colors flex-shrink-0 rounded-full"
              >
                Contattami
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block w-full h-[300px] lg:h-[400px]">
            <img
              className="absolute top-[-28px] left-0 w-full max-w-[499px] h-auto lg:h-[367px]"
              alt="Background"
              src="/background.png"
            />

            <img
              className="relative w-full max-w-[395px] h-auto lg:h-[399px] object-contain ml-auto"
              alt="Footer image"
              src="/footer-image.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
