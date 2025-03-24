type TextInputProps = {
  label: string;
};

export const TextInput = ({ label }: TextInputProps) => {
  return (
    <>
      <input
        placeholder={label}
        className={'p-2 relative border border-gray-300 rounded-md'}
      />
    </>
  );
};
