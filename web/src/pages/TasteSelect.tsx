import { useState } from 'react';
import TasteList from 'components/tasteSelect/TasteList';
import TasteSelectTitle from 'components/tasteSelect/TasteSelectTitle';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import api from 'api';
import BtnBasic from 'components/common/BtnBasic';

const TasteSelect = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const navigate = useNavigate();
  const endpoint = useAppSelector(selectEndpoint);

  const btnHandler = async () => {
    try {
      await api.patch('/members', {
        artPreferenceTypeList: selectedList,
      });
    } catch (err) {
      console.error(err);
    }
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
      <BtnBasic
        disable={selectedList.length === 0}
        fn={() => {
          void btnHandler();
        }}
        name="저장하기"
        style="sticky mt-auto bottom-5"
      />
    </div>
  );
};

export default TasteSelect;
