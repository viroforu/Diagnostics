/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieImageEl;
  this.movieTitleEl = document.querySelector('#movieTitle');
   this.movieDescriptionEl = document.querySelector('#movieDescription');
   this.movieInfo = {
     
      karigurashiButton: {
       title: '',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: ''
      },

      kazetachinuButton: {
        title: '',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: ''

      },
      herpesovinoButton: {
        title: '',
        imgEl: document.querySelector('#herpesovinoMovieImage'),
        description: ''
      },

      inmunodeficienciaButton: {
        title: '',
        imgEl: document.querySelector('#inmunodeficienciaMovieImage'),
        description: ''
      },
      
      panleucopeniaButton: {
        title: '',
        imgEl: document.querySelector('#panleucopeniaMovieImage'),
        description: ''
      },

      leucemiaButton: {
        title: '',
        imgEl: document.querySelector('#leucemiaMovieImage'),
        description: ''
      },

      herpespsitacidoButton: {
        title: '',
        imgEl: document.querySelector('#herpespsitacidoMovieImage'),
        description: ''
      },

      parvoviruscaninoButton: {
        title: '',
        imgEl: document.querySelector('#parvoviruscaninoMovieImage'),
        description: ''
      },
    };


    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1.4, 1.4, 1.4);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});
Footer
