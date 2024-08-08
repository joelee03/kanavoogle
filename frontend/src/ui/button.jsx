import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false }) => {
    const baseStyles = 'font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150';
    
    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-5 py-3 text-lg',
    };
    
    const variantStyles = {
        primary: 'bg-[#8ABE53] text-white hover:bg-[#7AA647] focus:ring-[#8ABE53]',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    };
    
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const classNames = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
};

export default Button;
