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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 bg-secondary" data-aos="fade-up">

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum voluptate beatae pariatur quibusdam! Fuga molestiae rem quis rerum, ex vero, voluptatem porro nihil at sed minus, accusamus deleniti ducimus perferendis quod. Quae ea consequuntur impedit, itaque sit quas iure sequi in nulla ducimus aut eveniet est. Qui, animi magnam.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
            </p></div>
          <div className="col-md-6 bg-secondary" data-aos="fade-down"></div>
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

          <div className='offset-md-1 col-md-3 my-4 mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px",backgroundImage:"url('mh.png')",backgroundPosition:"center",backgroundSize:"cover"}}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 48 }}>Mary Hiwale</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 22 }}>Co-founder</h5>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 0 }}>University Name</h5>
          </div>
          <div className='offset-md-1 col-md-3 my-4 rounded mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px",backgroundImage:"url('ht.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 48 }}>Hanut Trivedi</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 22 }}>Co-founder & CEO</h5>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 0 }}>University Name</h5>
          </div>
          <div className='offset-md-1 col-md-3 my-4 rounded mx-auto' style={{ backgroundColor: "#D7D7D7", minHeight: "400px", position: "relative", maxWidth: "350px",backgroundImage:"url('nt.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 48 }}>Nishi Thacker</h4>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 22 }}>Co-founder & Director</h5>
            <h5 style={{ fontFamily: 'Source Sans Pro', fontWeight: 600, position: "absolute", bottom: 0 }}>University Name</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus