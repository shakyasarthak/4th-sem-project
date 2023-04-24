import Image from 'next/image';
import y from 'styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import BottomHomeWrapper from './layout/BottomHomeWrappper';
import board from '/public/Classroom.png';
function Home() {
  return (
    <>
      {/* <div className={y.wrapper}>
      <Image src={board} alt="" height={320} width="400" quality={70}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '48px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>My Text Overlay</h1>
      </div>
    </div>
  */}
      
      { <div className={y.mid_home_wrapper}>
      <Image src={board} alt="" height="500" width="650" quality={100}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '48px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>KU PATHSALA</h1>
        <p style={{ color: 'white', fontSize: '23px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          A platform for students to learn and share knowledge
        </p>
      </div>
      </div>    }
      {/* <div className={y.bottom_home_wrapper}>
        this is bottom of the home page
      </div> 
     */}
    </>    
  );
}

export default Home;
