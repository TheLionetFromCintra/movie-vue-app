<template>
  <div>
    <main class="flex main">
      <the-side-bar />
      <div class="content">
        <router-view />
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheSideBar from "./components/layouts/TheSideBar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  components: {
    TheSideBar,
    TheFooter,
  },
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  overflow-x: hidden;
  background-color: rgb(28 28 30/1);
  color: rgb(152 152 152/1);
  font-family: "Roboto", sans-serif;
}
img {
  max-width: none;
  height: 100%;
}
.main {
  min-height: calc(100vh - 60px);
}
.content {
  padding: 28px 38px;
  width: 100%;
  max-width: 70%;
  border-left: 1px solid rgb(58 57 57/1);
  border-right: 1px solid rgb(58 57 57/1);
}
.swiper {
  height: 100%;
}
.img-wrapper {
  width: 100%;
  overflow: hidden;
}
.text-overflow {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.main-slider .swiper-button-prev,
.main-slider .swiper-button-next {
  top: 6% !important;
  z-index: 20 !important;
  color: #fff !important;
}
.main-slider .swiper-button-prev::after,
.main-slider .swiper-button-next::after {
  font-size: 15px;
}
.main-slider .swiper-button-prev {
  left: 2% !important;
}
.main-slider .swiper-button-next {
  left: 5% !important;
}
</style>
