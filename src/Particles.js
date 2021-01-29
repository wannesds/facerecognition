export const particles = {
    "background": {
      "color": {
        "value": "transparent"
      },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.8,
          "size": 40
        },
        "connect": {
          "distance": 10
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "#1f2122"
      },
      "links": {
        "color": {
          "value": "#2de4d5"
        },
        "distance": 10,
        "enable": false,
        "opacity": 0.4,
        "triangles": {
          "enable": true
        }
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 5
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": 0.5,
        "animation": {
          "enable": true,
          "minimumValue": 0.1,
          "speed": 3
        }
      },
      "shape": {
        "options": {
          "polygon": {
            "nb_sides": 5
          },
          "star": {
            "nb_sides": 5
          },
          "image": {
            "src": "https://cdn.matteobruni.it/images/particles/github.svg",
            "width": 100,
            "height": 100
          },
          "images": {
            "src": "https://cdn.matteobruni.it/images/particles/github.svg",
            "width": 100,
            "height": 100
          }
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": 5,
        "animation": {
          "enable": true,
          "minimumValue": 0.1,
          "speed": 20
        }
      },
      "stroke": {
        "color": {
          "value": "#000000",
          "animation": {
            "enable": false,
            "speed": 1,
            "sync": true
          }
        }
      },
      "twinkle": {
        "lines": {
          "color": {
            "value": "#ff0000"
          }
        },
        "particles": {
          "color": {
            "value": "#ffff00"
          }
        }
      }
    }
  
}

