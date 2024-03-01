import {ButtonUI, RoomsCharacterList, Slider} from "@/components";
import {useTranslation} from "react-i18next";

const RoomsRow = ({card  , order}) =>  {
    const {t} = useTranslation()

    return (
        <div class={`grid grid-cols-1  md:grid-cols-2 gap-7  md:gap-16 items-center ${order % 2 === 0}  `}>
            <div data-aos='fade-out' class={`aspect-video md:aspect-[10/8] ${order % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                <Slider SliderContent={card.imgs} PaginationInner={true}/>
            </div>
            <div className={`space-y-4 md:space-y-7 ${order % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                <h3 data-aos='fade-left' className={' text-xl md:text-3xl lg:text-[40px] font-elegance'}>
                    {card.title}
                </h3>
                <p data-aos='fade-left' data-aos-delay='100' class={' text-base md:text-lg'}>
                    {card.decr}
                </p>
                <RoomsCharacterList list={card.information} />
                <div data-aos='fade-up' className={'flex gap-x-5'}>
                 <ButtonUI  text={t('btn.booking')} href={'/booking'}   />
                 <ButtonUI  btnBorder={true} text={t('btn.more')} href={'/rooms/1'}   />
                </div>
            </div>
        </div>
    );
}

export default RoomsRow;