import styled from 'styled-components';

const ButtonContainer = ({
  className,
  color = '#fffdf0',
  onClick,
  title = 'Кнопка',
  disabled = false,
  bordertype = 'square',
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled}
      color={color}
      bordertype={bordertype}
      {...props}
    >
      {title}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  padding: 12px 24px;
  border: 1px solid #e6e6e6;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: ${({ width = '150px' }) => width};
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ disabled, color = '#fffdf0' }) => (disabled ? '#cccccc' : color)};
  color: ${({ disabled }) => (disabled ? '#666666' : '#000000')};
  border-radius: ${({ bordertype = 'square' }) => (bordertype === 'rounded' ? '12px' : '4px')};

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `}
  }

  &:active {
    ${({ disabled }) =>
      !disabled &&
      `
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ color = '#fffdf0' }) => `${color}40`};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
  `}
`;
