import React from 'react'
import css from './AboutUsInfo.module.scss'
import { projectExperience } from '../../utils/data'

const AboutUsInfo = () => {
  return (
    <div className={css.wrapper}>
         <div className={`paddings yPaddings innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                <div className= {`secondaryText ${css.apply}`}><span>AEROLAND TRAVELS</span><img src='./aero.png' alt='' width={80}/></div>
                 <div className={css.applyContent}>
                    <p className={css.applyContentDetails}>
                    Aeroland is one of the top leading travel companies in Nigeria today, Aeroland is the most professional and advanced travel service provider. Established and developed since 1997, Aeroland has been continuously expanding and affirming itself not only within the domestic scope but also internationally.
                    </p>
                    <br/>
                    <p className={css.applyContentDetails}>
                    At Aerolandtravels - Aeroland Travels, we believe in the power of connection through travels - and in helping you make the most of every trip. With over 50 percent of Nigeria travels around the world, we continue to study travels and help you make the right choice when you shop for flights, hotel, visa and tours. With us, you'll find low airfars and timily responds. When it’s time to book, we can help you save up to 30% on hotels, checking 200+ sites to find you today’s lowest prices.
                    </p>
                </div> 

                <div className= {`secondaryText ${css.apply}`}>AEROLAND AWARDS </div>
                 <div className={css.applyContent}>
                    <p className={css.applyContentDetails}>
                  
                    </p>
                </div> 

            </div>
            <div className={css.rightSide}>

            
            <div className= {`secondaryText ${css.apply}`}><span>AEROLAND AVIATION ASSOCIATE</span><img src='./aaa-logo.png' alt='' width={150}/></div>
                 <div className={css.applyContent}>
                    <p className={css.applyContentDetails}>
                    Aeroland Aviation Associate is a Licensed and Approved Teaching center for all Confederation Tourism and Hospitality aviation courses recognized globally. 
                    </p>
                    <br/>
                    <p className={css.applyContentDetails}>
                    Aeroland Aviation Associate has been partnering with CTH for over 10 Years and has successfully trained hundreds of students world wide. 
                    </p>
                    <br/>
                    <br/>
                    <div className= {`secondaryText ${css.apply}`}>AEROLAND AVIATION ASSOCIATE LICENCE</div>
                    <div className={css.approved}>
                        <img src='./approved-teaching-centre.jpg' alt='' width={250}/>
                        <img src='./approved-teaching-centre-badge.jpg' alt='' width={250}/>
                    </div>
                    <br/>
                    <br/>
                    <div className= {`secondaryText ${css.apply}`}>PARTNERSHIP DUTIES</div>
                    <br/>
                    <p className={css.applyContentDetails}>
                    as a CTH Approved Teaching Centre. Aeroland Aviaion Associate has access to the following: 
                    </p>
                    <br/>
                 <div className={css.applyContent}>
                    <p className={css.applyContentDetails}>
                    <span style={{fontWeight:'bold'}}>Marketing support</span> – Aeroland is added to the CTH corporate website and receive promotional videos, PDF flyers, logos and social media support to assist you with your marketing campaigns.
                    </p>
                    <br/>
                    <p className={css.applyContentDetails}>
                    <span style={{fontWeight:'bold'}}>Academic support</span> – Aeroland gain access to the CTH Members website, with password access to all your Delivery and Assessment teaching resources.
                    In addition, CTH conduct workshops which provide Aeroland Teaching Centres with up-to-date information on how to administer, deliver and assess the qualifications.
                    </p>
                    <br/>
                    <p className={css.applyContentDetails}>
                    <span style={{fontWeight:'bold'}}>Operations support</span> - Aeroland Aviation Associate is given helpful instructions on how to register students, access examination documents, submit evidence and gain the full support of our CTH Operations team
                    </p>
                    <br/>
                    <p className={css.applyContentDetails}>
                    <span style={{fontWeight:'bold'}}>International Opportunity</span>-Lastly, as a CTH Approved Teaching Centre, when Aeroland Aviation Associate students graduate, they will have access to the specially-negotiated University Pathways that provide a number of academic exemptions to universities in the UK, Canada, Switzerland and other countries.
                    </p>
                </div> 


                </div> 
              
            </div>
        </div>
    </div>
  )
}

export default AboutUsInfo