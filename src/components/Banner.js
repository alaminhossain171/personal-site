import BannerLeftContent from "./BannerLeftContent";
import BannerRightContent from "./BannerRightContent";
function Banner() {
  return (
    <div className={`mt-4 mb-4`}>
      <div className="row">
        <div className="col-md-6  order-2 order-md-1 py-3 d-flex justify-content-center d-md-block">
          <BannerLeftContent />
        </div>
        <div className="col-md-6 order-1 order-md-2 py-3 d-flex justify-content-center align-items-center">
          <BannerRightContent />
        </div>
      </div>
    </div>
  );
}

export default Banner;
