import logo from '../assets/sockslogo.png'


export const Footer = () => {
  return (
    <footer className="footer bg-zinc-950 text-neutral-content p-10">
        <div>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </div>
        <div>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex justify-between w-full items-end">
            <div className="flex flex-col gap-2">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <img src={logo} alt="" className='w-16 h-16' />
        </div>
        <p className="text-sm mx-auto text-center">&copy; 2024 Silly Socks and More. All rights reserved.</p>
    </footer>
  )
}
