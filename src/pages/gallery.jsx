import SEO from "@/SEO/SEO";
import {GalleryZoomInner, SectionUI, MiniHeader} from "@/components";
import {gallery} from '@/SEO/SEO.config'
import { useSelector } from "react-redux";
import axios from "axios";
import {langSelect} from "@/helper";

const Gallery = ({galleryData}) => {

    const {lang} = useSelector(state => state.langSlice)
  return (
      <>
      <SEO
              ogImage={'/image/Tower hotel___eng 1.png'}
              title={gallery[lang].title}
              description={gallery[lang].description}
              ogTitle={gallery[lang].ogTitle}
              ogDescription={gallery[lang].ogDescription}
              twitterHandle={gallery[lang].twitterHandle}
            />
          <div>
              <MiniHeader img={galleryData?.header_image} title={langSelect(lang , galleryData?.title_ru, galleryData?.title_en , galleryData?.title_uz )}/>
          </div>
          <SectionUI padding='py-10 md:py-20'>
              <GalleryZoomInner images={galleryData?.images}/>
          </SectionUI>
      </>

  )
}

export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [galleryData ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/gallery/`),

    ]);
    return {
        props: {
            galleryData: galleryData?.data,

        },
    };
}

export default Gallery
// /pages/gallery/