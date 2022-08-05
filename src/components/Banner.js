import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa";
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
          <div>
            {" "}
            <div className=" d-flex justify-content-center">
              <BannerRightContent />
            </div>
            <div className="w-100   mt-2 ">
              <ul className="m-0 p-0 d-flex justify-content-between ">
                <li className="list-unstyled mx-1">
                  <a className="text-decoration-none" href="http://">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "#1A375C",
                        borderRadius: 10,
                      }}
                    >
                      <FaGithubAlt
                        size={20}
                        color="white"
                        className="icon-hover"
                      />
                    </div>
                  </a>
                </li>
                <li className="list-unstyled mx-1">
                  <a className="text-decoration-none" href="http://">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "#1A375C",
                        borderRadius: 10,
                      }}
                    >
                      <FaLinkedin
                        size={20}
                        color="white"
                        className="icon-hover"
                      />
                    </div>
                  </a>
                </li>
                <li className="list-unstyled mx-1">
                  <a className="text-decoration-none" href="http://">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "#1A375C",
                        borderRadius: 10,
                      }}
                    >
                      <FaTwitterSquare
                        size={20}
                        color="white"
                        className="icon-hover"
                      />
                    </div>
                  </a>
                </li>
                <li className="list-unstyled mx-1">
                  <a className="text-decoration-none" href="http://">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "#1A375C",
                        borderRadius: 10,
                      }}
                    >
                      <FaFacebookF
                        size={20}
                        color="white"
                        className="icon-hover"
                      />
                    </div>
                  </a>
                </li>
                <li className="list-unstyled mx-1">
                  <a className="text-decoration-none" href="http://">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "#1A375C",
                        borderRadius: 10,
                      }}
                    >
                      <FaStackOverflow
                        size={20}
                        color="white"
                        className="icon-hover"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
