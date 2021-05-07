import type { AppProps } from 'next/app'
import Main from '../layout/Main'
// import '../style/main.css'
// import '../style/plugins.css'
import '../style/responsive.css'
// import '../style/style.css'
 import '../style/home.css'
 

function MyApp({ Component, pageProps }: AppProps) {
    // if (typeof window === 'undefined') {
    //     return <div className='wrapper'>Loading</div>
    // }
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    )
}

export default MyApp
