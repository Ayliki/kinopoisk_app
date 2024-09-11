import cl from './styles.module.css'

interface ISearchBox{
    setInput: (input: string)=>void
}

export const SearchBox = ({setInput}: ISearchBox) => {
  return (
    <div className={cl.searchBox}>
        <input
            type="text" 
            placeholder="Movies, Series..."
            className={cl.searchInput}
            onChange={(e)=>{
                setInput(e.target.value)
            }}
        />
    </div>
  )
}
