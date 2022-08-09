import FooterCenterContent from "./FooterCenterContent";
import FooterLeftContent from "./FooterLeftContent";
import FooterRightContent from "./FooterRightContent";

function Footer() {
  return (
    <div className={`CardBg mt-5 p-2`}>
      <footer>
        <div className="container ">
          <div className="row">
            <div className="col-md-4 p-3">
              <FooterLeftContent />
            </div>
            <div className="col-md-4  p-3">
              <FooterCenterContent />
            </div>
            <div className="col-md-4 p-3">
              <div>
                <h6>Follow me on </h6>
                <FooterRightContent />
              </div>
            </div>
          </div>
          <div className="text-center">
            © {new Date().getFullYear()} Al Amin
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
