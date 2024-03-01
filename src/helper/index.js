
export const priceView = (price) => {
   return  price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
}

export const formatPhoneNumber =(originalString) => {
   return originalString?.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}


export const PageWayRouter  = ( pageAsPath , findPage) => {
   const pageSplit = pageAsPath.split('/')

   if(findPage) {
     return  pageSplit?.find(item => item === findPage)
   }

   
}


export const langSelect = ( lang , ru , eng ,uz) => {
    console.log(ru)
   if(lang === 'ru')  {
       return ru
   }else if(lang === 'eng'){
       return eng
   }else if(lang === 'uz') {
       return uz
   }
}