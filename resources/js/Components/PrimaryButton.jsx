import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'white-outline', 'danger', 'warning', 'light-outline', 'white-outline']),
    processing: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default function PrimaryButton({ variant = 'primary', processing, className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full  ${className} ${processing && 'opacity-30'} btn-${variant} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
