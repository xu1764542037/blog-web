<template>
  <div id="contributions-box" ref="obtainTop" :style="getStyle()">
    <div class="page">
      <div class="page__current-date"></div>
      <ul class="page__grid grid">
        <div class="grid__head grid-head"><span class="grid-head__cell">Mar</span><span class="grid-head__cell">Apr</span><span class="grid-head__cell">May</span><span class="grid-head__cell">Jun</span><span class="grid-head__cell">Jul</span><span class="grid-head__cell">Aug</span><span class="grid-head__cell">Sep</span><span class="grid-head__cell">Oct</span><span class="grid-head__cell">Nov</span><span class="grid-head__cell">Dec</span><span class="grid-head__cell">Jan</span><span class="grid-head__cell">Feb</span><span class="grid-head__cell">Mar</span>
        </div>
        <div class="grid__cols grid-cols"><span class="grid-cols__cell"></span><span class="grid-cols__cell">Mon</span><span class="grid-cols__cell"></span><span class="grid-cols__cell">Wed</span><span class="grid-cols__cell"></span><span class="grid-cols__cell">Fri</span><span class="grid-cols__cell"></span>
        </div>
        <div class="grid__body">
          <li class="grid__cell" v-for="li in liNum"></li>
        </div>
        <div class="grid__footer grid-footer"><span class="grid-footer__first">Less</span>
          <div class="grid-footer__cell"></div>
          <div class="grid-footer__cell grid-footer__cell_color_1"></div>
          <div class="grid-footer__cell grid-footer__cell_color_2"></div>
          <div class="grid-footer__cell grid-footer__cell_color_3"></div>
          <div class="grid-footer__cell grid-footer__cell_color_4"></div><span class="grid-footer__last">More</span>
        </div>
      </ul>
    </div>
    <div class="tooltip"></div>
    <div class="last-year table-column">
      <p class="column-name">过去一年摸鱼次数</p>
      <p class="column-num">328</p>
      <p class="column-time">{{lastYear}} - {{today}}</p>
    </div>
    <div class="last-month table-column">
      <p class="column-name">过去一月摸鱼次数</p>
      <p class="column-num">30</p>
      <p class="column-name">{{lastMonth}} - {{today}}</p>
    </div>
    <div class="last-week table-column">
      <p class="column-name">过去一周摸鱼次数</p>
      <p class="column-num">5</p>
      <p class="column-time">{{lastWeek}} - {{today}}</p>
    </div>
  </div>
</template>

<script>
import {ContributionsJS} from "@/components/common/indexContent/contributions/contributionsJS";

export default {
  name: "ContributionsTable",
  data() {
    return {
      liNum: 370,
      today: '',
      lastYear: '',
      lastMonth: '',
      lastWeek: '',
      transform: 'scale(.5)'
    }
  },
  mounted() {
    new Promise( (resolve, reject) => {
      ContributionsJS();
    }).then( data => {

    },err => {
      // console.log(err);
    })

    var date1 = new Date();
    //今天时间
    var time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
    this.today = time1
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() - 7);
    this.lastWeek = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
    date2.setDate(date1.getDate() - 30);
    this.lastMonth = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
    date2.setDate(date1.getDate() - 365);
    this.lastYear = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();

    window.addEventListener('scroll', this.handleScrollx, true)

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      if (this.$refs.obtainTop.getBoundingClientRect().top<900 && this.$refs.obtainTop.getBoundingClientRect().top>-200) {
        this.transform = "scale(1)"
      }
    },
    getStyle() {
      return {
        transform: this.transform
      }
    }
  }
}
</script>

<style scoped>
#contributions-box {
  height: 32rem;
  max-width: 90%;
  /*width: 1000px;*/
  /*background: white;*/
  background: rgba(255,255,255,.5);
  margin: 4rem auto;
  border-radius: 1rem;
  transition: .8s;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

#contributions-box:hover {
  box-shadow: .2rem .2rem 2rem black;
  background: rgba(255,255,255,.7);

}

.table-column {
  text-align: center;
}

.column-name {
  font-size: 12px;
  margin-top: .5rem;

}

.column-num {
  font-size: 24px;
  font-weight: 100;
  margin-top: 1rem;

}

.column-time {
  font-size: 14px;
  margin-top: .5rem;
}

.last-year {
  min-height: 12rem;
  width: 33.4%;
  border-top: 1px dashed black;
  border-right: 1px dashed black;
  float: left;
}

.last-month {
  min-height: 12rem;
  width: 33.3%;
  border-top: 1px dashed black;
  border-right: 1px dashed black;
  margin-left: 33.4%;
}

.last-week {
  min-height: 12rem;
  width: 33.3%;
  border-top: 1px dashed black;
  margin-left: 66.7%;
  margin-top: -12rem;
}



.page {
  padding: 3rem 0;
  display: -webkit-box;
  display: flex;
  flex-diraction: column;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
}

.grid {
  position: relative;
  width: 82.2rem;
  padding-left: 3rem;
}
.grid__head {
  width: 100%;
  margin-bottom: 1rem;
}
.grid__cols {
  position: absolute;
  left: 0;
  top: 2.2rem;
  width: 2.5rem;
}
.grid__body {
  display: grid;
  grid-gap: .3rem;
  grid-auto-flow: column;
  grid-template: repeat(7, 1fr)/repeat(53, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 1rem;
}
.grid__footer {
  width: 100%;
  margin-top: 2rem;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.grid__cell {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #ebedf0;
}
.grid__cell_color_1 {
  background-color: #c6e48b;
}
.grid__cell_color_2 {
  background-color: #7bc96f;
}
.grid__cell_color_3 {
  background-color: #239a3b;
}
.grid__cell_color_4 {
  background-color: #196127;
}

.grid-head {
  display: grid;
  grid-gap: .3rem;
  grid-template-columns: repeat(53, 1fr);
  grid-template-rows: 1.2rem;
}
.grid-head__cell {
  font-size: 1rem;
  color: #767676;
}
.grid-head__cell:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 3;
}
.grid-head__cell:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 7;
}
.grid-head__cell:nth-child(3) {
  grid-column-start: 7;
  grid-column-end: 11;
}
.grid-head__cell:nth-child(4) {
  grid-column-start: 11;
  grid-column-end: 16;
}
.grid-head__cell:nth-child(5) {
  grid-column-start: 16;
  grid-column-end: 20;
}
.grid-head__cell:nth-child(6) {
  grid-column-start: 20;
  grid-column-end: 24;
}
.grid-head__cell:nth-child(7) {
  grid-column-start: 24;
  grid-column-end: 29;
}
.grid-head__cell:nth-child(8) {
  grid-column-start: 29;
  grid-column-end: 33;
}
.grid-head__cell:nth-child(9) {
  grid-column-start: 33;
  grid-column-end: 37;
}
.grid-head__cell:nth-child(10) {
  grid-column-start: 37;
  grid-column-end: 42;
}
.grid-head__cell:nth-child(11) {
  grid-column-start: 42;
  grid-column-end: 46;
}
.grid-head__cell:nth-child(12) {
  grid-column-start: 46;
  grid-column-end: 50;
}
.grid-head__cell:nth-child(13) {
  grid-column-start: 50;
  grid-column-end: 54;
}

.grid-cols {
  display: grid;
  grid-gap: .3rem;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
}
.grid-cols__cell {
  font-size: 1rem;
  color: #767676;
  width: 2.5rem;
  height: 1.2rem;
}

.grid-footer {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.grid-footer__cell {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 .15rem;
  background-color: #ebedf0;
}
.grid-footer__cell_color_1 {
  background-color: #c6e48b;
}
.grid-footer__cell_color_2 {
  background-color: #7bc96f;
}
.grid-footer__cell_color_3 {
  background-color: #239a3b;
}
.grid-footer__cell_color_4 {
  background-color: #196127;
}
.grid-footer__first, .grid-footer__last {
  margin: 0 6px;
  font-size: 1rem;
  color: #767676;
}

.tooltip {
  position: fixed;
  /*left: -1000px;*/
  /*top: -1000px;*/
  -webkit-transform: translate(-50%, -43px);
  transform: translate(-50%, -43px);
  padding: 1rem;
  font-size: 1.2rem;
  color: #959da5;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: .3rem;
  white-space: nowrap;
  opacity: 1;
  display: none;
  -webkit-transition: opacity .1s ease-out;
  transition: opacity .1s ease-out;
  pointer-events: none;
  z-index: 111;
  margin-top: -19.5rem;
  margin-left: -32.2rem;
}
.tooltip strong {
  color: #fff;
}
.tooltip::before {
  content: '';
  position: absolute;
  z-index: 99999;
  left: 50%;
  bottom: -1rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: block;
  width: 0;
  height: 0;
  box-sizing: border-box;
  border: .5rem solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
  pointer-events: none;
}
.tooltip_display {
  display: block;
}
.tooltip_visible {
  opacity: 1;
}

</style>