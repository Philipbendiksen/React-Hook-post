import { useOutletContext } from "react-router-dom";
import { PostTuple } from "./AppLayout";

function HomePage () { 
    const [posts] = useOutletContext <PostTuple>(); 

    return (
        
        <div className="flex flex-col gap-6"> 
            {posts.map((post) => ( 
              <div key={post.id}>     
                <img src={post.url} className="w-full pb-2 h-96 object-cover" />
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="px-2 text-lg">{post.content}</p>

            </div>

            ))}
            </div>
        
    ); 

}

export default HomePage; 

