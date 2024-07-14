function Home() {
  return (
    <div className="dark:bg-black p-5">
      <h1 className='text-center text-5xl mb-2 font-semibold italic dark:text-white'>WELCOME TO</h1>
    <div className='w-10/12 flex justify-around place-items-center border-4 border-yellow-400 mx-auto bg-gradient-to-r from-blue-700 hover:bg-blue-300 rounded-3xl drop-shadow-2xl'>
      <div>
        <img src="https://www.cocaspatna.ac.in/img/Logo_of_College_of_Commerce,_Arts_and_Science.png" alt="Logo" />
      </div>
      <div className='font-normal italic text-center my-20 dark:text-white'> 
        <h1 className='text-4xl mb-2 '>COLLEGE OF COMMERCE, ARTS & SCIENCE</h1>
        <h3 className='text-3xl mb-2'>KANKARBAGH, PATNA-800 020 (BIHAR)</h3>
        <h5 className='text-2xl'>(A Constituent Unit Of Patliputra University, Patna)</h5>
        <p className='text-xl'>NAAC RE-ACCREDITED  Grade with CGPA 3.10</p>
      </div>
    </div>
    </div>
  )
}

export default Home
