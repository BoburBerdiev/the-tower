import "@/styles/globals.css";
import 'aos/dist/aos.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { HydrationProvider, Client } from "react-hydration-provider";
import {Provider} from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import Layout from "@/Layout";
import "../localization/i18n";
import {Roboto} from "@next/font/google";
import localFont from "@next/font/local";
import "react-datepicker/dist/react-datepicker.css";

const roboto = Roboto({
    subsets:['cyrillic'],
    weight: ['400' , '500'  , '700']
})

// const elegance = localFont({src:"fonts/roundedelegance/Rounded_Elegance.ttf"})


export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
      <HydrationProvider>
       <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* fonts ----  , elegance.className */}
                <main className={[roboto.className ]}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>

                </main>
            </PersistGate>
        </Provider>
        </QueryClientProvider>
  </HydrationProvider>)
}
