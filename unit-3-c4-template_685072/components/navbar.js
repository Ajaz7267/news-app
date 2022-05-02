function navbar(){
    return`
    <div id="navbar">
    <div><h2><a href="index.html">News App</a></h2></div> 
    <div><input type="search" name="" id="search_input" placeholder="Search News"></div>
   </div>
   <div id="sidebar">
   <h2>countries</h2>
   <h3 id="in" onclick="">india</h3>
   <h3 id="ch" onclick="">china</h3>
   <h3 id="us" onclick="">usa</h3>
   <h3 id="uk" onclick="">UK</h3>
   <h3 id="nz" onclick="">Newzeland</h3>


 </div>
   `
}
export default navbar