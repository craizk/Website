//http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=itemId

function searchGE(){
    fetch("http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=10").then((response)=>response.json()).then((data)=>console.log(data))
    const inputBox =document.getElementById("itemToInput")
    const listContainer = document.getElementById("unordered")
    if(inputBox.value==="")
    {
        // alert("You must write something")
    }
    else
    {
        
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;        
        listContainer.appendChild(li);
    }
    inputBox.value="";
    return listContainer;
}

function getItemId(name){
    const itemName =document.getElementById("itemToInput")
    fetch(`https://oldschool.runescape.wiki/w/${name}`).then()

}
searchGE();