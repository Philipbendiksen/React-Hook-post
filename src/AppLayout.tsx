import { Link, Outlet } from "react-router-dom";

function AppLayout() {

  return (
    <>
<header className='bg-green-400'> 
<Link to="/"> 
<h1>HomePage</h1>
</Link>
<Link to="/new">NewPostPage</Link>
 </header>
<main>
 <Outlet />
</main>

    </>
  ); 
}

export default AppLayout


