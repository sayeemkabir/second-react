import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('');

  console.log(search)


  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`search/${search}`)
    
  };

  return (
    <div className="p py-3 flex justify-center align-middle w-[60%] bg-slate-200 m-auto rounded-3xl mt-2">
      <form className="flex items-center w-[80%] justify-center align-middle" onSubmit={handleSubmit}>
        <input 
          id="search"
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-l-md w-full"
        />
        <Button 
          type="submit" 
          variant="outline"
          size="lg"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
