import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  let baseClassName = "px-3 py-1.5 border m-2";
  if (primary) {
    baseClassName += " bg-blue-500 border-blue-600 text-white";
  } else if (secondary) {
    baseClassName += " bg-gray-500 border-gray-600 text-white";
  } else if (success) {
    baseClassName += " bg-green-500 border-green-600 text-white";
  } else if (warning) {
    baseClassName += " bg-orange-500 border-orange-600 text-white";
  } else if (danger) {
    baseClassName += " bg-red-500 border-red-600 text-white";
  } else if (rounded) {
    baseClassName += " rounded-full";
  }
  return <button className={baseClassName}>{children}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,

  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!rounded);

    if (count > 1) {
      return new Error(
        "Only one variant of button can use. Variants are primary,secondary,success,warning,danger "
      );
    }
  },
};

export default Button;
