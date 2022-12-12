import blogArr from "../data"

export default function BlogPost(props){
    return(
        <section className="post-one">
            <article>
                <time className="date" datetime="11/12/20">11/12/20</time>
                    <h1 className="post-h1">On the Street in Brooklyn</h1>
                    <img src="./image/blog-img.jpeg"></img>
                            <p>The city's favorite bear yet again proves his mettle by
                            rescuing ayoung cat from a tree. Witnesses say that Superbear's
                            efforts were not appreciated by the feline, who inflicted some minor
                            scratch wounds on his rescuer.</p>
                            <nav className="continue-nav"><a href=""></a>Continues ...</nav>
            </article>

            <article>
            <time className="date" datetime="11/11/20">11/11/20</time>
                    <h1 className="post-h1">Vintage in Vogue</h1>
                    <img src="./image/blog-img-2.jpeg"></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!</p>
                            <nav className="continue-nav"><a href=""></a>Continues ...</nav>
            </article>

        </section>


    )
}
