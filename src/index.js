import "./assets/scss/index.scss"

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