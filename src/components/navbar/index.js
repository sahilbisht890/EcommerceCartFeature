import { Link } from 'react-router-dom'
import style from './style/style.module.css'
export default function Navbar() {

 const linkStyle={
  color:'white',
  textDecoration:'none'
 }

  return <>
    <section className="navbar w-100  p-0  text-light">
      <div className="topNavbarSection d-flex align-items-center justify-content-between w-100 px-4 py-2" style={{ backgroundColor: 'rgb(53 76 109)' }}>
        <div>
          <p>24/7 Customer Service  1-800-234-5678</p>
        </div>

        <div className={`d-flex justify-content-center gap-5 ${style.btnContainer}`}>
          <div>
            <p>Shipping & Return </p>
          </div>
          <div>
            <p>Track Order</p>
          </div>
        </div>
      </div>
      <div className="midNavbarSection d-flex align-items-center justify-content-center w-100 py-3" style={{ backgroundColor: 'rgb(49 68 97)' }}>
        <div className="logoEcommerce">
          <div><img src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo.svg' alt='logoEcommerce' height='50px' /></div>
        </div>
      </div>


      <div className={`d-flex w-100 justify-content-between align-items-center py-3 gap-2 px-4 fw-medium fs-5 ${style.btnContainer}`} style={{ backgroundColor: 'rgb(53 76 109)' }}>
        <div><p><Link  className={style.linkItem} style={linkStyle} to='/' >All Products</Link></p></div>
        <div><p>Home Appliances</p></div>
        <div><p>Audio & Video</p></div>
        <div><p>Refrigertor</p></div>
        <div><p>New arrivals</p></div>
        <div><p>Today's deal</p></div>
        <div><p className='mb-4'> <i className="fs-2  bi bi-cart-check-fill"></i><Link className={style.linkItem} style={linkStyle} to='/cart'>Your Cart</Link></p></div>
        <div><p>Log In</p></div>
      </div>
    </section>

  </>

}

function Middle() {

  return <>
    <section className={`${style.middleSection} w-100  px-5 d-flex flex-column gap-5`}>

      <div className='contentMiddle pt-5 d-flex justify-content-end align-items-center w-100 ' >
        <div className='bg-white  px-5 py-4' style={{ width: '35%' }}>
          <div className='textContent d-flex flex-column gap-2'>
            <div className='heading '>
              <h1>The best home entertainment system is here</h1>
            </div>

            <div className='subText'>
              <p>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas</p>
            </div>

            <div className='shopNow'>
              <button className='btn border border-0 text-primary fw-bold button-light fs-5'>Shop Now</button>
            </div>

          </div>
        </div>

      </div>

      <div className='d-flex gap-2 mt-5 justify-content-between align-items-center border border-2 bg-light px-3'>
        <div className='bg-white p-2 py-4  border border-0 border-dark d-flex  gap-2'>
          <div><i className="bi bi-truck text-primary fs-2"></i></div>
          <div className='d-flex flex-column'>
            <div className='text-primary fw-bold'>Free Shipping</div>
            <div>When you spend $80 or more</div>
          </div>

        </div>

        <div className='bg-white p-2 py-4 border border-0 border-dark d-flex  gap-2'>
          <div><i className="bi bi-chat-dots-fill text-primary fs-2"></i></div>
          <div className='d-flex flex-column'>
            <div className='text-primary fw-bold'>
              We are available 24/7</div>
            <div>Need help? contact us anytime
            </div>
          </div>

        </div>


        <div className='bg-white p-2 py-4 border border-0 border-dark d-flex  gap-2'>
          <div><i className="bi bi-arrow-counterclockwise text-primary fs-2"></i></div>
          <div className='d-flex flex-column'>
            <div className='text-primary fw-bold'>Satisfied or return</div>
            <div>Easy 30-day return policy</div>
          </div>

        </div>

        <div className='bg-white p-2 py-4 border border-0 border-dark d-flex  gap-2'>
          <div><i className="bi bi-credit-card-fill text-primary fs-2"></i></div>
          <div className='d-flex flex-column'>
            <div className='text-primary fw-bold'>100% secure payments</div>
            <div>Visa, Mastercard, Stripe, PayPal</div>
          </div>

        </div>



      </div>

    </section>
  </>

}


export { Middle }