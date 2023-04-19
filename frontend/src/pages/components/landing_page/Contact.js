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
                    <li class="list-inline-item"><a href="mailto:shakya.sarthak002@gmail.com" target="_blank" class="social-link text-black"><i class="bi bi-envelope"></i></a></li>
                    <li class="list-inline-item"><a href="https://github.com/akira-lawliet" target="_blank" class="social-link text-black"><i class="bi bi-github"></i></a></li>           
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Aashish Paudel</h5>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="mailto:paudelaashish47@gmail.com" target="_blank" class="social-link text-black"><i class="bi bi-envelope" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href=" https://github.com/Azhe0" target ="_blank" class="social-link text-black"><i class="bi bi-github"></i></a></li>           
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Kriti Gautam</h5>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="mailto:gautamkriti89@gmail.com" target ="_blank" class="social-link text-black"><i class="bi bi-envelope" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="https://github.com/15gk" target ="_blank" class="social-link text-black"><i class="bi bi-github"></i></a></li>           
                </ul>
            </div>
        </div>

    
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><Image src={person_image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Prasiddhi Dahal</h5>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="mailto:prasiddhidahal1@gmail.com" target ="_blank" class="social-link text-black"><i class="bi bi-envelope" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="https://github.com/Prasiddhidahal" target ="_blank" class="social-link text-black"><i class="bi bi-github"></i></a></li>           
                </ul>
            </div>
        </div>
    </div>
</div>
      </>  
    );
  }

export default Contact;
