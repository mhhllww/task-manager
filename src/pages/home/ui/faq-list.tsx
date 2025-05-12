import { FAQ_ITEMS } from '../consts';

export const FaqList = () => {
  return (
    <ul className={'max-w-3xl mx-auto flex flex-col gap-6 py-12'}>
      {FAQ_ITEMS.map((question, index) => (
        <li
          key={index}
          className={'rounded-lg border border-gray-200 p-6 shadow-sm'}>
          <h3 className={'text-xl font-bold'}>{question.question}</h3>
          <p className={'mt-2 text-gray-500'}>{question.answer}</p>
        </li>
      ))}
    </ul>
  );
};
