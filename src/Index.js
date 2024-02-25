import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body1"
import Footer from "./Components/Footer"
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error"
import Contct_Us from "./Components/Contct_Us"
import RestaurantInfo from "./Components/RestaurantInfro"
import Shimmer from "./Components/Shimmer"
import { Provider } from "react-redux"
import Store from "./Utils/Store"
import Cart from "./Components/Cart"



const Instamart = lazy(()=>import("./Components/Instamart"))
/*
==================================creating element using javascript===============================================================
# creatingelements in react using React.createElement()

const heading1 = React.createElement('h1', {id:'title'}, 'Root-> container-> h1 I have Ignited the react app');
const heading2 = React.createElement('h1',{id:'title2'}, 'Root-> container-> h2');
const div2 = React.createElement('div', {id:'container'}, [heading1, heading2]);


===================== using JSX and functional components ========================================================================

const heading = (<h1 id="container">Hello from JSX and babel in react element</h1>);    // called as JSX Expression
const heading2 = <h3>Hello from heading2 another heading tag created using JSX</h3>

const Heading3 =()=>
{
    return (
        <div>
            {heading}
            {heading2}
            <heading/>
            <h1>Namaste from functional component</h1>
            <h2>This is second h2 tag inside funct. component</h2>
        </div>
        
    );
}

================================== # This is Inline CSS in components / react====================================================

const In_Line_CSS = ()=>
{ 
    return (
        <div className="InLineCSS" style={
            {
                backgroundColor: "yellow",
                color: "purple",
                fontWeight:"500"
            }
        }><h2>This is inline CSS</h2></div>
    )
    
}
*/
// ==============================================================================================================
/*
const Header = () =>
{
    return  (
        
        <div>
            <div className="navbar">
                <div className="logo"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU" alt="logo" /></div> 
                <div className="web_title">
                    <Website_title/>
                    <img className="thali" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0svnqn9Anh0RAqVtyuCk-RMSYuJ5oCIxyxQ&usqp=CAU" alt="" />
                    </div>   
                <div className="nav_links">
                    <a href="">About</a>
                    <a href="">Home</a>
                    <a href="">Contact Us</a>
                    <a href="">Cart</a>
                </div>
            </div>
        </div>
    )   
}
const Website_title =()=>
{
    return (
        <h2 className="website_name">Aunty's Kitchen</h2>
    )
    
}
*/

// const Body = () =>
// {
//     return (
//         <>
//         <div className="body_">
//             {/* for third type of props passing we have pass each prop inividually */}
//             {/* <RestaurantCard urlToImage={Restaurant[1].urlToImage} author ={Restaurant[1].author } publishedAt = {Restaurant[1].publishedAt}/>
//             <RestaurantCard urlToI...mage={Restaurant[1].urlToImage} author ={Restaurant[2].author } publishedAt = {Restaurant[2].publishedAt}/>
//             <RestaurantCard urlToImage={Restaurant[1].urlToImage} author ={Restaurant[3].author } publishedAt = {Restaurant[3].publishedAt}/>
//             <RestaurantCard urlToImage={Restaurant[1].urlToImage} author ={Restaurant[4].author } publishedAt = {Restaurant[4].publishedAt}/> */}
            
//             {/* if you want to use the best way to passing props -> it is passing props using spread operator */}
//             {/* <RestaurantCard {...Restaurant[1]}/>
//             <RestaurantCard {...Restaurant[1]}/>
//             <RestaurantCard {...Restaurant[2]}/>
//             <RestaurantCard {...Restaurant[3]}/>
//             <RestaurantCard {...Restaurant[4]}/> */}

//             {/* The best way is here😎 we can use the map() to map all the object inside RestaurantList */}
//             {
//                 Restaurant.map((restaurant)=>{
//                     return <RestaurantCard {...restaurant}/>

//                 })
//             }
            
//         </div>
        
//         </>
//     )
// }

// const Restaurant= [
//     {
//       "source": {
//         "id": null,
//         "name": "Financial Express"
//       },
//       "author": "The Financial Express",
//       "title": "Share Market Highlights: Nifty settles above 21,450, Sensex over 71,300; Oil & Gas and Healthcare stocks shine - The Financial Express",
//       "description": null,
//       "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-share-market-live-sensex-nifty-may-open-flat-gift-nifty-up-asian-markets-trade-mixed-december-26-2023-tuesday-3347337/",
//       "urlToImage": null,
//       "publishedAt": "2023-12-26T10:07:07Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Etnownews.com"
//       },
//       "author": "Himanshi Singh",
//       "title": "Azad Engineering IPO listing: How much will 'master blaster' Sachin Tendulkar make from his investment? - ET Now",
//       "description": "Azad Engineering IPO listing: Going by the company’s RHP, Tendulkar picked up equity worth about Rs 5 crore in Azad Engineering on March 6 at Rs 3423 per share. Apart from Tendulkar, 3 other sports personalities - PV Sindhu, Saina Nehwal and VVS Laxman - have…",
//       "url": "https://www.etnownews.com/markets/azad-engineering-ipo-listing-how-much-will-master-blaster-sachin-tendulkar-make-from-his-investment-article-106266219",
//       "urlToImage": "https://etstatic.tnn.in/thumb/msid-106266219,width-1280,height-720,resizemode-75/106266219.jpg",
//       "publishedAt": "2023-12-26T09:57:53Z",
//       "content": "Latest entrant to Unicorn club! How MASSIVE $60 million funding from HNIs made InCred 2nd Unicorn of 2023"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Moneycontrol News",
//       "title": "Bajaj Finance, RBL Bank fall as RBI grants only 1 more year to co-branded credit cards - Moneycontrol",
//       "description": "RBI has granted an extension until December 21, 2024, while Bajaj Finance had sought a longer extension for its credit card ties with RBL Bank, reported CNBC-TV18, citing sources",
//       "url": "https://www.moneycontrol.com/news/business/stocks/bajaj-finance-rbl-bank-fall-as-rbi-grants-only-1-more-year-to-co-branded-credit-cards-11956561.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/sensex_nifty_sensexdown-2-770x433.jpg",
//       "publishedAt": "2023-12-26T08:32:27Z",
//       "content": "Observing \"serious deficiencies\" in Bajaj Finance's adherence to the guidelines, the Reserve Bank has granted only one year of extension for the NBFC's co-branded credit card partnership with RBL Ban… [+1883 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Bloomberg",
//       "title": "Adani secures power purchase pacts for 8GW of solar projects - Moneycontrol",
//       "description": "The green energy arm of billionaire Gautam Adani’s coal-to-airports conglomerate signed a 25-year contract with Solar Energy Corp. of India, or Seci, for the remaining 1.8 gigawatts, it said Monday.",
//       "url": "https://www.moneycontrol.com/news/business/adani-secures-power-purchase-pacts-for-8gw-of-solar-projects-11956691.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/japan-solar-bbo-770x433.jpg",
//       "publishedAt": "2023-12-26T07:56:34Z",
//       "content": "Adani Green Energy Ltd. has secured buyers for the entire 8 gigawatts of green power projects it won in a tender more than three years ago, reaching a milestone in its plan to expand generation capac… [+1173 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Moneycontrol News",
//       "title": "Noida boy wants to buy Thar for Rs 700. Anand Mahindra reacts. Viral video - Moneycontrol",
//       "description": "In a video shared by Anand Mahindra on X (formerly Twitter), the boy, named Cheeku Yadav, could be seen speaking to his father about buying Mahindra Thar for Rs 700.",
//       "url": "https://www.moneycontrol.com/news/trends/anand-mahindra-noida-boy-buy-thar-rs-700-viral-video-11956161.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/MixCollage-26-Dec-2023-12-52-PM-2786-770x433.jpg",
//       "publishedAt": "2023-12-26T07:33:25Z",
//       "content": "A video of a boy in Noida expressing a wish to his father to buy Mahindra Thar for Rs 700 went viral and even caught the attention of Anand Mahindra.\r\nIn the video shared by Mahindra on X (formerly T… [+1466 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "Nishant Kumar",
//       "title": "Stocks to buy this week: Wipro, YES Bank, Laurus Labs among 12 technical picks; do you own any? | Mint - Mint",
//       "description": "The overall sentiment of the market remains positive but experts recommend buying technically and fundamentally sound stocks at the current juncture.",
//       "url": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-this-week-wipro-yes-bank-laurus-labs-among-12-technical-picks-do-you-own-any-11703574771068.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/26/1600x900/TCS_on_overseas_payments_for_investments_1695628348453_1703575464847.jpg",
//       "publishedAt": "2023-12-26T07:27:16Z",
//       "content": "Domestic market benchmark Nifty 50 snapped its seven-week winning streak last week on profit booking at higher levels as optimism over recent macro numbers and dovish US Fed fizzled out. The Sensex a… [+10374 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "A Ksheerasagar",
//       "title": "IREDA stock declines for second consecutive day, dips 8%; here's why | Mint - Mint",
//       "description": "IREDA shares witnessed a decline of 7.78%, reaching  ₹101.30 apiece in today's trade, marking the stock's second consecutive day of decline. The stock made its debut on Indian exchanges on November 29, listing at  ₹60 apiece, against its issue price of  ₹32.",
//       "url": "https://www.livemint.com/market/stock-market-news/ireda-stock-declines-for-second-consecutive-day-dips-8-heres-why-11703569441741.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/26/1600x900/g29418de9e4110dc232dabe15db483ef5cdc39e5ec26c132a2_1703569457258_1703569457420.jpg",
//       "publishedAt": "2023-12-26T07:00:29Z",
//       "content": "IREDA shares witnessed a decline of 7.78%, reaching 101.30 apiece in today's trade, marking the stock's second consecutive day of decline. The shares began their downward trend after reaching an all-… [+2807 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "News18"
//       },
//       "author": "Samreen Pall",
//       "title": "Bollywood Actor Sunil Shetty Goes Electric with MG Comet EV at Just Rs 7.98 Lakh - News18",
//       "description": "Sunil Shetty, Bollywood icon, joins the electric revolution with MG Comet EV, a sleek and affordable ride offering futuristic design and eco-friendly power.",
//       "url": "https://www.news18.com/auto/bollywood-actor-sunil-shetty-goes-electric-with-mg-comet-ev-at-just-rs-7-98-lakh-8716844.html",
//       "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/new-project-1-2023-12-25t130255.312-2023-12-daeadd95410d5f6470f6b2c49bdb8877-16x9.jpg?impolicy=website&width=1200&height=675",
//       "publishedAt": "2023-12-26T06:52:29Z",
//       "content": "Bollywood star Sunil Shetty, popularly known as Anna, has joined the electric car trend in India, bringing home the affordable MG Comet EV.\r\nThe actor shared his excitement on Instagram alongside a s… [+1290 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "CA Rohit J. Gyanchandani",
//       "title": "AU Bank Zenith+ Credit Card: From eligibility to benefits; all you need to know | Mint - Mint",
//       "description": "AU Bank's new Zenith Plus Credit Card is designed for frequent travellers and high-spending individuals. With a joining fee of  ₹4999 plus taxes, the card offers rewards on dining, international, and travel expenses.",
//       "url": "https://www.livemint.com/money/personal-finance/au-bank-zenith-credit-card-from-eligibility-to-benefits-all-you-need-to-know-11703143623017.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/22/1600x900/mark-oflynn-bqjswIxbhEE-unsplash_1703228820168_1703228832638.jpg",
//       "publishedAt": "2023-12-26T06:37:33Z",
//       "content": "The card offers a competitive reward rate, granting 2 RPs per 100 spent on dining, international, and travel expenses, and 1 RP 100 elsewhere. Plus, on reaching an annual spend of 12 lakhs, you recei… [+5527 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "Livemint",
//       "title": "India's push for rupee as payment currency for crude oil imports finds no takers: Oil ministry | Mint - Mint",
//       "description": "India's push for rupee transactions for crude oil import has not found any takers as suppliers have expressed concern about the repatriation of funds and high transactional costs.",
//       "url": "https://www.livemint.com/industry/indias-push-for-rupee-as-payment-currency-for-crude-oil-imports-finds-no-takers-oil-ministry-11703569611089.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/26/1600x900/Oil_import_1703569751456_1703569751745.jpg",
//       "publishedAt": "2023-12-26T06:22:36Z",
//       "content": "The oil ministry said that India's push for rupee transactions for crude oil import has not found any takers as suppliers have expressed concern about the repatriation of funds and high transactional… [+2814 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Hindustan Times"
//       },
//       "author": "Aryan Prakash",
//       "title": "Muthoot Microfin shares open at 4.46% less than IPO price on BSE - Hindustan Times",
//       "description": "Muthoot Microfin share price updates: The IPO of Muthoot Microfin had received 11.52 times subscription on the last day of the bidding.",
//       "url": "https://www.hindustantimes.com/business/muthoot-microfin-share-price-live-updates-december-26-2023-bse-sensex-nse-101703566095341.html",
//       "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/26/1600x900/Muthoot_Microfin_1703568727810_1703568728025.jpg",
//       "publishedAt": "2023-12-26T05:39:58Z",
//       "content": "Muthoot Microfin shares on Tuesday made a weak debut on the stock exchanges, listing at a discount of 17 on Bombay Stock Exchange. The shares were trading at 273.60 a piece, 5 per cent less than the … [+1725 chars]"
//     },
//     {
//       "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//       },
//       "author": "TOI Business Desk",
//       "title": "Competition for Ola, Uber! How new ride hailing apps like InDrive, Namma Yatri, BluSmart,Rapido are compe - IndiaTimes",
//       "description": "New apps like InDrive, Namma Yatri, Yaary, BluSmart, and Rapido are looking to fill the gaps left by Uber and Ola. However, the challenge for these ne",
//       "url": "https://timesofindia.indiatimes.com/business/india-business/competition-for-ola-uber-how-new-ride-hailing-apps-like-indrive-namma-yatri-blusmartrapido-are-competing-with-big-players/articleshow/106282081.cms",
//       "urlToImage": "https://static.toiimg.com/thumb/msid-106282689,width-1070,height-580,imgsize-51976,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//       "publishedAt": "2023-12-26T05:35:00Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": "the-times-of-india",
//         "name": "The Times of India"
//       },
//       "author": "TOI Business Desk",
//       "title": "Motisons Jewellers sees bumper listing on stock market; shares debut at 91% premium - IndiaTimes",
//       "description": "Motisons Jewellers, an Ahmedabad-based jewellery company, witnessed a remarkable response to its Initial Public Offering (IPO). The stock debuted at R",
//       "url": "https://timesofindia.indiatimes.com/business/india-business/motisons-jewellers-ipo-listing-stock-market-today-shares-debut-on-nse-bse/articleshow/106281625.cms",
//       "urlToImage": "https://static.toiimg.com/thumb/msid-106281924,width-1070,height-580,imgsize-32004,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//       "publishedAt": "2023-12-26T05:13:11Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Livemint"
//       },
//       "author": "Dhanya Nagasundaram",
//       "title": "Sahara Maritime share price sees muted debut; stock opens at ₹81 apiece on BSE SME | Mint - Mint",
//       "description": "Sahara Maritime share price makes muted debut on BSE SME, listed at  ₹81, same as issue price. Following debut, Sahara Maritime share price slips into the red, trading over 2% lower at  ₹79.15 apiece on BSE SME.",
//       "url": "https://www.livemint.com/market/ipo/sahara-maritime-share-price-sees-muted-debut-stock-opens-at-rs-81-apiece-on-bse-sme-11703565720002.html",
//       "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/26/1600x900/Sahara_Maritime_IPO_1702894345568_1703566059687.jpg",
//       "publishedAt": "2023-12-26T04:50:39Z",
//       "content": "Sahara Maritime IPO listing date: Sahara Maritime share price made a muted debut on BSE SME today. On BSE SME, Sahara Maritime Limited share price was listed at 81, which is same as the issue price. … [+2998 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "GaadiWaadi.com"
//       },
//       "author": "Team GaadiWaadi",
//       "title": "5 Cars Sold In India With Stellar GNCAP Performances This Year - GaadiWaadi.com",
//       "description": "Safety is an aspect that is getting its due credit as time goes by and now more and more people are getting educated about its importance",
//       "url": "https://gaadiwaadi.com/5-cars-sold-in-india-with-stellar-gncap-performances-this-year/",
//       "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2023/04/skoda-slavia-gncap-crash-test-2.jpg",
//       "publishedAt": "2023-12-26T04:49:11Z",
//       "content": "Global NCAP is an NGO body that started the #SaferCars programme for developing countries to highlight the importance of safety in vehicles. The new regime in Global NCAP includes more tests like sid… [+2446 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Abhinav Kaul",
//       "title": "Mutual fund industry assets top Rs 50 trillion landmark: what helped achieve this number? - Moneycontrol",
//       "description": "Steady and increasing inflows in mutual funds through systematic investment plans have led to retail investors incrementally allotting more of their corpuses in mutual funds.",
//       "url": "https://www.moneycontrol.com/news/business/personal-finance/mutual-fund-industry-assets-top-rs-50-trillion-landmark-what-helped-achieve-this-number-11955081.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/mutualfunds2-770x431.jpg",
//       "publishedAt": "2023-12-26T04:46:46Z",
//       "content": "Moneycontrol Pro Panorama | Will markets shine in an election year?\r\n Dec 26, 2023 / 01:19 PM IST\r\nIn this edition of Moneycontrol Pro Panorama: Elections in Taiwan and the US crucial to China, limit… [+42 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "CNBCTV18"
//       },
//       "author": "Hormaz Fatakia",
//       "title": "This wind energy solutions provider with a 300% surge in 2023 has won a repeat order - CNBCTV18",
//       "description": "The project will be executed by June 2025, with the WTGs being installed across Gujarat and Rajasthan.",
//       "url": "https://www.cnbctv18.com/market/inox-wind-share-price-279-mw-repeat-order-large-player-gujarat-rajasthan-2023-returns-18642381.htm",
//       "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/04/wind-power-1019x573.jpg",
//       "publishedAt": "2023-12-26T04:40:55Z",
//       "content": "Let's Connect with CNBCTV 18\r\n©TV18 Broadcast Limited. All rights reserved."
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Moneycontrol"
//       },
//       "author": "Broker Research",
//       "title": "Buy Tata Motors; target of Rs 840 Sharekhan - Moneycontrol",
//       "description": "Sharekhan is bullish on Tata Motors has recommended buy rating on the stock with a target price of Rs 840 in its research report dated December 20, 2023.",
//       "url": "https://www.moneycontrol.com/news/business/stocks/buy-tata-motors-target-of-rs-840-sharekhan-11955431.html",
//       "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/08/Buy_1280x720_5-770x433.png",
//       "publishedAt": "2023-12-26T04:28:16Z",
//       "content": "Sharekhan's research report on Tata Motors\r\nTata Motors has secured CMVR type approval certificate for its hydrogen fuel cell-powered buses. It has established itself in EV space and is now trying to… [+668 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "India Today"
//       },
//       "author": "India Today Tech",
//       "title": "Jio launches Happy New Year 2024 prepaid plans with extra validity, data and more - India Today",
//       "description": "Jio, a major telecom operator in India, has revamped its Rs. 2,999 annual prepaid plan under the 'Happy New Year Offer 2024', extending its validity from 365 days to 389 days.",
//       "url": "https://www.indiatoday.in/technology/news/story/jio-launches-happy-new-year-2024-prepaid-plans-with-extra-validity-data-and-more-2480472-2023-12-26",
//       "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/jiophone-070659-16x9.jpg?VersionId=0vR_GmlOjtvzmLLFBpcd1IOi65v1NZ8o",
//       "publishedAt": "2023-12-26T04:17:27Z",
//       "content": "Jio, a leading telecom operator in India, has introduced the \"Happy New Year Offer 2024,\" targeting its prepaid users. The highlight of this offer is the revamp of one of their older annual prepaid p… [+1857 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Carwale.com"
//       },
//       "author": "Haji Chakralwale",
//       "title": "Mahindra XUV300 facelift interior spied again; new details out - CarWale",
//       "description": "The Indian automaker Mahindra will launch multiple SUVs including the XUV300 facelift, XUV400 facelift, and five-door Thar in the coming year. The test mule of the facelifted version of the XUV300 was recently spied.",
//       "url": "https://www.carwale.com/news/mahindra-xuv300-facelift-interior-spied-again-reveals-new-details/",
//       "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/167235/mahindra-xuv300-facelift-front-view3.jpeg?isig=0&art=1&q=80",
//       "publishedAt": "2023-12-26T04:02:41Z",
//       "content": "<ul><li>Redesigned centre console layout</li><li>To get an electronic parking brake</li></ul>The Indian automaker Mahindra will launch multiple SUVs including the XUV300 facelift, XUV400 facelift, an… [+1165 chars]"
//     }
//   ]

// --------------------------------------------------------------------------
/*this is the first way to pass parameters using {}
const RestaurantCard =({restaurant})=>
{
    
    return (
       
        <div className="card">
            <img src={restaurant.urlToImage} alt="card" />
            <div className="cardData">
                <h2>{restaurant.author}</h2>
                <h3>{restaurant.publishedAt}</h3>
                <h4>5⭐🔥</h4>
                <h4></h4>
            </div>
        </div>
    )
}
--------------------------------------------------------------------------
Second way of passing and using props are as below
const RestaurantCard =(props)=>
{
    
    return (
       
        <div className="card">
            <img src={props.restaurant.urlToImage} alt="card" />
            <div className="cardData">
                <h2>{props.restaurant.author}</h2>
                <h3>{props.restaurant.publishedAt}</h3>
                <h4>5⭐🔥</h4>
                <h4></h4>
            </div>
        </div>
    )
}*/
// ----------------------------------------------------------------------------

// This is 3th type of props passing
/*
const RestaurantCard =({restaurant})=>
{
    const {urlToImage,author, publishedAt} = restaurant;   // we have to pass all the props individually 
    return (
       
        <div className="card">
            <img src={urlToImage} alt="card" />
            <div className="cardData">
                <h2>{author}</h2>
                <h3>{publishedAt}</h3>
                <h4>5⭐🔥</h4>
                <h4></h4>
            </div>
        </div>
    )
}
*/
//-----------------------------------------------------------------------------------
//this is 4th and most efficient type of passing props using spread operator
// const RestaurantCard =({urlToImage,author, publishedAt})=>
// {
//     // const {urlToImage,author, publishedAt} = restaurant;   // we have to pass all the props individually 
//     return (
       
//         <div className="card">
//             <img src={urlToImage} alt="card" />
//             <div className="cardData">
//                 <h2>{author}</h2>
//                 <h3>{publishedAt}</h3>
//                 <h4>5⭐🔥</h4>
//                 <h4></h4>
//             </div>
//         </div>
//     )
// }

// const Footer = () =>
// {
//     return (
//         <h1>This is footer</h1>
//     )
// }
const Applayout = ()=>
{
    return (/*
        header
         -nav bar
            - logo
            - links
            - cart
        body 
         - Search Bar
         - RestaurantList
            - cRestaurantard
                - img
                - restaurant name
                - rating 
                - reviews
        footer 
         - links
        */

    // Here comes Reacts Fragments --> component can have only one partent element to avoid the errors we use react fragments
    <Provider store={Store}>
       <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
       </div>
    </Provider>
       
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path:"/About",
                element:<About/>,
                errorElement:<Error/>
            },
            {
                path:"/Contct_Us",
                element:<Contct_Us/>,
                errorElement:<Error/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantInfo/>,
                errorElement:<Error/>
            },
            {
                path:"/Instamart",
                element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
                errorElement:<Error/>
            },
            {
                path:"/Cart",
                element:<Cart/>,
                errorElement:<Error/>
            }
        ]
    },
    {
        path:"/About",
        element:<About/>,
        errorElement:<Error/>
    }
])

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(<RouterProvider router={appRouter}/>);