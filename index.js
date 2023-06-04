//http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=10
// https://pokeapi.co/api/v2/pokemon/ditto

const price= async()=>{
    fetch("http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=10").then(response=>response.json()).then(data=>console.log(data));
}
        
    


price();