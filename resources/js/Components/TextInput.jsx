import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(function TextInput({ onChange,defaultValue, variant = 'primary', placeholder, isError, type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    // Base classes
    const baseClasses = "rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none";

    // Build className dengan template literal yang benar
    const inputClassName = [
        baseClasses,
        variant ? `input-${variant}` : '',
        isError ? 'input-error' : '',
        className
    ].filter(Boolean).join(' ');  // ← Cara yang lebih aman untuk join classes

    return (
        <div className='flex flex-col items-start'>
            <input
                {...props}
                type={type}
                defaultValue={defaultValue}
                className={inputClassName}
                placeholder={placeholder}
                ref={input}
                onChange={onChange}
            />
        </div>
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    onChange: PropTypes.func // Add onChange to propTypes
};

export default TextInput;