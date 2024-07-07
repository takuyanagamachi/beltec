"use client"
import Image from "next/image";
import Link from "next/link"

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (

    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center" id="wrapper" onClick={handleClose} >
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
          ×
        </button>
        <div className="bg-white p-2 rounded z-50">
          <Image width={500} height={500} className="max-w-full rounded-lg" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="" />
        </div>
      </div>
    </div >

  );
};

export default Modal;