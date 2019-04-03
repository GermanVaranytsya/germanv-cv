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
      addedImage: [],
      imgTop: -100,
      imgLeft: -100,
      imgHeight: 64,
      imgWidth: 64,
      changeInterval: 250
    }
  },
  created() {
    const randomImg = func => setInterval(func, this.changeInterval);
    randomImg(this.randomImage);
    randomImg(this.addImage);
    // setTimeout(clearInterval(randomImg(this.addImage)), 10000);
    randomImg(this.randomPosition);
  },
  mounted() {
    const newImages = this.addedImage.filter(image => {
      return image.style.display !== 'none';
    });

    this.addedImage = newImages;
  },
  // mounted: function () {
  //   if (this.addedImage[i] = {
  //     style: {display: `none`}
  //   }) {
  //     this.addedImage.remove(this.addedImage[i]);
  //   }
  // },
  methods: {
    randomImage() {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx];
    },
    randomPosition() {
      const randomPos = twoSizes => Math.round(Math.random() * twoSizes);
      this.imgTop = randomPos(screen.height / 10 - this.imgHeight);
      this.imgLeft = randomPos(screen.width - this.imgWidth);
    },
    addImage() {
      if (this.addedImage.length > 500) {
        this.addedImage.splice(0, 300);
      } else {
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
}
