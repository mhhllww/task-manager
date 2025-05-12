import { Button } from '@/shared/ui/button';

import { FOOTER_INFO } from '../consts/FooterInfo';

export const FooterSection = () => {
  return (
    <>
      {FOOTER_INFO.map((item, index) => (
        <div key={index} className={'flex text-[14px] flex-col items-start'}>
          <h5 className={'font-bold text-[16px] mb-5'}>{item.title}</h5>
          {item.items.map((item, index) => (
            <Button
              className={
                'p-0 hover:no-underline h-[20px] mt-[8px] hover:text-black cursor-pointer text-gray-500 font-[400]'
              }
              variant={'link'}
              key={index}>
              {item}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
};
