interface ButtonProps {
  size?: 'small' | 'large';
  variant: 'primary' | 'secondary' | 'delete';
  label?: string;
  additionalClass?: string;
  children?: React.ReactNode;
  icon?: 'left' | 'right' | 'only';
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  label,
  additionalClass,
  children,
  icon,
  onClick,
}) => {
  const getClassName = () => {
    let baseClass =
      'rounded-2xl flex items-center justify-center gap-2 font-medium px-4 shadow-sm hover:shadow-md hover:scale-105 active:shadow-sm duration-200';

    let sizeClass = '';
    switch (size) {
      case 'small':
        sizeClass = 'h-8 text-sm';
        break;
      case 'large':
        sizeClass = 'h-12';
        break;
      default:
        sizeClass = 'h-10 text-sm';
        break;
    }

    let variantClass = '';
    switch (variant) {
      case 'primary':
        variantClass = 'bg-primary text-white hover:bg-secondary hover:text-brand-green';
        break;
      case 'secondary':
        variantClass = 'bg-white active:bg-gray-50';
        break;
      case 'delete':
        variantClass = 'bg-red-600 active:bg-red-700 text-white';
        break;
    }

    return `${baseClass} ${sizeClass} ${variantClass} ${additionalClass}`;
  };

  const buttonContent = (): React.ReactNode => {
    switch (icon) {
      case 'left':
        return (
          <>
            {children}
            {label}
          </>
        );
      case 'right':
        return (
          <>
            {label}
            {children}
          </>
        );
      case 'only':
        return children as React.ReactNode;
      default:
        return label;
    }
  };

  return <button className={getClassName()} onClick={onClick}>{buttonContent()}</button>;
};

export default Button;
