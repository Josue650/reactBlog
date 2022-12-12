import BlogListItems from "./BlogListItems"
import blogArr from "../data"

const post = blogArr.map((ele, idx) => {
    return (
        <BlogListItems
        key={idx}
        title={ele.title}
        img={ele.img}
        />
    )
});

export default function BlogList(props){
    return (
        <div className="img-container">
            <ul className="img-list">{post}</ul>

        </div>
    )
}
