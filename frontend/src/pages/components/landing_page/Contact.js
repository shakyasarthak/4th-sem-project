import Image from 'next/image';
import person_image from '/public/person.png';

import 'bootstrap/dist/css/bootstrap.min.css';




function Contact() {
    return (
      <>    
<div class="container py-5">
    <div class="row text-center">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Know the Team</h1>
        </div>
    </div>
</div> 


<div class="container">
    <div class="row text-center">
    <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Sarthak Shakya</h5>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>           
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>           
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>           
                </ul>
            </div>
        </div>

    
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>           
                </ul>
            </div>
        </div>
    </div>
</div>
      </>  
    );
  }

export default Contact;
