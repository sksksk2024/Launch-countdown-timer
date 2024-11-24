import facebook from './../images/icon-facebook.svg'
import pinterest from './../images/icon-pinterest.svg'
import instagram from './../images/icon-instagram.svg'

function Footer() {
  return (
    <footer className="flex justify-center items-center gap-8 w-screen h-256H absolute left-0 bottom-0">
      <img src={facebook} alt="facebook" />
      <img src={pinterest} alt="pinterest" />
      <img src={instagram} alt="instagram" />
    </footer>
  )
}

export default Footer
