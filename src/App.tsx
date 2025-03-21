const App = () => {
  return (
    <>
      <div
        className={
          'flex flex-col items-center justify-center gap-4 h-screen text-[#c7d0cc] bg-gray-900 font-roboto text-[2vw] font-bold'
        }>
        <a href='https://react.dev/'>
          <img
            src={'public/react.svg'}
            alt='react-icon'
            className={
              'w-[150px] h-[150px] hover:scale-110 transition duration-700 hover:rotate-180'
            }
          />
        </a>
        <p className={'text-[3vw]'}>React + Vite + Typescript + Tailwindcss</p>
        <pre className={'p-2 rounded-[15px] text-[1vw]'}>
          You can edit <span className={'italic '}>src/App.tsx</span> to start{' '}
          {'<3'}!
        </pre>
        <pre className='text-[1vw] font-bold text-[#c7d0cc] hover:scale-110 transition duration-300'>
          by{' '}
          <a
            href='https://github.com/mhhllww'
            className={'text-[1.4vw] underline'}>
            mhhlw
          </a>
        </pre>
      </div>
    </>
  );
};

export default App;
