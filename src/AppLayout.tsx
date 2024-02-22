import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Post, mockedPosts } from "./Posts";

export type PostTuple = [Post[], (posts: Post[])=> void]

function AppLayout() {
  const [posts, setPosts] = useState(mockedPosts); 


  return (
    <div className=""> 
<header className='bg-green-400'> 
<Link to="/"> 
<h1>HomePage</h1>
</Link>
<Link to="/new">NewPostPage</Link>
 </header>
<main>
 <Outlet context={[posts, setPosts]} />
</main>

</div>
  ); 
}

export default AppLayout


