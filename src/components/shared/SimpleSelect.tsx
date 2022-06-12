import classNames from 'classnames';
import React, { ChangeEventHandler, FunctionComponent, useId } from 'react';
export interface SimpleSelectProps {
  className?: string;
  error?: string[];
  label?: string;
  id?: string;
  valueKey?: string;
  labelKey?: string;
  options: Array<{
    [key: string]: any;
  }>;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const SimpleSelect: FunctionComponent<SimpleSelectProps> = ({
  label,
  id,
  error,
  className,
  placeholder,
  onChange,
  options,
  valueKey = 'value',
  labelKey = 'label',
  defaultValue = '',
}) => {
  const componentId = useId();

  const validClasses = `border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500`;
  const errorClasses = `border-red-300 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:border-danger-500 text-red-300`;
  return (
    <>
      {label && (
        <label htmlFor={`simple-select-${componentId}`} className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        onChange={onChange}
        id={`simple-select-${componentId}`}
        name={`simple-select-${componentId}`}
        value={defaultValue}
        className={classNames(
          'w-full px-3 py-2 text-xs border rounded-lg bg-transparent text-gray-800 dark:text-white',
          error ? errorClasses : validClasses,
          className
        )}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option className="bg-white dark:bg-gray-800" key={index} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-red-600" id={`simple-select-error-${componentId}`}>
          {error.join(', ')}
        </p>
      )}
    </>
  );
};

export default SimpleSelect;
