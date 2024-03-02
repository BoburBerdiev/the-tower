import {ButtonUI, RoomsCharacterList, Slider} from "@/components";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const RoomsRow = ({card  , order}) =>  {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    return (
        <div class={`grid grid-cols-1  md:grid-cols-2 gap-7  md:gap-16 items-center ${order % 2 === 0}  `}>
            <div data-aos='fade-out' class={`aspect-video md:aspect-[10/8] ${order % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                <Slider SliderContent={card.images} PaginationInner={true}/>
            </div>
            <div className={`space-y-4 md:space-y-7 ${order % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                <h3 data-aos='fade-left' className={' text-xl md:text-3xl lg:text-[40px] font-elegance'}>
                    {langSelect(lang ,card?.title_ru, card?.title_en , card?.title_uz )}
                </h3>
                <p data-aos='fade-left' data-aos-delay='100' class={' text-base md:text-lg'}>
                    {langSelect(lang ,card?.description_ru, card?.description_en , card?.description_uz )}

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