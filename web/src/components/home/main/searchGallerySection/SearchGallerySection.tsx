import Title from './Title';
import search from 'assets/images/etc/search.svg';

const SearchGallerySection = () => {
  return (
    <div className="flex items-center w-full h-40 py-10 bg-purple-10">
      <Title />
      <img src={search} className="ml-auto mr-[5%] w-28 h-28" />
    </div>
  );
};

export default SearchGallerySection;
