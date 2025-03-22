type RoundedButtonProps = {
  text: string;
  onClick: () => void;
};

export const RoundedButton = ({ text, onClick }: RoundedButtonProps) => {
  return (
    <button
      className={
        'bg-black text-white p-2 rounded-md border hover:bg-white hover:text-black transition duration-200 cursor-pointer'
      }
      onClick={onClick}>
      {text}
    </button>
  );
};
