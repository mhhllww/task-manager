import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={'w-[100vw] h-[100vh] flex items-center justify-center'}>
      <Triangle
        visible={true}
        height='80'
        width='80'
        color='#000000'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};
