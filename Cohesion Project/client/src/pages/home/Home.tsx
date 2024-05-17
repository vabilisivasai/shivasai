import Page from "../../components/Page";
import "./home.css";

export default function Home() {
  return (
    <Page title="Home">
      <div className="container">
        <div className="well">
          <div className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="http://placekitten.com/150/150"
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Receta 1</h4>
              <p className="text-right">By Francisco</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pharetra varius quam sit amet vulputate. Quisque mauris augue,
                molestie tincidunt condimentum vitae, gravida a libero. Aenean
                sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor
                imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in
                felis sit amet augue.
              </p>
              <ul className="list-inline list-unstyled">
                <li>
                  <span>
                    <i className="glyphicon glyphicon-calendar"></i> 2 days, 8
                    hours{" "}
                  </span>
                </li>
                <li>|</li>
                <span>
                  <i className="glyphicon glyphicon-comment"></i> 2 comments
                </span>
                <li>|</li>
                <li>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star-empty"></span>
                </li>
                <li>|</li>
                <li>
                  <span>
                    <i className="fa fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fa fa-twitter-square"></i>
                  </span>
                  <span>
                    <i className="fa fa-google-plus-square"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="well">
          <div className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="http://placekitten.com/150/150"
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Receta 2</h4>
              <p className="text-right">By Anailuj</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pharetra varius quam sit amet vulputate. Quisque mauris augue,
                molestie tincidunt condimentum vitae, gravida a libero. Aenean
                sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor
                imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in
                felis sit amet augue.
              </p>
              <ul className="list-inline list-unstyled">
                <li>
                  <span>
                    <i className="glyphicon glyphicon-calendar"></i> 2 days, 8
                    hours{" "}
                  </span>
                </li>
                <li>|</li>
                <span>
                  <i className="glyphicon glyphicon-comment"></i> 2 comments
                </span>
                <li>|</li>
                <li>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star-empty"></span>
                </li>
                <li>|</li>
                <li>
                  <span>
                    <i className="fa fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fa fa-twitter-square"></i>
                  </span>
                  <span>
                    <i className="fa fa-google-plus-square"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
