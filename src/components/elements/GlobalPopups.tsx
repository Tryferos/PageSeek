'use client';
import {CloseIcon} from '@/icons/Icons';
import {SubjectsPopupContent} from '../popups_content/SubjectsPopupContent';
import {usePopups} from '@/slices/popups_store';
import {useEffect} from 'react';
import {SortingChangeWarningContent} from '../popups_content/SortingChangeWarningContent';

export const GlobalPopups = () => {
  const {popup, title, closePopup} = usePopups();

  const handleClose = closePopup;

  const handleGenericClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const childrenWrapper = document.getElementById('children-wrapper');
    if (childrenWrapper) {
      if (popup) {
        childrenWrapper.style.filter = 'blur(2px)';
      } else {
        childrenWrapper.style.filter = 'blur(0px)';
      }
    }
  }, [popup]);

  return (
    <div
      onClick={handleGenericClick}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000] ${popup ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {!!popup && (
        <div className="bg-white rounded-md min-h-[30vh] small:min-h-[35vh] mobile:min-h-[40vh] max-h-[65vh] w-[50%] small:w-[70%] min-w-[350px] max-w-[700px] mt-[10%] flex flex-col shadow-book-result-hover">
          <div className="flex justify-center px-4 pt-4 pb-2 border-b-[1px] relative">
            <p className="font-wotfardMd text-center w-full text-md">{title}</p>
            <figure
              onClick={handleClose}
              className="absolute right-4 h-full items-center flex top-1 cursor-pointer hover:text-red-500 *:transition-transform hover:*:scale-125">
              <CloseIcon width={20} height={20} />
            </figure>
          </div>
          <div className="px-4 py-3 w-full h-full overflow-y-auto scrollbar overflow-x-hidden">
            {popup === 'Subjects' && <SubjectsPopupContent />}
            {popup === 'SortingChangeWarning' && (
              <SortingChangeWarningContent />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
