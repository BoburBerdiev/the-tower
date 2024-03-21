import "@/styles/globals.css";
import 'aos/dist/aos.css';


// swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { HydrationProvider, Client } from "react-hydration-provider";


import {Provider} from "react-redux";
import {QueryClientProvider, QueryClient} from "react-query";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import Layout from "@/Layout";
import "../localization/i18n";
import {Alegreya_Sans, El_Messiri} from "next/font/google";

import "react-datepicker/dist/react-datepicker.css";
import NextNProgress from "nextjs-progressbar";

const alegreya_sans
    = Alegreya_Sans
({
    weight: ["100", "300", "400", "500"],
    subsets: ['cyrillic', 'latin'],
    variable: '--font-alegreya_sans',
})

const elegance = El_Messiri({
    subsets: ['cyrillic', 'latin'],
    weight:[   "400" , "500" , "700" ],
    variable: '--font-el_messiri',
})





export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

    return (
        <HydrationProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Client>
                            <main
                                className={` ${alegreya_sans.variable}   ${elegance.variable} `}>

                                <Layout>
                                    <NextNProgress color={'white'} startPosition={0.3} stopDelayMs={200} height={3}/>
                                    <Component {...pageProps} />
                                </Layout>
                            </main>
                        </Client>
                    </PersistGate>
                </Provider>
            </QueryClientProvider>
        </HydrationProvider>)
}
