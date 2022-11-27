
import localFont from '@next/font/local';
import '../styles/globals.scss'

const calibre = localFont({
  src: [
    {
      path: '../assets/font/CalibreThin.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/font/CalibreLight.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/font/CalibreMedium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/font/CalibreBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/font/CalibreSemibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/font/CalibreBlack.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>
        {` html,body {
          font-family: ${calibre};
          font-weight:600;
        } `}
      </style> */}

      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
