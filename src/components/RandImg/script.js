const vue = require("@/assets/images/vue.png");
const bootstrap = require("@/assets/images/bootstrap.png");
const bulma = require("@/assets/images/bulma.png");
const css3 = require("@/assets/images/css3.png");
const html5 = require("@/assets/images/html5.png");
const illustrator = require("@/assets/images/illustrator.png");
const js = require("@/assets/images/js.png");
const photoshop = require("@/assets/images/photoshop.png");
const webpack = require("@/assets/images/webpack.png");
const jquery = require("@/assets/images/jquery.png");

export default {
  name: "randImg",
  data() {
    return {
      images: [
        vue,
        bootstrap,
        bulma,
        css3,
        html5,
        illustrator,
        js,
        photoshop,
        webpack,
        jquery
      ],
      addedImage: [],
      imgTop: -100,
      imgLeft: -100,
      imgHeight: 64,
      imgWidth: 64,
      changeInterval: 5000
    }
  },
  created() {
    let interval = setInterval(() => this.addImage(), 250);
    setTimeout(() => clearInterval(interval), this.changeInterval);
    setInterval(this.randomImage, 250);
    setInterval(this.randomPosition, 250);
  },
  methods: {
    randomImage() {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx];
    },
    randomPosition() {
      this.imgLeft = Math.round(Math.random() * (window.innerWidth - this.imgWidth));
      this.imgTop = Math.round(Math.random() * ((window.innerHeight/10) - this.imgTop));
    },
    addImage() {
      this.addedImage.push({
        style: {
          top: `${this.imgTop}px`,
          left: `${this.imgLeft}px`,
          height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px`
        },
        src: this.selectedImage
      });
    }
  }
}
