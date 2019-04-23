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
      imgWidth: 64
    }
  },
  created() {
    const interval = setInterval(() => {
      this.addRandomImage();
      this.randomPosition();
    }, 500);
    setTimeout(() => clearInterval(interval), 10000);
  },
  methods: {
    randomPosition() {
      //adding random position left, top
      this.imgLeft = Math.round(Math.random() * 95) + 1;
      this.imgTop = Math.round(Math.random() * 5) + 1;
    },
    addRandomImage() {
      //adding random image
      const selectedImage = this.images[
        Math.floor(Math.random() * this.images.length)
        ];
      //adding image to new array
      this.addedImage.push({
        style: {
          top: `${this.imgTop}%`,
          left: `${this.imgLeft}%`,
          height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px`
        },
        src: selectedImage
      });
    }
  }
}
