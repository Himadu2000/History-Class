import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Navigation from "./../Navigation";
import PDF1 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Mulashra.pdf";
import PDF2 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Sri lankawa janawasa veema.pdf";
import PDF3 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/nirithadiga rajadhani.pdf";
import PDF4 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Sri lankawe perani samajaya New.pdf";
import PDF5 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Sri lankawa ha batahira lokaya 2.pdf";
import PDF6 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Sri lankawe perani vidyawa ha thakshanaya MCQ.pdf";
import PDF7 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/Punarudhaya.pdf";
import PDF8 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/mahanuwara rajadhaniya.pdf";
import PDF9 from "./../../../../../assets/files/Grade 10/Lesson Wise Papers/All chapter photos new.pdf";

const BasicTable = () => {
  return (
    <>
      <Navigation />
      <MDBTable>
        <MDBTableHead color='primary-color' textWhite>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Download</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>01. ඉතිහාසය හැදෑරීමේ මුලාශ‍්‍රය</td>
            <td>
              <a href={PDF1} download='Mulashra'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>02. ශ‍්‍රී ලංකාවේ ජනාවාස</td>
            <td>
              <a href={PDF2} download='Sri lankawa janawasa veema'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>03. ශ‍්‍රී ලංකාවේ දේශපාලන බලය විකාශනය වීම</td>
            <td>
              <a href={PDF5} download='No File'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>04. ශ‍්‍රී ලංකාවේ පැරණි සමාජය</td>
            <td>
              <a href={PDF4} download='Sri lankawe perani samajaya New'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>05. ශ‍්‍රී ලංකාවේ පැරණි විද්‍යාව හා තාක්‍ෂණය</td>
            <td>
              <a
                href={PDF6}
                download='Sri lankawe perani vidyawa ha thakshanaya MCQ'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>06. ඓතිහාසික දැනුම සහ එහි ප‍්‍රයෝගික ආදේශනය</td>
            <td>
              <a href={PDF4} download='Sri lankawe perani samajaya New'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              07. වියළි කලාපයේ පැරණි නගර පිරිහීම හා නිරිතදිග නව රාජධානි බිහි වීම
            </td>
            <td>
              <a href={PDF3} download='nirithadiga rajadhani'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>08. මහනුවර රාජධානිය</td>
            <td>
              <a href={PDF8} download='mahanuwara rajadhaniya'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>09. පුනරුදය</td>
            <td>
              <a href={PDF7} download='Punarudhaya'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>09. No File</td>
            <td>
              <a href={PDF7} download='No File'>
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>All Chapter Photos</td>
            <td>
              <a href={PDF9} download='All Chapter Photos'>
                Download
              </a>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default BasicTable;
