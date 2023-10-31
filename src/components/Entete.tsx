export const Entete = () => {
    return(
    <div className=" container mx_auto px-6 space-x-6 flex flex-row bg-neutral-700 text-white border border-gray-400 p-6  shadow-md  ">
      <div className='md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-center'> 
        <div className="flex justify-left text-6xl ">
            <h1>Philip</h1>
        </div>
        <div className="flex justify-left font-extrabold text-6xl ">
            <h1> Emery</h1>
        </div>
        <div className="flex justify-left text-1xl ">
            <p>Senior Software engineer </p>
        </div>
      </div>
      <div className="md:w-1/2 justify-left mr-8  ">       
            <img src={require('./image1.jpg')} height="200" width="200" alt='mon image personnel' />
      </div>
    </div>
    );
}