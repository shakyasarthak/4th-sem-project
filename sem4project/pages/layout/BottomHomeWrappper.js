import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const BottomHomeWrapper = () => {
    let aboutKUPathsala = `KU-Pathsala is an e-learning platform created as a semester project by 4th semester CS students to increase education's accessibility,
     its quality, and to meet a particular educational standard.`;
    return (
        <div className="">
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-0">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-0">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>KU-Pathsala</h6>
                                <p>{aboutKUPathsala}</p>
                            </div>
                           
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
               </footer>
            {/* <!-- Footer --> */}
        </div>);
};

export default BottomHomeWrapper;