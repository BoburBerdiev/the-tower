import { SectionTitle, SectionUI , MesengerList } from '@/components/'

const Contact = () => {
  return (
    <div>
      <SectionUI bgFigureTopPostion={'-top-20 -left-1/2'} padding={'py-10 md:py-20 '}>
        <div className="grid items-center grid-cols-1 gap-10">
          {/* section title */}
          <div>
            <div className="mb-10">
              <SectionTitle justify={'justify-center'} title={'Свяжитесь с нами'} />
            </div>
            <div data-aos='fade-up' data-aos-once data-aos-delay='0.2' className="space-y-5 text-center">
              <a className="block" href={`tel:${9999999}`}>
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">
                    Телефон:
                  </span>
                  <span>+998 55 512 11 00</span>
                </p>
              </a>
              <a className="block" href={`tel:${9999999}`}>
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">
                    Электронная почта:
                  </span>
                  <span>info@towerhotel.uz</span>
                </p>
              </a>
              <a className="block" href={`tel:${9999999}`}>
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">Адрес:</span>
                  <span>
                    Малая Бешагачская ул., 40-40 / 1, Яккасарайский район,
                    Ташкент, 100070, Узбекистан
                  </span>
                </p>
              </a>
            </div>
            <div data-aos='fade-up' data-aos-once data-aos-delay='0.3' className="mt-5 flex justify-center">
              <MesengerList />
            </div>
          </div>
          <div className="aspect-[16/14] md:aspect-[15/8]" data-aos='zoom-in' data-aos-delay='100'>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.584925628522!2d69.2450766758738!3d41.29613727131159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b94effcbfff%3A0xd931165a53b433f3!2sWIKIDEV!5e0!3m2!1sru!2s!4v1703072387732!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </SectionUI>
    </div>
  );
};

export default Contact;
