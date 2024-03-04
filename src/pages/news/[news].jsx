import SEO from '@/SEO/SEO'
import { SectionUI, Slider } from '@/components'
import ImageUI from '@/components/ui/ImageUI'
import React, {useEffect} from 'react'
import { LuCalendarRange } from 'react-icons/lu'
import {newsInnerSEO} from "@/SEO/SEO.config"
import { useSelector } from 'react-redux'
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";

const  News = () => {
  const router = useRouter()
  const {news}=router.query
  console.log(news)
const {lang} = useSelector(state => state.langSlice)
  const { data: newsInner  , refetch: refetchNewsInner, isLoading , isSuccess } = useQuery(["newsInner" , news], () =>
      apiService.getDataByID(  '/pages/news' ,news) , { enabled: false}
  );

  useEffect(() => {
    if(news) {
      refetchNewsInner()
    }
  } ,  [news])

  console.log(newsInner)
  return (
    <>
    {/* <SEO
        ogImage={'/image/logo.png'}
                title={newsInnerSEO[lang].title}
                description={newsInnerSEO[lang].description}
                ogTitle={newsInnerSEO[lang].ogTitle}
                ogDescription={newsInnerSEO[lang].ogDescription}
                twitterHandle={newsInnerSEO[lang].twitterHandle}
            /> */}
    
    <SectionUI bgFigureBottomPostion={'bottom-0 left-0'} bgFigureTopPostion={'top-0 right-0'} padding={'py-10 md:py-20 lg:pt-[90px] lg:pb-32 xl:pb-[180px]'}>
      <div className='container'>
        <div data-aos='fade-in' className='relative z-[5] md:float-left w-full lg:w-[450px] xl:w-[650px] h-[275px] xl:h-[350px] mr-10 mb-5'>
          <Slider  PaginationInner={true} />
        {/*  SliderContent={newsImage}*/}
        </div>
        <h3 data-aos='fade-left' className='text-xl 2xl:text-2xl font-inter font-semibold'>

          Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.</h3>
        <div data-aos='fade-left' data-aos-delay='100' className='flex items-center py-3'>
          <LuCalendarRange className="md:text-xl text-lg pb-[3px]" />
          <p className={`font-inter font-medium text-sm md:text-base`}>17 февр. 2023г.</p>
        </div>
        <p data-aos='fade-up' className='text-justify font-openSans'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis aliquam laudantium soluta. Facere, sapiente, voluptate omnis explicabo suscipit animi possimus harum quae eveniet, sed sint? Architecto id consectetur debitis ratione veniam laboriosam quidem, earum accusamus harum explicabo rem assumenda recusandae voluptate optio maxime est perspiciatis pariatur eaque ea praesentium. Magni nulla totam distinctio unde debitis libero iste expedita corporis excepturi quos? Eligendi quo deserunt, optio earum nam ratione amet rerum ducimus omnis beatae distinctio asperiores. Commodi ut deserunt at natus cupiditate numquam praesentium aperiam est fugit ex obcaecati amet quae itaque sint vitae vero, quaerat maiores explicabo aliquam iste impedit. Totam, pariatur sint! Alias numquam odio, aliquam possimus aspernatur a sunt vero assumenda eius temporibus facilis, soluta consequuntur quaerat omnis porro officiis nihil quisquam neque dolores dolore rem deserunt. Recusandae, dolores obcaecati quod ut accusamus molestias velit molestiae esse, ea assumenda ratione deleniti ipsum possimus nihil, animi atque commodi iste id tempore culpa dolorum. Sequi, mollitia aperiam quidem sint natus praesentium quo omnis error saepe corrupti assumenda ex voluptatibus rerum doloremque cumque hic, aliquid officiis ipsa delectus? Eius voluptate omnis esse cumque totam debitis provident dolorum recusandae dignissimos magnam, rem blanditiis non quod excepturi, nemo doloribus quas officia maiores veritatis minus? Ullam et repellendus consequatur minima vitae accusantium quae porro aut, autem officiis quasi voluptatem dicta provident inventore corrupti impedit, itaque commodi repudiandae natus asperiores. Cumque, maiores animi deserunt consectetur nemo nobis. Obcaecati ad ullam, vel incidunt quis illo ab eveniet minima nam architecto magni nesciunt dolore quia enim tempore commodi iusto rem doloremque adipisci dolor eaque magnam aperiam suscipit debitis. Provident omnis repellat amet architecto officia id illo cupiditate voluptatibus dolor quam sit adipisci corrupti eos voluptas alias, nihil exercitationem ipsam iusto corporis aspernatur eum consectetur hic odit. Ut, quo dolore explicabo ratione iusto temporibus perspiciatis mollitia ab ex maxime praesentium, neque optio quam ipsa recusandae magnam repellendus libero? Quasi, excepturi. Modi, voluptate architecto deserunt corrupti eaque, fuga consectetur nulla expedita fugit, quasi aliquid accusamus sequi soluta! Velit id deserunt molestias eveniet officia nesciunt facere aut voluptatem laborum rerum, consequuntur enim ut ratione ea quas obcaecati error praesentium harum accusantium ducimus. Impedit libero iusto accusantium dolore nisi atque a! Perferendis natus repellendus dolor mollitia odio veritatis ut eveniet iure, maiores repellat incidunt odit harum dolores hic ducimus placeat. In doloremque quam itaque aperiam, consequuntur tempore autem perspiciatis ea rerum velit temporibus vel commodi inventore architecto iure praesentium quisquam! Quam vitae itaque voluptate accusantium tenetur reprehenderit obcaecati a quo at aspernatur, odit aliquid iure quae laborum repellat voluptates in expedita accusamus corporis ut incidunt. Aut dignissimos molestiae harum quas nemo at doloremque error, deleniti veritatis impedit dolore, porro doloribus magni atque, aperiam nulla reiciendis culpa! Facilis ullam eum cumque magni, repellendus placeat officia eius nulla atque optio corrupti et corporis eos nemo! Earum nemo debitis eaque itaque praesentium voluptatum! Laborum magnam, alias beatae ut, cumque architecto cum voluptate recusandae, consequatur at eos animi itaque obcaecati officia unde explicabo eius maxime. Ipsa dolores laborum provident quas dolor nulla alias cum enim at nesciunt hic unde aliquam minima laboriosam atque autem et, eum aut mollitia magnam praesentium odio soluta quis! Autem qui placeat itaque ipsa reiciendis cumque iusto odit magni sequi, deserunt optio, tempora, accusantium dolorum temporibus illo. Expedita, quasi omnis quod nisi itaque nihil recusandae, asperiores neque iusto, suscipit sit ducimus corporis distinctio. Molestiae earum aliquid, totam nobis voluptatibus incidunt vitae harum esse, natus sint deserunt quasi quidem distinctio eos tempora. Facere fugit repellat sunt expedita eos nemo, incidunt quia tempore adipisci corrupti aliquid cum cumque odit fuga optio vel similique id deleniti ratione architecto odio? Commodi deleniti impedit placeat iure velit corporis quia ullam illum veritatis incidunt consequatur magni, nostrum accusamus aliquid quos maxime eveniet eius beatae in officia exercitationem! Consectetur odit dolorem explicabo accusamus, nesciunt sit inventore laboriosam ea, reprehenderit incidunt, maxime cupiditate corrupti in nobis id dolore et porro beatae voluptatem earum quam tempore? Quibusdam beatae corrupti sequi at sapiente totam voluptas ad? Debitis perspiciatis sint harum voluptate ipsam, maxime rem laborum sequi adipisci, nobis sapiente vero, veniam ratione explicabo voluptas. Minus inventore, culpa nihil ab, nesciunt cupiditate ducimus facilis necessitatibus iure qui iste, corporis harum rem perferendis excepturi praesentium officia impedit dignissimos eius velit doloribus rerum enim. Reprehenderit in nobis veniam odio rerum, ullam quaerat repellendus totam laborum sequi officiis quos amet esse est omnis iure ipsam at dolorum! Pariatur magnam officiis ipsam, vel, labore soluta fugit alias impedit, consequatur excepturi id. Vitae officia maxime accusamus dolorem, ratione voluptatibus quasi repellendus asperiores itaque amet voluptas vel rerum. Impedit adipisci tempore eum temporibus minima. Est numquam culpa voluptatum, quibusdam reprehenderit illum ducimus quas, sunt rerum nulla ipsam nemo reiciendis? Ducimus cupiditate consectetur aut accusamus officiis culpa, qui in nam, harum est distinctio corrupti iste commodi? Inventore, perferendis repellat! Dolorum cupiditate, at vero, quisquam ratione nobis animi voluptate hic repellat debitis dolorem sunt fugit magni odio quod fuga! Iusto, ipsam, illum tempore possimus iste quas, ullam voluptatem libero quasi at exercitationem. Ducimus unde rerum repudiandae! Quidem repellat, minima magni animi cum fuga deserunt mollitia repudiandae earum aspernatur ut odio optio consectetur molestiae temporibus qui architecto libero quam voluptates harum eius. Incidunt veniam rem obcaecati pariatur ipsam dolorem ipsa praesentium atque laborum! Repellendus ratione quidem molestias, illo asperiores praesentium sapiente nisi, accusantium iusto cum provident, accusamus corrupti libero nemo reprehenderit perspiciatis distinctio consequatur laborum! In aspernatur voluptate adipisci neque cum nesciunt corrupti maiores odit, pariatur deserunt ad, magnam doloribus tempora maxime sequi, iste eos accusantium necessitatibus vel explicabo qui iure! Repellendus eaque assumenda necessitatibus, impedit, voluptate corrupti quia commodi beatae aut reiciendis consequuntur autem blanditiis animi nihil fugiat quae eos sint soluta recusandae perferendis eligendi dolorum dolores dolore? Odio veritatis fuga quis libero. Quo, sequi unde quasi voluptatibus tenetur corporis, obcaecati quas assumenda saepe ex tempore incidunt vero, nobis cum qui! Aliquam illum adipisci impedit aliquid excepturi magni ad inventore corrupti harum, nam mollitia distinctio voluptate sapiente dolore aut consequatur amet fugiat obcaecati assumenda repellendus! Sed enim, repudiandae ea corporis vero consequuntur, obcaecati ex eos nam maiores, ipsum unde!</p>
      </div>
    </SectionUI>
    </>
  )} 
export default News