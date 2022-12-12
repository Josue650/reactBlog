export default function BlogPostItemList(props){
    return (
        <li className="blog-items">
          <span className="title">{props.title}</span>
        <div
          className="img-list"
          style={{ backgroundImage: "url(" + props.img + ")" }}
        />
        </li>
    )
}
