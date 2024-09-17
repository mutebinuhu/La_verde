import { BlogList } from "@/components/BlogList"

const { default: AddBlogPost } = require("@/components/AddBlog")

const Page = () =>{
    return(
       <main>
          
            <BlogList/>
        
       </main>
    )
}
export default Page