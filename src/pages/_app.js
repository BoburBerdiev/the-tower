import "@/styles/globals.css";
import { HydrationProvider, Client } from "react-hydration-provider";
import {Provider} from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from "@/store";
import Layout from "@/Layout";
export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();


  return (
      <HydrationProvider>
       <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            </PersistGate>
        </Provider>
        </QueryClientProvider>
  </HydrationProvider>)
}
