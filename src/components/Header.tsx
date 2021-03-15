import "./Navbar.css"
function Header (props: any){
 var temp:string = props.HelloName;
 return <header className="navbar">
 <img src = "images/tech.png" alt="logo" className="navbar__logo"/>
 <input type="checkbox" id="navbar__nav-toggle" className="navbar__nav-toggle"/>

 <nav className="navbar__content">
     <ul>
         <li> <a href ="#">About</a> </li>
         <li> <a href ="#">Contact</a> </li>
         <li> <a href ="#">Projects</a> </li>
         <li> <a href ="#">Get Involved</a> </li>
         <li> <a href ="#">Resources</a> </li>
     </ul>
 </nav>
 <label htmlFor="navbar__nav-toggle" className="navbar__nav-toggle-label">
     <span></span>
   </label>

</header>  
}
export default Header;