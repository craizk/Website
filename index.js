

let count=0;
let i=0;
const findPokemon= async()=>{
        
    const name =document.getElementById("itemToInput").value
    
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
    
    let Container;
    
    if(count!=0)
    {
    Container = document.getElementById("pokeTypes");
    Container.removeChild(Container.firstElementChild)
    Container = document.getElementById("pokeName")
    Container.removeChild(Container.firstElementChild) 
    Container=document.getElementById("sprite");
    Container.removeChild(Container.firstElementChild)
    Container=document.getElementById("sprite2");
    Container.removeChild(Container.firstElementChild)
    Container=document.getElementById("poke_info");
    Container.removeChild(Container.firstElementChild)
    }
    
    



    let poke_data=document.createElement("p");
    Container = document.getElementById("pokeName")  
     poke_data.innerHTML=pokeName;
    Container.appendChild(poke_data);


    poke_data=document.createElement("p");
    Container = document.getElementById("pokeTypes");
    poke_data.innerHTML="Type:"+pokeType ;
    Container.appendChild(poke_data);


    let img=document.createElement("img")
    img.src=pokePicture;
    Container=document.getElementById("sprite");
    Container.appendChild(img);


    img=document.createElement("img")
    img.src=pokePicture;
    Container=document.getElementById("sprite2");
    Container.appendChild(img);


    poke_data=document.createElement("textarea");
    poke_data.rows="8";
    poke_data.innerHTML=poke_info;
    Container=document.getElementById("poke_info");
    Container.appendChild(poke_data);

    updateSideBar();
    count=1;

    
    
}

const changeBackground=async()=>{
    
    let img=document.createElement("img")
    img.src="imgs/grass_pokemon.jpg";
    let Container = document.getElementById("background_image")
    Container.appendChild(img)


}
changeBackground();


function updateSideBar(){
    let name=document.getElementById("pokeName").getElementsByTagName('p')[0].innerHTML
let update=document.getElementById("Moves")


update.href=`https://pokemon.fandom.com/wiki/${name}#Learnset`
 update=document.getElementById("Evolutions")
update.href=`https://pokemon.fandom.com/wiki/${name}#Evolution`
 update=document.getElementById("Locations")
update.href=`https://pokemon.fandom.com/wiki/${name}#Game_info`


}

const showEvolveChain =async ()=>{
    
    // Gets the current pokemons next evolution
    let Pname=document.getElementById("pokeName").getElementsByTagName('p')[0].innerHTML
    //console.log(name)
    const url1= await fetch(`https://pokeapi.co/api/v2/pokemon/${Pname}`)
    .then(response=>response.json()).then(data=>data.species.url)
    const url2=await fetch(url1).then(response=>response.json()).then(data=>data.evolution_chain.url)
    
    const newEvolve= async () => {
        if(i==0){
            i++;
            return await fetch(url2).then(response=>response.json()).then(data=>data.chain.evolves_to[0].species.name)
            
        }
        else{
            i=0;
           return await fetch(url2).then(response=>response.json()).then(data=>data.chain.evolves_to[0].evolves_to[0].species.name)
        }
    } 

    const waitName =await newEvolve();
    console.log(waitName)
    
    
         
    
    // takes the new pokemons name and goes to display the data

    const pokeName= await fetch(`https://pokeapi.co/api/v2/pokemon/${waitName}`)
    .then(response=>response.json()).then(data=>data.name);
     console.log(pokeName)

    // plugging in the new pokemons inforamtion
    let img_url =await  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response=>response.json()).then(data=>data.sprites.front_default)
    
    // getting evolved species info
    const poke_url= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response=>response.json()).then(data=>data.species.url);
    const poke_info=await fetch(poke_url).then(response=>response.json())
    .then(data=>data.flavor_text_entries[0].flavor_text);


    let Container;

   
    
    // Create new evolved image
    let img=document.createElement("img")
    img.src= img_url;
    
    Container=document.getElementById("sprite2");
    Container.removeChild(Container.firstElementChild)   
    Container.appendChild(img)
    
    img=document.createElement("img")
    img.src= img_url;
    Container=document.getElementById("sprite");
    Container.removeChild(Container.firstElementChild)   
    Container.appendChild(img)

    // // Change Pokename
    poke_data=document.createElement("p");
    Container = document.getElementById("pokeName")
    poke_data.innerHTML=pokeName;
    Container.removeChild(Container.firstElementChild)
    Container.appendChild(poke_data)
    
    // //Change Species info
    Container=document.getElementById("poke_info");
    Container.removeChild(Container.firstElementChild)
    poke_data=document.createElement("textarea");
    poke_data.rows="8";
    poke_data.innerHTML=poke_info;
    Container.appendChild(poke_data)

    updateSideBar()
    
    // 
    
}   

    


