import { Link } from 'react-router-dom';
import bookcover from '../assets/bookCover.svg'

const Hero = () => {
    return (
        <div className="hero bg-gray-100 rounded-2xl lg:h-[554px] h-full">
  <div className="hero-content flex-col  lg:gap-56 lg:flex-row-reverse">
    <img src={bookcover} className ="max-w-sm rounded-lg" />
    <div>
      <p className="py-6 lg:text-[56px] text-[30px] font-bold">Books to freshen <br /> up your bookshelf</p>
     <Link to={'./listed-books'}>
     <button  className="btn bg-[#23BE0A] w-[189] h-[66px] text-[20px] font-bold text-white mt-3">View The List</button></Link>
    </div>
  </div>
  </div>
    );
};

export default Hero;