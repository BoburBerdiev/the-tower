import SectionTitle from "../Section-title/SectionTitle";
import ImgUl from "../img-ul/img-ul";

const ImgBoxFlex = ({ title, content, src, imgOrder }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
      <div
        className={`${
          imgOrder ? "order-2" : "order-1"
        }  space-y-4 md:space-y-8`}
      >
        <SectionTitle title={title} />
        <p  data-aos='fade-up' data-aos-delay='200' className="text-justify section-text">{content}</p>
      </div>
      <div
      data-aos='zoom-in'
      data-aos-delay='150'
        className={`${
          imgOrder ? "order-1" : "order-2"
        } w-full aspect-video md:aspect-[16/14]`}
      >
        <ImgUl  src={src} objectFit={"object-cover"} />
      </div>
    </div>
  );
};

export default ImgBoxFlex;