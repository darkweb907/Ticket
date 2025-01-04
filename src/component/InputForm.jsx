import { useState } from "react";

const InputForm = ({ setWord }) => {
  const [avatar, setAvatar] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      let pics = URL.createObjectURL(uploadedFile);
      setAvatar(pics);
      setWord((prevData) => {
        return { ...prevData, avatar: pics };
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {!avatar ? (
        <label
          htmlFor="file-upload"
          className="w-full max-w-md px-4 text-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-600"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-12 h-12 mt-2 mb-2 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 16l3 3m0 0l3-3m-3 3V10m6-4h5m1 0a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 00-2-2H4a2 2 0 00-2 2v3"
                />
              </svg>
            </div>
            <p className="mb-2 text-sm text-gray-600">
              Drag and drop or click to upload
            </p>
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt="Uploaded Preview"
            className="w-[23%] rounded-md h-[23%] object-cover border border-gray-300"
          />
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={() => setAvatar(null)}
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

export default InputForm;
