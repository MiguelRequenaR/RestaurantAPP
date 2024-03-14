import "@/styles/globals.css";
import { RestProvider } from "@/context/RestProvider";

export default function App({ Component, pageProps }) {
  return (
    <RestProvider>
      <Component {...pageProps} />
    </RestProvider>
  )
}
