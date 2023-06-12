import { useState } from 'react';
import { useGlobalContext } from './GlobalContext';

function SearchForm() {
  const [text, setText] = useState('');
  const { setSearchTerm } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
    console.log(searchValue);
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          placeholder='cat'
          className='form-input search-input'
          name='search'
        />
        <button type='submit' className='btn' name='sd'>
          Search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;

//https://api.unsplash.com/photos/?client_id=Uh2emWVCXVXQ1xTJOtIVhRE1CRtsMV2vVhIyCpQQKQ8
