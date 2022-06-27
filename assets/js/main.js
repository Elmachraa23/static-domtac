const header = document.querySelector("header");
const ArrowUpBtn = document.querySelector(".arrowBtn"); 

ArrowUpBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  });
})

if(window != null) {
  window.addEventListener("scroll", ()=>{
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
}


var content = document.getElementsByTagName("body")[0];
var darkMode = document.querySelector('.button_darkLight');
darkMode.addEventListener('click', ()=>{
  darkMode.classList.toggle('active');
  content.classList.toggle('night');
});

  
  const title_agency = document.querySelector(".agency .container h2"); 
  const strategie_left = document.querySelector(".st_L"); 
  const strategie_right = document.querySelector(".st_R"); 
  const factory_left = document.querySelector(".fc_L"); 
  const factory_right = document.querySelector(".fc_R"); 
  const social_left = document.querySelector(".sc_L"); 
  const social_right = document.querySelector(".sc_R"); 
  
  const title_studio = document.querySelector(".studio .container h2"); 
  const studio_left = document.querySelector(".studio .container .content .image");
  const studio_right = document.querySelector(".studio .container .content .text-box");


  const title_team = document.querySelector(".team .container h2"); 
  const team_cards = document.querySelector(".team .cards"); 
  const team_btn = document.querySelector(".team .button"); 
  if(ScrollReveal != null) {
    ScrollReveal(
    { 
        reset: true,
        distance: '60px',
        duration: 1500,
        delay: 400
    });
  }
/*Agency*/
ScrollReveal().reveal(title_agency, {delay: 700, origin: 'left'});
ScrollReveal().reveal(strategie_left, {delay: 800, origin: 'left'});
ScrollReveal().reveal(strategie_right, {delay: 800, origin: 'right'});
ScrollReveal().reveal(factory_left, {delay: 800, origin: 'top'});
ScrollReveal().reveal(factory_right, {delay: 800, origin: 'top'});
ScrollReveal().reveal(social_left, {delay: 800, origin: 'bottom'});
ScrollReveal().reveal(social_right, {delay: 800, origin: 'bottom'});

/*studio*/

ScrollReveal().reveal(title_studio, {delay: 700, origin: 'right'});
ScrollReveal().reveal(studio_left, {delay: 600, origin: 'right'});
ScrollReveal().reveal(studio_right, {delay: 600, origin: 'left'});

/*team*/
ScrollReveal().reveal(title_team, {delay: 700, origin: 'top'});
ScrollReveal().reveal(team_cards, {delay: 800, origin: 'bottom'});
ScrollReveal().reveal(team_btn, {delay: 800, origin: 'bottom'});


const hamburger = document.querySelector('.hamburger-menu');
const Tete = document.querySelector('header');

hamburger.addEventListener("click", () => {
    Tete.classList.toggle("active");
});


/* script index */

const title_span = document.querySelectorAll(".left h1 span");
const p = document.querySelector(".left p");
const btn = document.querySelector(".left .btn");
const img = document.querySelector(".desc_right .image_brand");


window.addEventListener('load', ()  => {
if ( gsap != null )
{  
 const Time_Line = gsap.timeline({pause: true});  
  Time_Line.staggerFrom(header, 2, {y:-100, opacity:0, ease: "power2.out"}, 0.1)    
  Time_Line.staggerFrom(img, 1, {x:-1000, opacity:0, ease: "power2.out"}, 0.3)
  Time_Line.staggerFrom(title_span, 1, {opacity:0, ease: "power2.out"}, 0.1)
  Time_Line.staggerFrom(p, 1, {x:-1000, opacity:0, ease: "power2.out"}, 0.2)
  Time_Line.staggerFrom(btn, 1, {opacity:0, ease: "power2.out"}, 0.1) 
  Time_Line.play()
}

});

const text = document.querySelector(".desc_right .text");

if (text!=null)
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll("span");

for(let i=0; i<element.length; i++){
element[i].style.transform = "rotate("+i*18+"deg)";
}

window.addEventListener("scroll", ()=>{
var header = this.document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
})

const button = document.getElementById("btn");
const paragraphe = document.querySelector(".paragraphe");

if ( button != null )
{
button.addEventListener("click",()=>{
paragraphe.classList.toggle("show-more");
  
})
}


/* script contact */

   var FormBox = $("#formBox").val();
        //function to send the message when click on button send
        function sendmail(){ 

            var First_name = $("#first_name").val();
            var Last_name = $("#last_name").val();
            var Mail = $("#email").val();
            var Mobile = $("#mobile").val();
            var Message = $("#message").val();
            
            var Body = 'first_name :'+First_name+'<br>last_name :'+Last_name+'<br>email :'+Mail+'<br>mobile :'+Mobile+'<br>message :'+Message;
            
            Email.send({
                Host : "smtp.yourisp.com",
                Username : "imadelmachraa0@gmail.com",
                Password : "password",
                To : "imadelmachraa0@gmail.com",
                From : Mail.value,
                Subject : 'New Mail On Contact Form From :'+First_name+" "+Last_name, 
                Body : Body
            }).then( 
                message => alert(Message)
            );    
        }        
       
        
    // add the event Listener submit :

 /*   FormBox.addEventListener('submit', sendMsg);
     
function submit() {
        $("#target").unbind('submit').submit()
    }

    $(document).ready(function () {
        $('#target').on('submit', function (e) {
            e.preventDefault();
            $('#captcha').show();
        });
    });*/
