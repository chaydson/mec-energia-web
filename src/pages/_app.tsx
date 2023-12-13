import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBRLocale from "date-fns/locale/pt-BR";
import { getHeadTitle } from "@/utils/head";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, ...rest }: MyAppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  const headTitle = React.useMemo(() => {
    return getHeadTitle();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{headTitle}</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <ThemeProvider theme={theme}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ptBRLocale}
            >
              <CssBaseline />

              <Component {...pageProps} />
            </LocalizationProvider>
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
