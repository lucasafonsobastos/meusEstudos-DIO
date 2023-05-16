export type PokemonData = {
  id:number,
  name:string,
  sprites:{
    other:{
      home:{
        front_default:string
      }
    }
  },
  types:{
    type:{
      name:string
    }
  }[]
}
