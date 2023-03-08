import "@/styles/globals.css";
import { useSelector, Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/Store";
import Header from "@/components/Header";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
