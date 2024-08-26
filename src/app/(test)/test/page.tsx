"use client";

import { useState } from "react";
import PostPopup from "./popup";

const PostPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <button
        onClick={openPopup}
        className="rounded bg-blue-500 p-2 text-white"
      >
        View Post
      </button>

      {isPopupOpen && (
        <PostPopup
          imageUrl="https://example.com/your-image.jpg"
          description="This is the image description."
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default PostPage;
