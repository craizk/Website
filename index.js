const findPokemon= async()=>{
    
    const name =document.getElementById("itemToInput").value
    updateSideBar();
   const pokeName= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.name);
    const pokePicture= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.sprites.front_default);
    const pokeType= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.types[0].type.name);
    const poke_url= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json()).then(data=>data.species.url);
    const poke_info=await fetch(poke_url)
    .then(response=>response.json()).then(data=>data.flavor_text_entries[0].flavor_text);
    
    let poke_data=document.createElement("p");
    let Container = document.getElementById("pokeName")    
    let img=document.createElement("img")
    img.src=pokePicture;

    poke_data.innerHTML=pokeName;
    Container.appendChild(poke_data);

    poke_data=document.createElement("p");
    Container = document.getElementById("pokeTypes");
    poke_data.innerHTML=pokeType ;
    Container.appendChild(poke_data);

    Container=document.getElementById("sprite");
    Container.appendChild(img);

    poke_data=document.createElement("textarea");
    
    poke_data.rows="8";
    poke_data.innerHTML=poke_info;
    Container=document.getElementById("poke_info");
    Container.appendChild(poke_data);
    console.log("Poke_data",poke_data);

    
    return pokeType
}

const changeBackground=async()=>{
    
    let img=document.createElement("img")
    img.src="imgs/grass_pokemon.jpg";
    let Container = document.getElementById("background_image")
    Container.appendChild(img)


}
changeBackground();
function updateSideBar(){
let update=document.getElementById("Moves")
let name=document.getElementById("itemToInput").value;

update.href=`https://pokemon.fandom.com/wiki/${name}#Learnset`
 update=document.getElementById("Evolutions")
update.href=`https://pokemon.fandom.com/wiki/${name}#Evolution`
 update=document.getElementById("Locations")
update.href=`https://pokemon.fandom.com/wiki/${name}#Locations`


}


    


