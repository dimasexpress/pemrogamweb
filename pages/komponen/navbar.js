
export default function Navbar(){
    return(
        <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md custom-navbar navbar-blue">
        
           <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon "></span>
           </button>
             <div className="collapse navbar-collapse " id="collapsibleNavbar">
                 <ul className="navbar-nav m-auto ">
                   <li className="nav-item">
                     <a className="nav-link" href="#offer"><b>Our Offer</b></a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#"><b>How it works</b></a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#"><b>Benifits</b></a>
                   </li>  

                 </ul>
                 
             </div>  
</nav>
     
    )
}