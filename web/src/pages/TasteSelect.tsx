import { useState } from 'react';
import TasteList from 'components/tasteSelect/TasteList';
import TasteSelectTitle from 'components/tasteSelect/TasteSelectTitle';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import BasicBtn from 'components/common/BasicBtn';
import { usePatchTaste } from 'hooks/query/usePatchTaste';

const TasteSelect = () => {
  const navigate = useNavigate();

  const [selectedList, setSelectedList] = useState<string[]>([]);
  const endpoint = useAppSelector(selectEndpoint);

  const mutate = usePatchTaste(selectedList);

  const btnHandler = () => {
    mutate();
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
      <BasicBtn
        disable={selectedList.length === 0}
        fn={btnHandler}
        name="저장하기"
        style="sticky mt-auto bottom-5"
      />
    </div>
  );
};

export default TasteSelect;
