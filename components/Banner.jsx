import Image from 'next/image';

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[530px] xl:h-[600px] 2xl:h-[700px]'>
            {/* <Image
                src="https://links.papareact.com/0fm" 
                objectFit="cover"
                layout="fill" 
               style={"object-fit: cover"}
            /> */}
            <img src="https://links.papareact.com/0fm" alt="" style={{backgroundsize:"cover",width:"100%" ,position:"absolute"}} className='relative h-[300px] sm:h-[400px] lg:h-[540px] xl:h-[600] 2xl:h-[630px] transition duration-250 '  />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                <button className='text-green-700 bg-white px-10 py-4  rounded-full shadow-md mt-2 font-bold hover:shadow-xl hover:text-red-600 active:scale-90 transition duration-200'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner