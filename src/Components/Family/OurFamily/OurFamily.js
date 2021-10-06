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
              <h1>Bride Groom's Family</h1>
            </div>
            <div className="brideGroomFamilyDetails">
              <tbody>
                <tr>
                  <td width="27%">Full Name</td>
                  <td width="3%">:</td>
                  <td width="65%" className="brideGroomNameStyle">
                    Sekhar Chemudu
                  </td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>KPHB ,Hyderabad</td>
                </tr>
                <tr>
                  <td>Occupation</td>
                  <td>:</td>
                  <td>Software Engineer, NCR</td>
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
                  <td>Srinuvas Rao &amp; Venkata Lakshimi Chemudu</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Pappulavaaripalem</td>
                </tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Brother &amp; Sister-in-law</td>
                  <td>:</td>
                  <td>Sathish &amp; Naga Durga Chemudu</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>KPHB ,Hyderabad</td>
                </tr>
                <tr>
                  <td>Brother's Occupation</td>
                  <td>:</td>
                  <td>Software Engineer in Wellsfargo</td>
                </tr>
                <tr>
                  <td>Brother's Kids</td>
                  <td>:</td>
                  <td>Mokshal Srinivas</td>
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
              <h1>Bride Groom's Family</h1>
            </div>
            <div className="brideGroomFamilyDetails">
              <tbody>
                <tr>
                  <td width="27%">Full Name</td>
                  <td width="3%">:</td>
                  <td width="65%" className="brideGroomNameStyle">
                    Sekhar Chemudu
                  </td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>KPHB ,Hyderabad</td>
                </tr>
                <tr>
                  <td>Occupation</td>
                  <td>:</td>
                  <td>Software Engineer, NCR</td>
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
                  <td>Srinuvas Rao &amp; Venkata Lakshimi Chemudu</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>Pappulavaaripalem</td>
                </tr>
                <tr class="seperation_row">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Brother &amp; Sister-in-law</td>
                  <td>:</td>
                  <td>Sathish &amp; Naga Durga Chemudu</td>
                </tr>
                <tr>
                  <td>Living in</td>
                  <td>:</td>
                  <td>KPHB ,Hyderabad</td>
                </tr>
                <tr>
                  <td>Brother's Occupation</td>
                  <td>:</td>
                  <td>Software Engineer in Wellsfargo</td>
                </tr>
                <tr>
                  <td>Brother's Kids</td>
                  <td>:</td>
                  <td>Mokshal Srinivas</td>
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
