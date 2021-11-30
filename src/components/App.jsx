import "../assets/scss/index.scss"
import Recipes from "./Recipes"
import swords from '../assets/images/swords.jpg'
import swordSVG from '../assets/images/swordSVG.svg'



const App = () => 
{
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
                <img src={swords} alt="swords" width="750" />
                <img src={swordSVG} alt="swords" width="250" />
                <Recipes />
            </main>

        </>
    )
}

export default App