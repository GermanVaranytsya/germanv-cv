const vue = require("@/assets/images/vue.png");
const bootstrap = require("@/assets/images/bootstrap.png");
const bulma = require("@/assets/images/bulma.png");
const css3 = require("@/assets/images/css3.png");
const html5 = require("@/assets/images/html5.png");
const illustrator = require("@/assets/images/illustrator.png");
const js = require("@/assets/images/js.png");
const photoshop = require("@/assets/images/photoshop.png");
const webpack = require("@/assets/images/webpack.png");

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
        webpack
      ],
      imgTop: -100,
      imgLeft: -100,
      imgHeight: 64,
      imgWidth: 64,
      changeInterval: 1000,
      selectedImage: ''
    }
  },
  computed: {
    imgStyle() {
      return {
        top: `${this.imgTop}px`,
        left: `${this.imgLeft}px`,
        height: `${this.imgHeight}px`,
        width: `${this.imgWidth}px`
      }
    }
  },
  created() {
    const randomImg = func => setInterval(func, this.changeInterval);
    randomImg(this.randomImage);
    randomImg(this.moveImage);
  },
  methods: {
    randomImage() {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx];
    },
    moveImage() {
      const randomPos = twoSizes => Math.round(Math.random() * twoSizes);
      this.imgTop = randomPos(window.innerHeight - this.imgHeight);
      this.imgLeft = randomPos(window.innerWidth - this.imgWidth);
    }
  }
}
