import { useParams } from 'react-router-dom';

const TasteTestProgessBar = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className="flex justify-center">
      <div className="h-4 mt-2 w-9/10 bg-gray-00 rounded-2xl">
        <div className={`h-4 bg-orange-100 rounded-2xl w-${id}/12`} />
      </div>
    </div>
  );
};

export default TasteTestProgessBar;
