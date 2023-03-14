import "@/styles/globals.css";
import { useSelector, Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/Store";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
