
const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-logo" />
      <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
      {/*eslint-disable-next-line*/}
      <a href="tel:888" className="footer-phone" />
      <div className="footer-websurfer">
        <span className="footer-websurfer_build">Сделано</span>
        {/*eslint-disable-next-line*/}
        <a href="#" >Стасом Мощенским</a></div>
      <div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
    </div>
  </footer>
);

export default Footer;
