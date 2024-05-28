
export default function Footer() {
    return <>
        <section className='d-flex flex-column  w-100'>
            <div className="adImage w-100 p-4 text-center">
                <img src='./images/ad_website.jpg' width='90%' />
            </div>
            <div className="footer py-4 d-flex flex-column gap-2 justify-content-center align-items-center" style={{ backgroundColor: '#314461' }}>
    <div className="d-flex justify-content-center align-items-center mb-3">
        <img src='https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo.svg'  alt='companyLogo' width='200px'/>
    </div>
    <div className="social mb-3">
        <div className="d-flex gap-4 justify-content-center fs-3 text-light">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-skype"></i>
            <i className="bi bi-facebook"></i>
        </div>
    </div>
    <div className="links d-flex gap-4 justify-content-center mb-3">
        <a href="/about" className="text-light">About Us</a>
        <a href="/services" className="text-light">Services</a>
        <a href="/contact" className="text-light">Contact</a>
        <a href="/privacy" className="text-light">Privacy Policy</a>
    </div>
    <div className="copyright text-light text-center">
        <p className="font-italic fs-5 m-0">Copy Right are Reserved &copy; {new Date().getFullYear()}</p>
    </div>
</div>

        </section>
    </>

}