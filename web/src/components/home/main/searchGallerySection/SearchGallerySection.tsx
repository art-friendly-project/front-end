import Title from './Title';
import search from 'assets/images/etc/search.svg';

const SearchGallerySection = () => {
  return (
    <div className="flex items-center w-full py-10 h-36 bg-purple-10">
      <Title />
      <img src={search} className="ml-auto mr-[5%] w-28 h-28" />
    </div>
  );
};

export default SearchGallerySection;
