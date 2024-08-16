
import MyTopBanner from '@/../components/MyTopBanner'
import BlogpageContent from '@/../components/BlogpageContent'

const singleBlogApi = async (id) => {
    try {
        let result = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`);
        result = await result.json();
        return result.data
    } catch (error) {
        console.log("Getting this error : ",error)
    }
}
export default async function page({ params }) {

    const blogContentApi = await singleBlogApi(params.blogid)

    return (
        <div>
            {/* Top banner  */}
            <MyTopBanner Title={blogContentApi.attributes.title} slug={`blog/${params.blogid}`} />
            {/* Top banner  */}

            {/* blog page content wrapper  */}
            <BlogpageContent id={params.blogid} />
            {/* blog page content wrapper  */}

        </div>
    )
}