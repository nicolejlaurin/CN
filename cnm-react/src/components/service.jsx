import React from 'react';
import { FaLaravel, FaUsb, FaWeixin, FaCalendarCheck, FaChartLine, FaCode, FaCodeBranch} from 'react-icons/fa';


export default () => (
	<div class="service">
	<h4 >What We Do</h4>
	<p className="wwd-p">
	We help athletes maximize their full potential by giving them the platform to reach perfect audience.	</p>
	<div id="container" class="container">
    <div class="item man"> <span class="icon feature_box_col_one"></span>
		<br></br>
		<FaChartLine size={70} color={'black'} ></FaChartLine>
    <h4>Management</h4>
		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
		</p>
    </div>

    <div class="item mark"> <span class="icon feature_box_col_two"></span>
		<br></br>
    <FaCode size={70}></FaCode>
    <h4>Marketing</h4>
    <p>
      CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
    </p>
    </div>

    <div class="item cons"> <span class="icon feature_box_col_three"></span>
		<br></br>
    <FaWeixin size={70}></FaWeixin>
    <h4>Consultation</h4>
    <p>
      CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
    </p>
    </div>
		</div>
	</div>
);
