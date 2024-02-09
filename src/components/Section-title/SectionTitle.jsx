import {ButtonUI} from "@/components";

const SectionTitle = ({title,  justify, subTitle, colorContent, btnText }) => {
  return (
    
    <div className={`flex flex-col md:flex-row gap-y-5 w-full items-center  ${justify ? justify : 'justify-start'}`}>
      <div className='flex flex-col items-center'>
         <h2 data-aos='fade-up' className={` ${colorContent && "text-white" } section-title  text-center ${subTitle && 'mb:3 md:mb-5'}`}>{title}</h2>
         <p  data-aos='fade-up' data-aos-delay='100' className={`text-center section-text  ${colorContent && "text-white" }`}>{subTitle}</p>
      </div>
      {
        btnText && 
        <div  data-aos='fade-up' data-aos-delay='120'>
          <ButtonUI text={btnText}  typeClass='btn-white'/>
        </div>
      }
      
    </div>
  )
}

export default SectionTitle