import clsx from 'clsx';

type RoundedButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  btnSize?: 'small' | 'medium';
  btnType?: 'black' | 'white';
};

export const RoundedButton = ({
  text,
  onClick,
  icon,
  btnSize,
  btnType,
}: RoundedButtonProps) => {
  return (
    <button
      className={clsx(
        `flex items-center justify-center rounded-md cursor-pointer transition duration-200`,
        `${
          btnType === 'black'
            ? `bg-black text-white hover:opacity-80`
            : `bg-white text-black border border-gray-300  hover:bg-gray-100`
        }`,
        `${btnSize === 'small' ? `p-[8px_16px]` : `p-[12px_32px]`}`
      )}
      onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};
