"use client"
import Image from "next/image";

const Modal = ({ isVisible, onClose, image }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (

    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center" id="wrapper" onClick={handleClose} >
      <div className="w-[800px] flex flex-col">
        <button className=" text-4xl mb-3" onClick={() => onClose()}>
          <span className="bg-white rounded-full px-2 pb-1">×</span>
        </button>
        <div className="bg-white p-2 rounded z-50">
          <Image width={800} height={800} className="max-w-full rounded-lg"
            src={image}
            alt="ベルテックの事業内容の画像"
          />
        </div>
      </div>
    </div >

  );
};

export default Modal;