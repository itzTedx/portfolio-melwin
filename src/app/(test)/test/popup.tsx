import { FC, useEffect, useRef } from "react";

interface PostPopupProps {
  imageUrl: string;
  description: string;
  onClose: () => void;
}

const PostPopup: FC<PostPopupProps> = ({ imageUrl, description, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close the popup if clicked outside of the content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div ref={popupRef} className="w-full max-w-4xl rounded-lg">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src={imageUrl}
              alt="Post Image"
              className="h-96 w-96 rounded-t-lg bg-slate-50 object-cover md:rounded-l-lg md:rounded-tr-none"
            />
            <button
              className="absolute right-2 top-2 rounded-full bg-black p-1 text-white hover:bg-opacity-70"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          {/* Description Section */}
          <div className="bg-white p-4 shadow-lg md:p-6">
            <h2 className="text-2xl font-semibold">Image Description</h2>
            <p className="mt-4 text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
