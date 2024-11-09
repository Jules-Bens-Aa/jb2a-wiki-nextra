import { DataContext } from 'nextra/data'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
    return (
        <div className="bg-jb2a_grey-200 txt-jb2a_grey-400">
        <Component {...pageProps}/>
      </div>
    )
}