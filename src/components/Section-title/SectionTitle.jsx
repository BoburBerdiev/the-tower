import {ButtonUI} from "@/components";

const SectionTitle = ({title, subTitle, colorContent, justify, btnText, styleSubtitle , href }) => {
  return (
    
    <div className={`flex gap-y-5 w-full items-center  ${btnText ? 'justify-between' : justify}`}>
      <div className='flex flex-col items-center'>
         <h2 data-aos='fade-up' className={` ${colorContent && "text-white" } ${styleSubtitle && styleSubtitle} section-title  text-center ${subTitle && 'mb:3 md:mb-5'}`}>{title}</h2>
         <p  data-aos='fade-up' data-aos-delay='100' className={`text-center section-text  ${colorContent && "text-white" }`}>{subTitle}</p>
      </div>
      {
        btnText && 
        <div  data-aos='fade-up' data-aos-delay='120'>
          <ButtonUI text={btnText} btnBorder={true} href={href} stylePadding={'py-2.5 md:py-3.5 px-6 md:w-full'}  />
        </div>
      }
      
    </div>
  )
}

export default SectionTitle