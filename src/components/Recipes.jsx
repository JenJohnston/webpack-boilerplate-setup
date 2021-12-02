//@refresh reset

import { useState } from 'react'

const elvenShieldRecipe =
{
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletRecipe =
{
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 2
}

console.log(elvenShieldRecipe, elvenGauntletRecipe)



const Recipes = () =>
{
    const [recipe, setRecipe] = useState({})
    return (
        <>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntletRecipe)}>Elven Gauntlet Recipe</button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Recipes