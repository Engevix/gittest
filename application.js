let slider = document.getElementById("message-size__slider");

noUiSlider.create(slider, {
  start: 16,
  connect: true,
  step: 1,
  range: {
    min: 1,
    max: 72,
  },
});

// slider.noUiSlider.on("slide", function (e) {
//   const sliderValue = Number(e[0]);
//   console.log(sliderValue);
// });



const App = {
  data() {
    return {
      fontSize: '16px'
    };
  },
  methods: {
    changeMessageFontSize(value) {
      this.fontSize = String(value);
    },
  },
};

const app = Vue.createApp(App).mount("#application");

slider.noUiSlider.on("slide", function (e) {
  app.changeMessageFontSize(String(Number(e[0]) + 'px'))
});

