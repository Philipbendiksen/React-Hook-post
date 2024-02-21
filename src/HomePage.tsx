import { mockedPosts } from "./Posts";

function HomePage () { 
    return (
        
        <div className="flex flex-col gap-6"> 
            {mockedPosts.map(post => ( 
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

