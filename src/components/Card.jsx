
import React from 'react'

function Card({data}) {

  // console.log(props);
// or
  // const {data} = props
  // console.log(data);
  // or
  // console.log(data);


  return <>



 {/* <!-- Free Tier --> */}

 

 <div className="col-lg-4">
 <div className="card mb-5 mb-lg-0">
   <div className="card-body">
     <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
     <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
     <hr/>
     <ul className="fa-ul">
       <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:data.user}</li>
       <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
       <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PublicProjects}</li>
       <li className={data.isAccess?"":"text-muted"}><span className="fa-li"><i className={data.isAccess?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
       <li className={data.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PrivateProjects}</li>
       <li className={data.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className={data.isPhoneSupport?"fas fa-check":"fas fa-times"}></i></span>{data.PhoneSupport}</li>
       <li className={data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"?<><b>Unlimited</b> {data.Subdomain}</>:data.Subdomain}</li>
       <li className={data.isStatusReports?"":"text-muted"}><span className="fa-li"><i className={data.isStatusReports?"fas fa-check":"fas fa-times"}></i></span>{data.StatusReports}</li>
     </ul>
     <div className="d-grid">
       <a href="#" className="btn btn-primary text-uppercase">Button</a>
     </div>
   </div>
 </div>
</div>


</>


}

export default Card