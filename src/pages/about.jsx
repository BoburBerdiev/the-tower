import {ImgBoxFlex, ImgUI, SectionTitle, SectionUI, Slider} from '@/components';
const AboutBannerText = [
  {
    title: "Комфорт в любое время!",
    img: "/image/IMG_7363-min.jpg",
  },
  {
    title: "Комфорт в любое время! 2",
    img: "/image/IMG_5397-min.jpg",
  },
  {
    title: "Комфорт в любое время! 3",
    img: "/image/photo_2023-10-24_21-34-41-min.jpg",
  },
];
const AboutBannerText2 = [
  {
    img: "/image/IMG_5397-min.jpg",
  },
  {
    img: "/image/IMG_5397-min.jpg",
  },
  {
    img: "/image/photo_2023-10-24_21-34-41-min.jpg",
  },
  {
    img: "/image/IMG_7363-min.jpg",
  },
];

const About = () => {
  return (
    <div className="wrapper">
      <div className="w-full h-[90vh]">
        <Slider SliderContent={AboutBannerText} innerBtn={true} />
      </div>
      <SectionUI bgFigureTopPostion={'top-0 left-0'} bgFigureBottomPostion={'bottom-0 left-0'} padding={"py-20 md:py-[100px] lg:py-[180px]"}>
        <div className="relative space-y-5 md:space-y-10 z-5">
          <SectionTitle
            title={"Добро пожаловать в The Tower Hotel!"}
            subTitle={
              "Удобное расположение в центре города Ташкента, недалеко от основных транспортных развязок, выставочных и бизнес-центров позволяет быстро добраться до места назначения. В Tower hotel Tashkent вы сможете ощутить по-настоящему высокое качество обслуживания."
            }
            justify={"justify-center"}
          />
          <div className="w-full aspect-video">
            <Slider SliderContent={AboutBannerText2} PaginationMod={true}  />
          </div>
        </div>
      </SectionUI>
      <SectionUI bgGold={true}>
        <div className="space-y-5 md:space-y-10">
          <SectionTitle
            colorContent={"text-white"}
            title={"Комфорт, отдых и роскошь"}
            subTitle={
              "В нашем отеле 96 комфортабельных номеров, которые оснащены самым современным оборудованием по стандартам отелей Tower, высококачественными кроватями (перина) и постельным бельем, Смарт-телевизорами, обновленной системой кондиционирования воздуха, мини-баром, бесплатным высокоскоростным доступом в Интернет (Wi-Fi), мини-баром бар, фен, сейф."
            }
            justify={"justify-center"}
          />

          <div className="grid grid-cols-2 gap-[20px] md:gap-[30px]">
            <div data-aos='zoom-in' data-aos-delay='100' className="w-full relative aspect-video">
              <ImgUI src="/image/IMG_7363-min.jpg" alt="about"  />
            </div>
            <div data-aos='zoom-in' data-aos-delay='150' className="w-full relative aspect-video">
              <ImgUI src="/image/IMG_7363-min.jpg" alt="about"  />
            </div>
          </div>
        </div>
      </SectionUI>
      <SectionUI bgFigureTopPostion={'top-0 -right-2/3  '} padding={'pb-[20px] md:pb-[50px] lg:pb-[90px] pt-20 md:pt-[100px] lg:pt-[180px]'}>
        <ImgBoxFlex imgOrder={true} title={'Ресторан “La Perla”'}  content={'Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы используем только свежие продукты и работаем с проверенными партнерами - ведь именно качественные и свежие ингредиенты позволяют создавать настоящие кулинарные шедевры. Для посетителей, которые предпочитают современную европейскую кухню мы предлагаем салаты, горячее и закуски. Для гурманов у нас есть необычные блюда, процесс подготовки которых требует большого количества времени высочайшего мастерства. Ну а любителей десертов мы всегда готовы побаловать свежими чизкейками, мад-кейками, тирамису, панакотой и конфетами собственного приготовления. Вам обязательно нужно посетить наш ресторан и все попробовать.'} src={'/image/IMG_7363-min.jpg'} />
      </SectionUI>
      <SectionUI padding={'py-[10px] md:py-[25px] lg:py-[90px]'}>
        <ImgBoxFlex imgOrder={false} title={'Лаунж-бар'}  content={'Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы используем только свежие продукты и работаем с проверенными партнерами - ведь именно качественные и свежие ингредиенты позволяют создавать настоящие кулинарные шедевры. Для посетителей, которые предпочитают современную европейскую кухню мы предлагаем салаты, горячее и закуски. Для гурманов у нас есть необычные блюда, процесс подготовки которых требует большого количества времени высочайшего мастерства. Ну а любителей десертов мы всегда готовы побаловать свежими чизкейками, мад-кейками, тирамису, панакотой и конфетами собственного приготовления. Вам обязательно нужно посетить наш ресторан и все попробовать.'} src={'/image/IMG_7363-min.jpg'} />
      </SectionUI>
      <SectionUI padding={'py-[20px] md:py-[50px] lg:py-[90px]'}>
        <ImgBoxFlex imgOrder={true} title={'Конференц-зал'}  content={'Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы используем только свежие продукты и работаем с проверенными партнерами - ведь именно качественные и свежие ингредиенты позволяют создавать настоящие кулинарные шедевры. Для посетителей, которые предпочитают современную европейскую кухню мы предлагаем салаты, горячее и закуски. Для гурманов у нас есть необычные блюда, процесс подготовки которых требует большого количества времени высочайшего мастерства. Ну а любителей десертов мы всегда готовы побаловать свежими чизкейками, мад-кейками, тирамису, панакотой и конфетами собственного приготовления. Вам обязательно нужно посетить наш ресторан и все попробовать.'} src={'/image/IMG_7363-min.jpg'} />
      </SectionUI>
      <SectionUI padding={'pb-20 pt-[20px] md:pt-[50px] lg:py-[90px]'}>
        <ImgBoxFlex imgOrder={false} title={'Тренажерный зал'}  content={'Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы используем только свежие продукты и работаем с проверенными партнерами - ведь именно качественные и свежие ингредиенты позволяют создавать настоящие кулинарные шедевры. Для посетителей, которые предпочитают современную европейскую кухню мы предлагаем салаты, горячее и закуски. Для гурманов у нас есть необычные блюда, процесс подготовки которых требует большого количества времени высочайшего мастерства. Ну а любителей десертов мы всегда готовы побаловать свежими чизкейками, мад-кейками, тирамису, панакотой и конфетами собственного приготовления. Вам обязательно нужно посетить наш ресторан и все попробовать.'} src={'/image/IMG_7363-min.jpg'} />
      </SectionUI>
    </div>
  );
};

export default About;