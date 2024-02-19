import {ButtonUI, RoomsCharacterList, Slider} from "@/components";
import {useTranslation} from "react-i18next";
const roomsInner =[
    {
        img: "/image/IMG_7363-min.jpg"
    },
    {
        img: "/image/IMG_7361-min.jpg"
    },
    {
        img: "/image/IMG_7362-min.jpg"
    },
]
const RoomsRow = ({card  , order}) =>  {
    const {t} = useTranslation()

    console.log(card)

    return (
        <div class={`grid grid-cols-1  md:grid-cols-2 gap-7  md:gap-16 items-center ${order % 2 === 0}  `}>
            <div class={`aspect-video md:aspect-[10/8] ${order % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                <Slider SliderContent={roomsInner} PaginationInner={true}/>
            </div>
            <div className={`space-y-4 md:space-y-7 ${order % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                <h3 className={' text-xl md:text-3xl lg:text-[40px] font-elegance'}>
                    {card.title}
                </h3>
                <p class={' text-base md:text-lg'}>
                    Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса.
                </p>
                <RoomsCharacterList list={card.information} />
                <div className={'flex gap-x-5'}>
                 <ButtonUI typeClass={'btn-gold'} text={t('btn.booking')}   />
                 <ButtonUI typeClass={'btn-gold'} btnBorder={true} text={t('Подробнее')}   />
                </div>
            </div>
        </div>
    );
}

export default RoomsRow;