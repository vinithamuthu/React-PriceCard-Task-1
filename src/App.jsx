import React from 'react'
import Card from './components/Card'

function App() {

  let data = [

    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      Subdomain:"Free Subdomain",
      isSubdomain:false,
      StatusReports:"Monthly Status Reports",
      isStatusReports:false

    },

    {
      plan:"PLUS",
      price:9,
      user:"5 User",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      Subdomain:"Free Subdomain",
      isSubdomain:true,
      StatusReports:"Monthly Status Reports",
      isStatusReports:false

    },

    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      Subdomain:"Free Subdomain",
      isSubdomain:true,
      StatusReports:"Monthly Status Reports",
      isStatusReports:true

    }


  ]

  return <>
  
  {/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">


   {
   data.map((e,i)=>{

    return <Card data={e} key={i} />


  })

   }
   
     
    </div>
  </div>
</section>

  
  </>


}

export default App