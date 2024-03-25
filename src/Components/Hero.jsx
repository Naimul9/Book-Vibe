import bookcover from '../assets/bookCover.svg'

const Hero = () => {
    return (
        <div className="hero bg-gray-100 rounded-2xl h-[554px] ">
  <div className="hero-content flex-col gap-56 lg:flex-row-reverse">
    <img src={bookcover} className ="max-w-sm rounded-lg" />
    <div>
      <p className="py-6 text-[56px] font-bold">Books to freshen <br /> up your bookshelf</p>
      <button className="btn bg-[#23BE0A] w-[189] h-[66px] text-[20px] font-bold text-white mt-3">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Hero;