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
      changeInterval: 10000
    }
  },
  created() {
    let interval = setInterval(() => this.addImage(), 500);
    setTimeout(() => clearInterval(interval), this.changeInterval);
    setInterval(this.randomImage, 500);
    setInterval(this.randomPosition, 500);
  },
  methods: {
    randomImage() {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx];
    },
    randomPosition() {
      this.imgLeft = Math.round(Math.random() * 95 ) + 1;
      this.imgTop = Math.round(Math.random() * 5 ) + 1;
    },
    addImage() {
      this.addedImage.push({
        style: {
          top: `${this.imgTop}%`,
          left: `${this.imgLeft}%`,
          height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px`
        },
        src: this.selectedImage
      });
    }
  }
}
