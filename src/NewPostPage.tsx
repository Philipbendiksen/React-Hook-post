import { useForm } from "react-hook-form";
import { Post } from "./Posts";

function NewPostPage () { 

const form = useForm<Post>(); 


const savePost = (post: Post) => { 
    console.log("spara inlägget", post); 
}

    return (
        <form className="p-2 flex flex-col gap-4" 
            onSubmit={form.handleSubmit(savePost)}> 

            <h2 className="text-3xl"> Skapa ett nytt inlägg</h2>

            <input className="border-green-200 border px-2 py-2" 
            placeholder="Bild ULR" 
            type="text" 
            {...form.register("url")}
            />
            <input className="border-green-200 border px-2 py-2" 
            placeholder="title" 
            type="text" 
            {...form.register("title")}
            />
            <textarea className="border-green-200 border px-2 py-2" 
            placeholder="text...." 
            rows={6} 
            {...form.register("content")}
            />
            <button className="text-xl bg-green-400 p-2">SPARA</button>
        </form>
    ); 

}

export default NewPostPage; 


