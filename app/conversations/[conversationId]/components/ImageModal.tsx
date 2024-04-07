"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  src?: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Image"
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
