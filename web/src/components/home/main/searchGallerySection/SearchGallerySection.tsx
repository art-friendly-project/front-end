import Title from './Title';
import search from 'assets/images/etc/search.svg';

const SearchGallerySection = () => {
  return (
    <div className="flex items-center w-full py-10 h-28 bg-purple-10">
      <Title />
      <img src={search} className="ml-auto mr-[5%] w-20 h-20" />
    </div>
  );
};

export default SearchGallerySection;
