import "@/styles/globals.css";
import 'aos/dist/aos.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
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
import {Inter, Open_Sans, Roboto} from "@next/font/google";
import localFont from "@next/font/local";
import "react-datepicker/dist/react-datepicker.css";

const roboto = Roboto({
    subsets:['cyrillic', 'latin'],
    weight: ['300' , '400' , '500'  , '700'],
    variable: '--font-roboto'
})

export const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-open-sans',
})

export const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-inter',
})

const elegance = localFont({
    src:"../fonts/roundedelegance/Rounded_Elegance.ttf",
    variable: '--font-rounded-elegance'
})


export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
      <HydrationProvider>
       <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* fonts ----  , elegance.className */}
                <main className={`${roboto.variable} ${inter.variable} ${openSans.variable} ${elegance.variable}`}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </main>
            </PersistGate>
        </Provider>
        </QueryClientProvider>
  </HydrationProvider>)
}
