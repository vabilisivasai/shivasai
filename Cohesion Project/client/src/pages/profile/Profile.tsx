import Page from "components/Page";
import "./profile.css";
export default function Profile() {
  return (
    <Page title="Profile">
      <div className="container">
        <div className="row">
          <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
            <a href="edit.html">Edit Profile</a>

            <a href="edit.html">Logout</a>
            <br />
            <p className=" text-info">May 05,2014,03:00 pm </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Sheena Shrestha</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div
                    className="col-md-3 col-lg-3 "
                    style={{ alignItems: "center" }}
                  >
                    <img
                      alt="User Pic"
                      src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png"
                      className="img-circle img-responsive"
                    />{" "}
                  </div>

                  <div className=" col-md-9 col-lg-9 ">
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Department:</td>
                          <td>Programming</td>
                        </tr>
                        <tr>
                          <td>Hire date:</td>
                          <td>06/23/2013</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>01/24/1988</td>
                        </tr>

                        <tr>
                          <td>Gender</td>
                          <td>Female</td>
                        </tr>
                        <tr>
                          <td>Home Address</td>
                          <td>Kathmandu,Nepal</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>
                            <a href="mailto:info@support.com">
                              info@support.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>
                            123-4567-890(Landline)
                            <br />
                            {/* <br>555-4567-890(Mobile)</br> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <a href="#" className="btn btn-primary">
                      My Sales Performance
                    </a>
                    <a href="#" className="btn btn-primary">
                      Team Sales Performance
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <a
                  data-original-title="Broadcast Message"
                  data-toggle="tooltip"
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  <i className="glyphicon glyphicon-envelope"></i>
                </a>
                <span className="pull-right">
                  <a
                    href="edit.html"
                    data-original-title="Edit this user"
                    data-toggle="tooltip"
                    type="button"
                    className="btn btn-sm btn-warning"
                  >
                    <i className="glyphicon glyphicon-edit"></i>
                  </a>
                  <a
                    data-original-title="Remove this user"
                    data-toggle="tooltip"
                    type="button"
                    className="btn btn-sm btn-danger"
                  >
                    <i className="glyphicon glyphicon-remove"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
