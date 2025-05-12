import * as React from 'react';
import classNames from 'classnames';
import { Form } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

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
