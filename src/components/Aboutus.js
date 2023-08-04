import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Aboutus() {
  return (
    <>
      <Header />
      <div className="container" >
        <div className="row my-5">
          <h1 className="text-center pb-5" data-aos="fade-up" style={{
            color: '#D77630',
            fontFamily: 'Assistant',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal'
          }}>
            About Us
          </h1>
          <p data-aos="fade-down" className="pb-5" style={{
            textAlign: 'justify',
            fontFamily: 'Source Sans Pro', fontSize: '28px',
          }}>
            We are a leading global provider of international internships and student accommodation solutions.
            With a strong focus on facilitating meaningful professional experiences for students and young professionals, we strive to connect talented individuals with reputable organizations across various industries.
            By offering comprehensive internship programs and high-quality accommodation options, we enable students to gain valuable skills, expand their global networks, and enhance their personal and professional growth.
          </p>
        </div>
        <div className="row mb-5">
          <div className="col-md-6" data-aos="fade-up" style={{backgroundImage:"url('Vission.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>

          </div>
          <div className="col-md-6 py-5 px-4" data-aos="fade-down" style={{ backgroundColor: "#273F4F" }}>
            <h2 style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Assistant',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
            }}>Our Vision</h2>
            <hr className='d-block mx-auto mt-5' style={{ minHeight: "3px", backgroundColor: '#FEECEC' }} />
            <p style={{
              color: '#FFF',
              textAlign: 'justify',
              fontFamily: 'Source Sans Pro',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              letterSpacing: '-1.5px',
            }}>
              Our vision is to be the leading provider of international internships and student accommodation, empowering students to enhance their global perspective, gain valuable professional experience, and foster cultural understanding. At Internacc, we envision a future where every student has the opportunity to embark on a transformative international internship experience while enjoying secure and enriching student accommodation. We strive to lead the industry in providing comprehensive solutions that empower students to unlock their full potential and thrive in a dynamic, interconnected world.
            </p>
          </div>
        </div>

        <div className="row my-5">

          <div className="col-md-6 py-5 px-4" data-aos="fade-up"><h2 style={{
            color: '#D77630',
            textAlign: 'center',
            fontFamily: 'Assistant',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
          }}>Our Mission</h2>
            <p className="py-2" style={{
              color: '#000',
              textAlign: 'justify',
              fontFamily: 'Source Sans Pro',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              letterSpacing: '-1.5px',
            }}>
              Facilitating Global Opportunities :
              We strive to connect students with diverse international internship opportunities, enabling them to gain valuable professional experience in different industries and cultures. We aim to broaden their horizons and prepare them for success in the global workforce.

            </p>
            <hr className='d-block mx-auto mt-5' style={{ minHeight: "3px", backgroundColor: '#FEECEC' }} />
            <p className="py-2" style={{
              color: '#000',
              textAlign: 'justify',
              fontFamily: 'Source Sans Pro',
              fontSize: '28px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              letterSpacing: '-1.5px',
            }}>
              Seamless Accommodation Solutions :
              We are committed to providing students with safe, comfortable, and affordable accommodation options in their host countries. Our mission is to ensure that students can focus on their internships and studies, knowing that they have a supportive and secure living environment.
            </p></div>
          <div className="col-md-6" data-aos="fade-down" style={{backgroundImage:"url('Mission.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionX:"center"}}></div>
        </div>

        <h1 style={{
          color: '#263238',
          fontFamily: 'Arial',
          fontSize: '80px',
          fontStyle: 'italic',
          fontWeight: '700',
          lineHeight: 'normal',
        }} data-aos="fade-right">Core Team</h1>
        <div className="row mb-5 text-light" data-aos="fade-down">

          <div className='offset-md-1 col-md-3 my-4 mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px", backgroundImage: "url('mh.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 48 }}>Mary Hiwale</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 22 }}>Co-founder</h5>
          </div>
          <div className='offset-md-1 col-md-3 my-4 rounded mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px", backgroundImage: "url('ht.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 74 }}>Hanut Trivedi</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 50 }}>Co-founder & CEO</h5>
          </div>
          <div className='offset-md-1 col-md-3 my-4 rounded mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px", backgroundImage: "url('nt.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 74 }}>Nishi Thacker</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 50 }}>Chief Operating Officer</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus