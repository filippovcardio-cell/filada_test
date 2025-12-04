import { useSelector } from 'react-redux';
import Cover from '../../components/Cover/Cover';
import './BeforeAfterPage.css';
import { Helmet } from "react-helmet-async";

const BeforeAfterPage = ({coverDescription, beforeAfterPhotosArr, beforeAfterTexts, metaTitle, metaDescription, metaUrl}) => {
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
    <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <link rel="canonical" href={metaUrl} />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
    <div className='before__after-page'>
        <Cover coverDescription={coverDescription} />
            <div className='before__after-page-photos-wrapper'>
            {
                    beforeAfterPhotosArr.map((photoPara, idx) => {
                        return (
                            <div key={idx} className={`before__after-page-photo-wrapper ${isDarkTheme ? "" : "light"}`}>
                                <div className="left__before-after-container">
                                <img src={photoPara.left} alt={coverDescription} 
                                className='before__after-page-photo' />
                                <p className={`before__after-page-photo-text ${isDarkTheme ? "" : "light"} mont-m`}>До</p>
                                </div>
                                <div className="left__before-after-container">
                                <img src={photoPara.right} alt={coverDescription} className='before__after-page-photo' />
                                <p className={`before__after-page-photo-text ${isDarkTheme ? "" : "light"} mont-m`}>Після</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="before__after-page-texts">
                {beforeAfterTexts}
            </div>
    </div>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PXTCPNZW"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </>
  )
}

export default BeforeAfterPage