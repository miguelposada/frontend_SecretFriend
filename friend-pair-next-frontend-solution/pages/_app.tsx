import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import type { AppProps } from 'next/app';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      {/* Resto de tu aplicación */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
