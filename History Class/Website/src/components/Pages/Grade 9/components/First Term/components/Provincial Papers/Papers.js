import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import PDF1 from "./../../../../../assets/files/OL/Lesson Wise Papers/01 Industrial Revolution.pdf";
import PDF2 from "./../../../../../assets/files/OL/Lesson Wise Papers/02 Sri lankawe britanya balaya pehitu veema.pdf";
import PDF3 from "./../../../../../assets/files/OL/Lesson Wise Papers/03 Brithanyanan yatathe desapalana wenasskam.pdf";
import PDF4 from "./../../../../../assets/files/OL/Lesson Wise Papers/04 Sri lankawe  jathika Punarudaya.pdf";
import PDF5 from "./../../../../../assets/files/OL/Lesson Wise Papers/05 Sri lankawe arthika ha samajeeya wenaskam.pdf";
import PDF6 from "./../../../../../assets/files/OL/Lesson Wise Papers/06 nidahasin pasu sri lankawa.pdf";
import PDF7 from "./../../../../../assets/files/OL/Lesson Wise Papers/07 lokaye kepi penena viplawa.pdf";
import PDF8 from "./../../../../../assets/files/OL/Lesson Wise Papers/08 World War One and Tow.pdf";

const BasicTable = () => {
  return (
    <MDBTable>
      <MDBTableHead color='primary-color' textWhite>
        <tr>
          <th>Lesson</th>
          <th>Unit</th>
          <th>Download</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>01 Industrial Revolution</td>
          <td>
          
            <a href={PDF1} download='01 Industrial Revolution'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>02 Sri lankawe britanya balaya pehitu veema</td>
          <td>
          
            <a
              href={PDF2}
              download='02 Sri lankawe britanya balaya pehitu veema'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>03 Brithanyanan yatathe desapalana wenasskam</td>
          <td>
          
            <a
              href={PDF3}
              download='03 Brithanyanan yatathe desapalana wenasskam'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>04 Sri lankawe jathika Punarudaya</td>
          <td>
          
            <a href={PDF4} download='04 Sri lankawe jathika Punarudaya'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>05 Sri lankawe arthika ha samajeeya wenaskam</td>
          <td>
          
            <a
              href={PDF5}
              download='05 Sri lankawe arthika ha samajeeya wenaskam'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>06 nidahasin pasu sri lankawa</td>
          <td>
          
            <a href={PDF6} download='06 nidahasin pasu sri lankawa'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>07 lokaye kepi penena viplawa</td>
          <td>
          
            <a href={PDF7} download='07 lokaye kepi penena viplawa'>
              Download
            </a>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>08 World War One and Tow</td>
          <td>
          
            <a href={PDF8} download='08 World War One and Tow'>
              Download
            </a>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default BasicTable;
