const vue = require("@/assets/images/vue.png");
  export default {
    name: "randImg",
    data() {
      return {
        vue,
        imgTop: 0,
        imgLeft: 0,
        imgHeight: 64,
        imgWidth: 64,
        changeInterval: 1000
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
      setInterval(this.moveImage, this.changeInterval);
    },
    methods: {
      moveImage() {
        this.imgTop = Math.round(Math.random() * (window.innerHeight - this.imgHeight));
        this.imgLeft = Math.round(Math.random() * (window.innerWidth - this.imgWidth));
      }
    }
  }
