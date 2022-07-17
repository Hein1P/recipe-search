export const Searchbar=({handleName,name,searchRecipe})=>{
    const handleKeyPress=(e)=>{
        if(e.key== 'Enter'){
            searchRecipe();
        }
    }
    return(  <div className="Search">
        <input
            value={name}
            onChange={event => handleName(event.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Enter Recipe Name'
            type="text" />
    </div>)
}