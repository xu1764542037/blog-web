<template>
  <div id="contributions-box">
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
  </div>
</template>

<script>
import {ContributionsJS} from "@/components/common/contributions/contributionsJS";

export default {
  name: "ContributionsTable",
  data() {
    return {
      liNum: 370
    }
  },
  mounted() {
    new Promise( (resolve, reject) => {
      ContributionsJS();
    }).then( data => {

    },err => {
      // console.log(err);
    })
  }
}
</script>

<style scoped>
#contributions-box {
  height: 37rem;
  width: 88rem;
  background: white;
  margin: 5rem auto;
  border-radius: 1rem;
  transition: .4s;
}

#contributions-box:hover {
  box-shadow: .2rem .2rem 2rem black;

}

.page {
  padding: 3rem 0;
  display: -webkit-box;
  display: flex;
  flex-diraction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
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
  position: absolute;
  /*left: -1000px;*/
  /*top: -1000px;*/
  margin-top: .2rem;
  -webkit-transform: translate(-50%, -43px);
  transform: translate(-50%, -43px);
  padding: 1rem;
  font-size: 1.2rem;
  color: #959da5;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: .3rem;
  white-space: nowrap;
  opacity: 0;
  display: none;
  -webkit-transition: opacity .1s ease-out;
  transition: opacity .1s ease-out;
  pointer-events: none;
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