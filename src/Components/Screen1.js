import { Link } from "react-router-dom";
import "./NameForm.css";
export const NameForm = () => {
  return (
    <div className="name-container">
      <div className="name-form-wrapper">
        <div>
          <h2>Screen 1</h2>
          <input placeholder="Enter your Name" id="form-input" />
        </div>
        <div className="btn-wrapper">
          <Link className="form-btn" to="/email-page">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};
