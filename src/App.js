import './style.css'
import Header from './components/Header'
import HeaderNavigation from './components/HeaderNavigation'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'




export default function App(props) {
    return(
        <div className='App'>
            <Header/>
            <HeaderNavigation/>
            <BlogPost/>
            <Footer/>
        </div>
    )
}
