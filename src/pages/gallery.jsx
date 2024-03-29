import SEO from "@/SEO/SEO";
import {GalleryZoomInner, SectionUI, MiniHeader} from "@/components";
import {gallerySEO} from '@/SEO/SEO.config'
import {useSelector} from "react-redux";
import axios from "axios";
import {langSelect} from "@/helper";

const Gallery = ({galleryData}) => {

    const {lang} = useSelector(state => state.langSlice)
    return (
        <>
            <SEO
                ogImage={'/logo.png'}
                title={gallerySEO[lang].title}
                description={gallerySEO[lang].description}
                ogTitle={gallerySEO[lang].ogTitle}
                ogDescription={gallerySEO[lang].ogDescription}
                twitterHandle={gallerySEO[lang].twitterHandle}
            />
            <div>
                <MiniHeader img={galleryData?.header_image}
                            title={langSelect(lang, galleryData?.title_ru, galleryData?.title_en, galleryData?.title_uz)}/>
            </div>
            <SectionUI padding='py-10 md:py-20'>
                <GalleryZoomInner images={galleryData?.images}/>
            </SectionUI>
        </>

    )
}

export async function getServerSideProps({res}) {
    res.setHeader(
        "Cache-Control",
        "no-cache"
    );
    // Fetch data from external API
    const [galleryData] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/gallery/`),

    ]);
    return {
        props: {
            galleryData: galleryData?.data,
        },
    };
}

export default Gallery