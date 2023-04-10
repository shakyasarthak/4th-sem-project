import Navbar from './Navbar';
import y from '/src/styles/Home.module.css';
function Home() {
  return (
    <>
      <Navbar/>
      <div class={y.mid_home_wrapper}>
        this is an image
      </div>   
      <div class={y.bottom_home_wrapper}>
        this is bottom of the home page
      </div> 
    </>    
  );
}

export default Home;
