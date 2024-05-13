import { Link } from "react-router-dom";
import "./EmailPage.css";
export const EmailPage = () => {
  return (
    <div className="email-page-wrapper">
      <div className="email-page">
        <div className="email-input-wrapper">
          <h2>Screen 2</h2>
          <input placeholder="Enter your Email" id="form-input" />
        </div>
        <div className="checkbox-male-femal-wrapper">
          {" "}
          <input type="checkbox" name="Male" id="male-checkbox" value="Male" />
          <label for="male-checkbox" value="Male">
            {" "}
            Male
          </label>
          <br/>
          <input
            type="checkbox"
            name="female"
            id="female-checkbox"
            value="Female"
          />
          <label for="female-checkbox" value="female">
            Female
          </label>
        </div>
        <div className="btn-wrapper">
        <Link className="form-btn" to="/">
        PREVIOUS
          </Link>
          <Link className="form-btn" to="/">
        NEXT
          </Link>
        </div>
      </div>
    </div>
  );
};
