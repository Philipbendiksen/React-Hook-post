import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { PostTuple } from "./AppLayout";
import { Post, PostSchema } from "./Posts";

function NewPostPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useOutletContext<PostTuple>();
  

    const form = useForm<Post>({
    defaultValues: { id: nanoid() },
    resolver: zodResolver(PostSchema), 
}); 


const savePost = (post: Post) => {
    setPosts([post, ...posts]);
    form.reset();
    navigate("/");
  };
    return (
        <form className="p-2 flex flex-col gap-4" 
            onSubmit={form.handleSubmit(savePost)}> 

            <h2 className="text-3xl"> Skapa ett nytt inlägg</h2>
            <p>{form.formState.errors.url?.message} </p>
            
            <input className={form.formState.errors.url ? "border-red-700" : "border-green-200 border px-2 py-2"}
            placeholder="Bild ULR" 
            type="text" 
            {...form.register("url")}
            />
            
           <p>{form.formState.errors.url?.message}</p>
            <input className="border-green-200 border px-2 py-2" 
            placeholder="title" 
            type="text" 
            {...form.register("title")}
            />
            <p>{form.formState.errors.url?.message}</p>
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


