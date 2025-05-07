import React from 'react';
import { Dialog } from 'radix-ui';

const Modal = ({ 
  trigger, 
  title, 
  description, 
  children, 
  footer,
  size = 'default',
  ...props 
}) => {
  const sizeClasses = {
    small: 'max-w-sm',
    default: 'max-w-md',
    large: 'max-w-2xl',
    fullWidth: 'max-w-4xl'
  };
  
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content 
          className={`fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] ${sizeClasses[size]} translate-x-[-50%] translate-y-[-50%] rounded-[0.25rem] bg-white p-6 shadow-[0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)] focus:outline-none data-[state=open]:animate-contentShow overflow-auto`}
        >
          {title && (
            <Dialog.Title className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </Dialog.Title>
          )}
          
          {description && (
            <Dialog.Description className="text-sm text-gray-500 mb-5">
              {description}
            </Dialog.Description>
          )}
          
          <div className="mb-6">
            {children}
          </div>
          
          {footer && (
            <div className="flex justify-end space-x-2 pt-4 border-t border-gray-100">
              {footer}
            </div>
          )}
          
          <Dialog.Close className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;