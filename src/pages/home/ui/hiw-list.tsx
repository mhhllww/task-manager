import { HIW_ITEMS } from '../consts';

export const HiwList = () => {
  return (
    <ol className={'flex flex-col justify-center gap-[32px]'}>
      {HIW_ITEMS.map((item, index) => (
        <li key={index} className={'flex gap-4'}>
          <span
            className={
              'h-8 w-8 flex justify-center items-center rounded-full font-semibold bg-black text-white'
            }>
            {index + 1}
          </span>
          <div className={'w-full'}>
            <h3 className={'text-xl font-bold'}>{item.title}</h3>
            <p className={'text-gray-500 text-[16px]'}>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};
