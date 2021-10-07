import { useState } from "react";
import "./OurFamily.css";

function OurFamily() {
  const [bride, setBride] = useState(true);

  const brideHandler = () => {
    setBride((prevState) => !prevState);
  };

  return (
    <div className="OurFamily">
      <div className="coupleNameBtn">
        <p className="bride-groom-btn" onClick={brideHandler}>
          Bride Groom's
        </p>
        <p className="bride-btn" onClick={brideHandler}>
          Bride's
        </p>
      </div>
      {bride && (
        <div className="brideGroomOuterContainer">
          <div className="blueBorderEraser"></div>
          <div className="brideGroomInnerContainer">
            <div className="brideGroomHeader">
              <p className="fontMedium great-vibes">Bride Groom's Family</p>
            </div>
            <div className="brideGroomFamilyDetails crimson">
              <tbody>
                <tr>
                  <td width="27%">Full Name</td>
                  <td width="3%">:</td>
                  <td width="65%" className="brideGroomNameStyle">
                    Kovvuri Venkata Krishna Reddy
                  </td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Kutukuluru, East Godavari district, AP.</td>
                </tr>
                <tr></tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Father &amp; Mother</td>
                  <td>:</td>
                  <td>Kovvuri Venkata Reddy &amp; Kovvuri Subbalakshmi</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Kutukuluru, East Godavari district, AP.</td>
                </tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Brother &amp; Sister-in-law</td>
                  <td>:</td>
                  <td>
                    Kovvuri Satya Durga Reddy &amp; Kovvuri Bhaskara Lakshmi
                  </td>
                </tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Brother's Kids</td>
                  <td>:</td>
                  <td>Kovvuri Jayavardhana Venkata Hariharan Reddy</td>
                </tr>
              </tbody>
            </div>
            <div className="brideGroomBottomDesign"></div>
          </div>
        </div>
      )}
      {!bride && (
        <div className="brideOuterContainer">
          <div className="pinkBorderEraser"></div>
          <div className="brideInnerContainer">
            <div className="brideGroomHeader">
              <p className="fontMedium great-vibes">Bride's Family</p>
            </div>
            <div className="brideGroomFamilyDetails crimson">
              <tbody>
                <tr>
                  <td width="27%">Full Name</td>
                  <td width="3%">:</td>
                  <td width="65%" className="brideGroomNameStyle">
                    Padala Lakshmi Ravalika
                  </td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Balabadrapuram, East Godavari District, Ap.</td>
                </tr>
                <tr></tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Father &amp; Mother</td>
                  <td>:</td>
                  <td>Padala Srinivasa Reddy &amp; Padla Aruna</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Balabadrapuram, East Godavari District, Ap.</td>
                </tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Brother</td>
                  <td>:</td>
                  <td>Padala Venkata Reddy</td>
                </tr>
              </tbody>
            </div>
            <div className="brideGroomBottomDesign"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurFamily;
