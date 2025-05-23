import * as React from 'react';
import classNames from 'classnames';
import { Form } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full max-w-lg space-y-4","elements":{"field":"grid gap-1.5","label":"text-[15px] font-medium leading-[35px] text-foreground","message":"text-[13px] text-red-500","input":"h-[35px] w-full rounded border border-input bg-background px-2.5 text-[15px] leading-none focus:outline-none focus:ring-2 focus:ring-ring","textarea":"w-full resize-none rounded border border-input bg-background p-2.5 text-[15px] leading-none focus:outline-none focus:ring-2 focus:ring-ring","submit":"h-[35px] w-full rounded bg-primary px-[15px] font-medium leading-none text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"},"description":"Default form variant."},"luxury":{"root":"w-full max-w-lg space-y-6 p-8 rounded-lg bg-white shadow-lg border border-[#e2e8f0]","elements":{"field":"grid gap-2.5 mb-5","label":"text-[15px] font-semibold leading-[35px] tracking-wide uppercase text-xs text-[#1e3a8a]","message":"text-[13px] text-[#475569] italic","input":"h-[40px] w-full rounded-sm border border-[#cbd5e1] bg-[#f8fafc] px-3 text-[15px] leading-none placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]/50 focus:border-[#1e3a8a]","textarea":"w-full resize-none rounded-sm border border-[#cbd5e1] bg-[#f8fafc] p-3 text-[15px] leading-relaxed placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]/50 focus:border-[#1e3a8a] min-h-[100px]","submit":"h-[45px] w-full mt-6 bg-[#1e3a8a] text-white font-bold tracking-wide uppercase text-sm rounded-sm border border-[#1e3a8a] hover:bg-[#1e40af] hover:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2 transition-all duration-300"},"description":"Elegant form styled with refined dark blue accents and sophisticated typography."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const FormComponent = ({
  variant = 'default',
  className = '',
  fields = [],
  submitLabel = 'Submit',
  onSubmit,
  ...props
}) => {
  return (
    <Form.Root
      className={classNames('w-full', getStyle(variant, 'root'), className)}
      onSubmit={onSubmit}
      {...props}
    >
      {fields.map((field, index) => (
        <Form.Field
          key={index}
          className={classNames('mb-2.5 grid', getStyle(variant, 'field'))}
          name={field.name}
        >
          <div className="flex items-baseline justify-between">
            <Form.Label
              className={classNames(
                'text-[15px] font-medium leading-[35px]',
                getStyle(variant, 'label')
              )}
            >
              {field.label}
            </Form.Label>
            {field.messages &&
              field.messages.map((message, msgIndex) => (
                <Form.Message
                  key={msgIndex}
                  className={classNames(
                    'text-[13px]',
                    getStyle(variant, 'message')
                  )}
                  match={message.match}
                >
                  {message.text}
                </Form.Message>
              ))}
          </div>
          <Form.Control asChild>
            {field.type === 'textarea' ? (
              <textarea
                className={classNames(
                  'box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded p-2.5 text-[15px] leading-none outline-none',
                  getStyle(variant, 'textarea')
                )}
                required={field.required}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                className={classNames(
                  'box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none',
                  getStyle(variant, 'input')
                )}
                type={field.type || 'text'}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </Form.Control>
        </Form.Field>
      ))}
      <Form.Submit asChild>
        <button
          className={classNames(
            'mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded px-[15px] font-medium leading-none',
            getStyle(variant, 'submit')
          )}
        >
          {submitLabel}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default FormComponent;
