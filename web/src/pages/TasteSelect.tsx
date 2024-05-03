import { useState } from 'react';
import TasteList from 'components/tasteSelect/TasteList';
import TasteSelectTitle from 'components/tasteSelect/TasteSelectTitle';
import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';

const TasteSelect = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const navigate = useNavigate();
  const endpoint = useAppSelector(selectEndpoint);

  const btnHandler = () => {
    if (endpoint === '/profile') {
      navigate(endpoint);
      return;
    }
    navigate('/access');
  };

  return (
    <div className="flex flex-col items-center w-full h-full pt-10">
      <TasteSelectTitle />
      <TasteList setSelectedList={setSelectedList} />
      <BtnAndRightArrow
        disable={selectedList.length === 0}
        fn={btnHandler}
        name="저장하기"
      />
    </div>
  );
};

export default TasteSelect;
