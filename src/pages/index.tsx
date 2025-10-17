const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-black text-white flex items-center justify-center px-3">
        <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-4">
                <img src={`https://github.com/khandelwal-dev.png`} className="w-[60px] h-[60px] rounded-full" />
                <div>
                    <h1 className="text-[21px] font-medium">Dev Khandelwal</h1>
                    <p className="text-[12px] opacity-70">Student / Web Dev</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-[17px] font-semibold text-center">Yeah… I know. This site looks empty.</h2>
                <p className="text-[15px] font-medium opacity-90 text-center">I’m totally working on a cooler one. Eventually. Probably.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
