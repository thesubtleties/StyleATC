import React from 'react';
import { Dialog as DialogPrimitive } from 'radix-ui';

const Dialog = ({ children, trigger, title, description, ...props }) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>
        {trigger}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[0.25rem] bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
          {title && (
            <DialogPrimitive.Title className="text-lg font-medium text-gray-900 mb-2">
              {title}
            </DialogPrimitive.Title>
          )}
          {description && (
            <DialogPrimitive.Description className="text-sm text-gray-500 mb-5">
              {description}
            </DialogPrimitive.Description>
          )}
          {children}
          <DialogPrimitive.Close className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Dialog;