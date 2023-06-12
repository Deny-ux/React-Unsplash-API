import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './GlobalContext';
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
function Gallery() {
  const { searchTerm } = useGlobalContext();
  const {
    isLoading,
    data: imgList,
    isError,
    error,
  } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios(`${url}&query=${searchTerm}`);
      console.log(url);
      return data;
    },
    onError: (error) => {
      console.log('ERROR!');
      console.error(error);
    },
  });
  if (isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }
  console.log(imgList);
  if (imgList.results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {imgList.results.map((img) => {
        return (
          <img
            key={img.id}
            src={img?.urls?.regular}
            alt={img.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
}
export default Gallery;
