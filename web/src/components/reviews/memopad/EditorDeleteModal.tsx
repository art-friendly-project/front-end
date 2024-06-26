import { type Dispatch, type SetStateAction } from 'react';
import EditorDeleteModalTitle from './EditorDeleteModalTitle';
import EditorDeleteModalBtnContainer from './EditorDeleteModalBtnContainer';
import CloseBtn from './CloseBtn';

interface editorDeleteModal {
  setIsEditorDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const EditorDeleteModal = ({ setIsEditorDeleteModal }: editorDeleteModal) => {
  return (
    <>
      <button
        className="absolute top-0 z-30 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsEditorDeleteModal(false);
        }}
      />
      <div className="absolute bottom-0 z-40 flex flex-col w-full pt-8 bg-white h-52 rounded-t-xl animate-move-top-regular">
        <EditorDeleteModalTitle />
        <CloseBtn setIsEditorDeleteModal={setIsEditorDeleteModal} />
        <EditorDeleteModalBtnContainer />
      </div>
    </>
  );
};

export default EditorDeleteModal;
