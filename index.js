const findPokemon= async()=>{
    
    const name =document.getElementById("itemToInput").value
    
   const pokeName= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.name);
    const pokePicture= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.sprites.front_default);
    const pokeType= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.types[0].type.name);
    let poke_data=document.createElement("p");
    let Container = document.getElementById("pokeName")    
    let img=document.createElement("img")
    img.src=pokePicture;

    poke_data.innerHTML=pokeName;
    Container.appendChild(poke_data);
    poke_data=document.createElement("p");
    Container = document.getElementById("pokeTypes")
    poke_data.innerHTML=pokeType 
    Container.appendChild(poke_data)
    Container=document.getElementById("sprite")
    Container.appendChild(img)
    
    return pokeType
}

const changeBackground=async()=>{

    let img=document.createElement("img")
    img.src="imgs/grass_pokemon.jpg";
    let Container = document.getElementById("body")
    Container.appendChild(img)


}


    


