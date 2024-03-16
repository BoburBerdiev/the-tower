import "@/styles/globals.css";
import 'aos/dist/aos.css';


// swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { HydrationProvider, Client } from "react-hydration-provider";
import {Provider} from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import Layout from "@/Layout";
import "../localization/i18n";
import {Inter, Open_Sans, Playfair, Roboto} from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import NextNProgress from "nextjs-progressbar";

const roboto = Roboto({
    subsets:['cyrillic', 'latin'],
    weight: ['300' , '400' , '500'  , '700'],
    variable: '--font-roboto',
    display:"swap",
    adjustFontFallback:false,
    preload: false
})

// const girloy = Gilroy({
//     subsets:['cyrillic', 'latin'],
//     weight: ['300' , '400' , '500'  , '700'],
//     variable: '--font-roboto'
// })

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-open-sans',
    display:"swap",
    adjustFontFallback:false,
    preload: false
})

const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-inter',
    display:"swap",
    adjustFontFallback:false,
    preload: false
})

const elegance = Playfair({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-rounded-elegance',
    display:"swap",
    adjustFontFallback:false,
    preload: false
})





export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
      <HydrationProvider>
       <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <main className={`${roboto.variable} ${inter.variable} ${openSans.variable} ${elegance.variable} `}>
                    <Layout>
                        <NextNProgress color={'white'}  startPosition={0.3} stopDelayMs={200} height={3}  />
                        <Component {...pageProps} />
                    </Layout>
                </main>
            </PersistGate>
        </Provider>
        </QueryClientProvider>
  </HydrationProvider>)
}
