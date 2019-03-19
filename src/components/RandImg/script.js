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
    created() {
      setInterval(this.moveImage, this.changeInterval);
    },
    methods: {
      moveImage() {
        this.imgTop = Math.round(Math.random() * (screen.height - this.imgHeight));
        this.imgLeft = Math.round(Math.random() * (screen.width - this.imgWidth));
      }
    }
  }
