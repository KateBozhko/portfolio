particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 90,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  

  gsap.to("h2", {
text: "I'm Kate and I'm a junior front-end developer. I'm creating applications and websites.",
duration: 3,
ease: "power1.in"
  })


  gsap.to("h3", {
    text: "Also I'm studying React/Redux/Node now.",
    duration: 3,
    ease: "power1.in",
    delay: 2
      })
  
  gsap.from(".color", {opacity: 0, duration: 3, stagger: .6})
  gsap.from("h1", {opacity: 0, duration: 3})
        
        


  const box = document.querySelectorAll('.upper-box');
  const title = document.querySelectorAll('.title');
  const parDesignation = document.querySelectorAll('.par-designation');
  const btnAnchor = document.querySelectorAll('.btn-anchor')
  colors = ['#232577', '#33255e', '#9a2429', '#1e7fc6', '#7c3f69', '#101420', '#4a4f87'];
  let i = 0;
  
  box.forEach((item, index) => {
      item.addEventListener('mouseenter', (e) => {
          gsap.fromTo(box[index], {y: 20, opacity:0}, {y:0, opacity:1, duration:.5});
          gsap.fromTo(title[index], {x:-30, opacity:0}, {x:0, opacity:1, duration:.5, delay:.5});
          gsap.fromTo(parDesignation[index], {y:0, opacity:0}, {y:30, delay:.8, opacity:1});
          gsap.fromTo(btnAnchor[index], {y:30, opacity:0}, {y:0, delay:1.1, duration:1, opacity:1, ease: Back.easeOut.config(2)});
          changecolor()
      })
  
  function changecolor() {
          i++;
      
          if (i > colors.length-1) {
              i = 0;
          }  
  
          box[index].style.background = colors[i]  
      }
  
   item.addEventListener('mouseleave', (e) => {
          gsap.to(box[index], .5, {y:20, opacity:0});
          gsap.to(title[index], .5, {x:-30, opacity:0});
          gsap.to(parDesignation[index], .5, {y:0, opacity:0});
          gsap.to(btnAnchor[index], .5, {y:0, opacity:0});
      })
  })







