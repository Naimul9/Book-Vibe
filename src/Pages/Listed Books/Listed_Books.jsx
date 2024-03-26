import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Listed_Books = () => {
    return (

        <div>

<div className='h-[100px] bg-[#1313130D] text-center text-[28px] font-bold rounded-lg items-center flex justify-center mb-10'>Books</div>

<div className='flex items-center justify-center'>
<div className="dropdown mb-14 relative  ">
  <div tabIndex={0} role="button" className="btn m-1 flex items-center bg-[#23BE0A] text-white text-[18px] font-semibold">Button
    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" clipRule="evenodd"/>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-full left-0">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
</div>



        <Tabs>
        <TabList>
          <Tab>  <p className='text-[18px]'> Read Books </p>  </Tab>
          <Tab> <p className='text-[18px] '>  Wishlist </p>   </Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
    );
};

export default Listed_Books;