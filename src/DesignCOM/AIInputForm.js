import React, { useState, useRef, useCallback } from 'react';

export default function AIInputForm({ onSubmit, placeholder = "Ask Lovable to create a landing page for my..." }) {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [isPublic, setIsPublic] = useState(true);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto-resize textarea
  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '80px';
      const scrollHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${scrollHeight}px`;
    }
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
    e.target.value = ''; // Reset input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || files.length > 0) {
      onSubmit?.({
        message: message.trim(),
        files,
        isPublic
      });
      setMessage('');
      setFiles([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = '80px';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const isDisabled = !message.trim() && files.length === 0;

  return (
    <form 
      onSubmit={handleSubmit}
      className="group flex flex-col w-full rounded-3xl text-base transition-all duration-150 ease-in-out bg-transparent"
    >
      {/* Main input area */}
      <div className="relative flex flex-1 items-center">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          className="flex w-full rounded-md px-2 py-2 ring-offset-background placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none text-[16px] leading-snug md:text-base max-h-[200px] bg-transparent focus:bg-transparent flex-1 text-gray-900 dark:text-gray-100"
          placeholder={placeholder}
          maxLength={50000}
          style={{ minHeight: '80px', height: '80px' }}
        />
      </div>

      {/* File previews */}
      {files.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1 text-sm">
              <span className="truncate max-w-32">{file.name}</span>
              <button
                type="button"
                onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center">
        {/* Add button */}
        <button
          type="button"
          disabled={isDisabled}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 gap-1.5 h-8 w-8 rounded-full p-0 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <PlusIcon className="shrink-0 h-5 w-5" />
        </button>

        {/* Attach button */}
        <div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isDisabled}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 py-2 h-8 gap-1.5 rounded-full px-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <AttachIcon className="shrink-0 h-4 w-4" />
            <span className="hidden md:flex">Attach</span>
          </button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/webp,.webp"
          multiple
          onChange={handleFileSelect}
          tabIndex={-1}
        />

        {/* Public/Private toggle */}
        <div>
          <button
            type="button"
            onClick={() => setIsPublic(!isPublic)}
            className="whitespace-nowrap text-sm font-medium transition-colors duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-3 py-2 flex h-8 items-center justify-center gap-1 rounded-full text-gray-600 dark:text-gray-300"
            disabled={isDisabled}
          >
            <div className="flex items-center gap-1 duration-200 animate-in fade-in">
              <PublicIcon className="shrink-0 h-4 w-4" />
              <span className="hidden md:flex">{isPublic ? 'Public' : 'Private'}</span>
            </div>
          </button>
        </div>

        {/* Right side controls */}
        <div className="ml-auto flex items-center gap-1">
          <div className="relative flex items-center gap-1 md:gap-2">
            {/* Settings button */}
            <button
              type="button"
              className="gap-2 whitespace-nowrap text-sm font-medium ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 relative z-10 flex rounded-full p-0 text-gray-600 dark:text-gray-300 transition-opacity duration-150 disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center h-8 w-8"
            >
              <SettingsIcon className="shrink-0 relative z-10 h-5 w-5" />
            </button>

            {/* Send button */}
            <button
              type="submit"
              disabled={isDisabled}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100 transition-opacity duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SendIcon className="shrink-0 h-6 w-6 text-white dark:text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// Icon components
function PlusIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className} fill="currentColor">
      <path d="M450-450H230q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h220v-220q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v220h220q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H510v220q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37z"/>
    </svg>
  );
}

function AttachIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className} fill="currentColor">
      <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h335q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-335q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v335q0 24-18 42t-42 18zm60-162h480L576-474 449-307l-94-124zm453-410h-58q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h58v-58q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v58h57q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-57v57q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37z"/>
    </svg>
  );
}

function PublicIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className} fill="currentColor">
      <path d="M480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34T80-480.5t31.5-155.66 86-126.84 127.34-85.5T480.5-880t155.66 31.5T763-763t85.5 127T880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80m-.27-60q142.38 0 241.19-99.5T820-480v-13q-6 26-27.41 43.5Q771.19-432 742-432h-80q-33 0-56.5-23.5T582-512v-40H422v-80q0-33 23.5-56.5T502-712h40v-22q0-16 13.5-40t30.5-29q-25-8-51.36-12.5Q508.29-820 480-820q-141 0-240.5 98.81T140-480h150q66 0 113 47t47 113v40H330v105q34 17 71.7 26t78.3 9"/>
    </svg>
  );
}

function SettingsIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className} fill="currentColor">
      <path d="M285-270v-420q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v420q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37m165 160v-740q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v740q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63Q450-97.25 450-110M120-430v-100q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v100q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37m495 160v-420q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v420q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37m165-160v-100q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v100q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37"/>
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className} fill="currentColor">
      <path d="M442.39-616.87 309.78-487.26q-11.82 11.83-27.78 11.33t-27.78-12.33q-11.83-11.83-11.83-27.78 0-15.96 11.83-27.79l198.43-199q11.83-11.82 28.35-11.82t28.35 11.82l198.43 199q11.83 11.83 11.83 27.79 0 15.95-11.83 27.78-11.82 11.83-27.78 11.83t-27.78-11.83L521.61-618.87v348.83q0 16.95-11.33 28.28-11.32 11.33-28.28 11.33t-28.28-11.33q-11.33-11.33-11.33-28.28z"/>
    </svg>
  );
}