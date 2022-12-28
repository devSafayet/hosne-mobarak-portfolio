function addAboutData() {
    let addAboutData =
        `
        <section id="#about-details" class="px-5 py-5" style="background-color: #191919; color: white;">
        <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#about-details"
            href="#about-details">
            <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeAboutData()'
                id="about-btn">-</button>
        </a>
        <div class="row">
            <div class="col-6 px-3">
                <h4 class="mb-5 ">INTRODUCTION</h4>
                <p>
                    Hosne Mobarak is an Bangladeshi actor and screenwriter best known for creating the political
                    thriller Fauda and portraying the main character Doron Kavillio. Born to immigrants from Iraq and
                    Algeria, Raz was raised in Jerusalem. He served as special ops in an IDF anti-terrorist unit. After
                    his military service, Raz moved to the U.S and served as bodyguard.
                    <br> <br>

                    After returning to Israel he worked as the creative director for the one of the largest ad agencies
                    in Israel (BBDO). Later on he founded “Kookooruza," a leading production company for TV commercials
                    in Israel. In 2003 he decided to dedicate himself to acting. His early acting days included
                    different roles at the Gesher Theater and Ruth Kaner company. He also played numerous roles in
                    Israel TV series and movies.

                    <br> <br>
                    In 2014, he created with Avi Issacharoff the critically acclaimed thriller series Fauda, in which
                    Raz stars as Doron Kavillio, the commander of an undercover counter-terrorism Mista'arvim unit. In
                    2016, the show won six awards, including Best Drama Series, at the Israeli Academy Awards. In
                    December 2017, The New York Times selected Fauda as the best international show of 2017. In 2018,
                    the show won 11 Israeli TV Academy Awards, including best TV drama, best actor for Raz, and best
                    screenplay, casting, cinematography, recording, and special effects.

                    <br> <br>
                    hosene’s recent work includes a leading role in Operation Finale, an MGM thriller movie, where he
                    plays Isser Harel, the Director of Israel’s intelligence agency, the Mossad. He stars alongside Sir
                    Ben Kingsley, Mélanie Laurent, and Oscar Isaac.
                </p>
                <img style="width: 48%; background:currentColor;" src="./images/sing.png" alt="">
            </div>
            <div class="col-6">
                <div class="d-flex ml-4">
                    <div class="mx-4">
                        <h4 class="mb-5">FILMOGRAPHY</h4>
                        <p>Six Underground (2019)</p>
                        <p>Mary Magdalene (2018</p>
                        <p>Operation Finale (2018)</p>
                        <p>The Kindergarten Teacher (2014)</p>
                        <p>Dog Leash (2012)</p>
                        <p>The World Is Funny (2012)</p>
                        <p>Policeman (2011)</p>
                        <p>The Flood (2010)</p>

                    </div>
                    <div class="mx-4">
                        <h4 class="mb-5">TELEVISION</h4>
                        <p>Fauda (2015–2018)</p>
                        <p>Landing on Their Feet (2017)</p>
                        <p>Landing on Their Feet (2017)</p>
                        <p>Landing on Their Feet (2017)</p>
                        <p>Landing on Their Feet (2017)</p>
                        <p>Landing on Their Feet (2017)</p>

                    </div>
                </div>
            </div>
    </section>
        `;
    document.getElementById("about-section").innerHTML = addAboutData;

}
function removeAboutData() {
    document.getElementById("about-section").innerHTML = '';
    document.getElementById("about-btn").setAttribute('onclick', 'addAboutData()');
    document.getElementById("about-btn").innerHTML = "+";
}

// gallery function 

function addGalleryData() {
    let addGalleryData =
        `
        <section id="#gallery-details" class="px-5 py-5" style="background-color: #191919; color: white;">
        <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#about-details"
            href="#about-details">
            <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeGalleryData()'
                id="about-btn">-</button>
        </a>
        <div class="row px-5">
            <div class="col-6">
                <img class="m-2" src="./images/hosne mobarak.jpg" alt="">
                <img class="m-2" src="./images/hosne mobarak - natok Akranto Jokhon.jpg" alt="">
                <img class="m-2" src="./images/hosne mobarak - natok Jodi Laigga Jay.jpg" alt="">
            </div>
            <div class="col-6">
                <img class="m-2" src="./images/hosne mobarak - natok Sat Dakat Hatem Ta E.jpg" alt="">
                <!-- <img class="m-2" src="./images/hosne mobarak- natok Joler Vetor joler bisorjon 02.jpg" alt="">
                <img class="m-2" src="./images/hosne mobarak- natok Joler Vetor joler bisorjon.jpg" alt="">
                <img class="m-2" src="./images/hosne mobarak- TV Proggram Boimela 07.jpg" alt=""> -->
            </div>
        </div>
    </section>
        `;
    document.getElementById("gallery-section").innerHTML = addGalleryData;
}
function removeGalleryData() {
    document.getElementById("gallery-section").innerHTML = '';
    document.getElementById("gallery-btn").setAttribute('onclick', 'addGalleryData()');
    document.getElementById("gallery-btn").innerHTML = "+";
}

// press section


function addPressData() {
    let pressData =
        `
        <section class="mx-auto py-5 press-details" style="background-color: #191919; color: white;">
        <a class='d-flex justify-content-center mb-5' style="text-decoration: none; text-white; color:white" id="#press-details"
            href="#press-details">
            <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removePressData()'
                id="about-btn">-</button>
        </a>
        <h5 class="py-5 text-center text-white">FROM THE PRESS</h5>
        <div class="press-card-body">
            <div class="wrapper">
                <div class="press-card">
                    <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                    <div class="info text-center"> 
                        <a href="#">
                            <button class="p-2 rounded">VIEW ARTICLE</button>
                        </a>
                    </div>
                </div>
                <div class="press-card">
                    <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                    <div class="info text-center"> 
                        <a href="#">
                            <button class="p-2 rounded">VIEW ARTICLE</button>
                        </a>
                    </div>
                </div>
                <div class="press-card">
                    <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                    <div class="info text-center"> 
                        <a href="#">
                            <button class="p-2 rounded">VIEW ARTICLE</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    document.getElementById("press-section").innerHTML = pressData;
}
function removePressData() {
    document.getElementById("press-section").innerHTML = '';
    document.getElementById("press-btn").setAttribute('onclick', 'addPressData()');
    document.getElementById("press-btn").innerHTML = "+";
}

//creative work section

function addCreativeData() {
    let creativeData =
        `
        <section id="#gallery-details" class="px-5 py-5" style="background-color: #191919; color: white;">
    <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#creative-details"
            href="#creative-details">
            <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeCreativeData()'
                id="creative-btn">-</button>
        </a>
    <div class="container">

        <div class="row">
          <div class="col">
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div class="col order-12">
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div class="col order-1">
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div class="col order-1">
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
        </div>
      </div>


</section>
        `;
    document.getElementById("creative-section").innerHTML = creativeData;
}
function removeCreativeData() {
    document.getElementById("creative-section").innerHTML = '';
    document.getElementById("creative-btn").setAttribute('onclick', 'addCreativeData()');
    document.getElementById("creative-btn").innerHTML = "+";
}
//social media section


function addSocialData() {
    let socialData =
        `
        <section id="#social-details" class="px-5 py-5" style="background-color: #191919; color: white;">

    <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#about-details"
        href="#social-details">
        <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeSocialData()'
            id="social-btn">-</button>
    </a>
<div class="d-flex justify-content-around social-details">
   <div class="left-side">
    <a href="" target="_blank">DIGITAL BIOGRAPHY</a> <br>
    <a href="" target="_blank">FACEBOOK</a> <br>
    <a href="" target="_blank">OFFICIAL FAN PAGE</a> <br>
    <a href="" target="_blank">INSTAGRAM</a> <br>
   </div>
   <div class="right-side">
    <a href="" target="_blank">TWITTER</a> <br>
    <a href="" target="_blank">LINKEDIN</a> <br>
    <a href="" target="_blank">YOUTUBE</a> <br>
    <a href="#blogs">BLOGS</a> <br>
   </div>
</div>

</section>
        `;
    document.getElementById("social-section").innerHTML = socialData;
}
function removeSocialData() {
    document.getElementById("social-section").innerHTML = '';
    document.getElementById("social-btn").setAttribute('onclick', 'addSocialData()');
    document.getElementById("social-btn").innerHTML = "+";
}

// blogs section 

function addBlogsData() {
    let blogsData =
        `
        <section id="#blogs-details" class="px-5 py-5" style="background-color: #191919; ">

    <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#blogs-details"
        href="#blogs-details">
        <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeBlogsData()'
            id="social-btn">-</button>
    </a>
    <h2 class="text-center text-white mb-5">Blogs</h2>
    <div class="d-flex justify-content-center">
        <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="./images/hosne mobarak.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex nulla omnis eos accusamus vero quos commodi doloribus reprehenderit.</p>
              <a href="#" class="btn btn-primary">BLOG DETAILS</a>
            </div>
          </div>
        <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="./images/hosne mobarak.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex nulla omnis eos accusamus vero quos commodi doloribus reprehenderit.</p>
              <a href="#" class="btn btn-primary">BLOG DETAILS</a>
            </div>
          </div>
        <div class="card m-3" style="width: 18rem;">
            <img class="card-img-top" src="./images/hosne mobarak.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex nulla omnis eos accusamus vero quos commodi doloribus reprehenderit.</p>
              <a href="#" class="btn btn-primary">BLOG DETAILS</a>
            </div>
          </div>
          
    </div>
</section>
        `;
    document.getElementById("blogs-section").innerHTML = blogsData;
}
function removeBlogsData() {
    document.getElementById("blogs-section").innerHTML = '';
    document.getElementById("blogs-btn").setAttribute('onclick', 'addBlogsData()');
    document.getElementById("blogs-btn").innerHTML = "+";
}

// contact section 

function addContactData() {
    let aboutContactData =
        `
        <section id="#gallery-details" class="px-5 py-5" style="background-color: #191919; color: white;">

        <a class='d-flex justify-content-center mb-5' style="text-decoration: none;" id="#about-details"
            href="#contact-details">
            <button class="rounded-circle px-3 py-2 fs-1" type="button" onclick='removeContactData()'
                id="about-btn">-</button>
        </a>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h5 class="mb-5">Address:</h5>
                    <p>Dhaka, Bangladesh.</p>
                    <p>09638110000</p>
                    <p>info@gmail.com</p>
                </div>
                <div class="col-sm">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Dhaka, Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                                href="https://embedmapgenerator.com">embed code google maps</a></div>
                        <style>
                            .mapouter {
                                position: relative;
                                text-align: right;
                                width: 100%;
                                height: 400px;
                            }

                            .gmap_canvas {
                                overflow: hidden;
                                background: none !important;
                                width: 100%;
                                height: 400px;
                            }

                            .gmap_iframe {
                                height: 400px !important;
                            }
                        </style>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="contact-form">
                        <div class="form-group">
                            <label class="control-label col-sm" for="fname">First Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="fname" placeholder="Enter First Name"
                                    name="fname">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="email">Email:</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="Enter email"
                                    name="email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="comment">Comment:</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    document.getElementById("contact-section").innerHTML = aboutContactData;
}
function removeContactData() {
    document.getElementById("contact-section").innerHTML = '';
    document.getElementById("contact-btn").setAttribute('onclick', 'aboutContactData()');
    document.getElementById("contact-btn").innerHTML = "+";
}