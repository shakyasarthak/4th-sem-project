
import y from 'styles/Home.module.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';

function Home() {
  return (
    <>
    <Layout navbarType={1}>
      
      <div className={y.mid_home_wrapper}>
        this is an image
      </div>   
      <div className={y.bottom_home_wrapper}>
        this is bottom of the home page
      </div> 
      </Layout>
    </>    
  );
}

export default Home;
