import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

const EditorDeleteModalBtnContainer = () => {
  return (
    <div className="absolute flex justify-center w-full bottom-6 px-[5%]">
      <EditBtn />
      <DeleteBtn />
    </div>
  );
};

export default EditorDeleteModalBtnContainer;
