// import img '../blog-img.jpeg'

export default function BlogPost(props){
    return(
        <section className="post-one">
            <article>
                <time className="date" datetime="11/12/20">11/12/20</time>
                    <h1 className="post-h1">On the Street in Brooklyn</h1>
                    {/* <img src={require('./blog-img.jpeg')} /> */}
                            <p>The city's favorite bear yet again proves his mettle by
                            rescuing ayoung cat from a tree. Witnesses say that Superbear's
                            efforts were not appreciated by the feline, who inflicted some minor
                            scratch wounds on his rescuer.</p>
            </article>
        </section>
    )
}
