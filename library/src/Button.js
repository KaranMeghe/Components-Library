import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

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
  //   let baseClassName = "px-3 py-1.5 border m-2";
  //   if (primary) {
  //     baseClassName += " bg-blue-500 border-blue-600 text-white";
  //   } else if (secondary) {
  //     baseClassName += " bg-gray-500 border-gray-600 text-white";
  //   } else if (success) {
  //     baseClassName += " bg-green-500 border-green-600 text-white";
  //   } else if (warning) {
  //     baseClassName += " bg-orange-500 border-orange-600 text-white";
  //   } else if (danger) {
  //     baseClassName += " bg-red-500 border-red-600 text-white";
  //   } else if (rounded) {
  //     baseClassName += " rounded-full";
  //   }

  //   switch (true) {
  //     case primary:
  //       baseClassName += " bg-blue-500 border-blue-600 text-white";
  //       break;
  //     case secondary:
  //       baseClassName += " bg-gray-500 border-gray-600 text-white";
  //       break;
  //     case success:
  //       baseClassName += " bg-green-500 border-green-600 text-white";
  //       break;
  //     case warning:
  //       baseClassName += " bg-orange-500 border-orange-600 text-white";
  //       break;
  //     case danger:
  //       baseClassName += " bg-red-500 border-red-600 text-white";
  //       break;
  //     case rounded:
  //       baseClassName += " rounded-full";
  //       break;
  //     default:
  //       break;
  //   }

  let classes = classNames("flex items-center m-3 px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  classes = twMerge(classes);

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,

  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one variant of button can use. Variants are primary,secondary,success,warning,danger "
      );
    }
  },
};

export default Button;
