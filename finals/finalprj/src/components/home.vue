<template>
  <div class="home">
    <div id="header-wrapper">
      <div id="banner" class="container">
        <div class="title">
          <h2>Genshin Impact</h2>
          <span class="byline"
            >Genshin Impact is an open-world action RPG. In the game, set forth
            on a journey across a fantasy world called Teyvat.
          </span>
        </div>
        <ul class="actions">
          <li><a href="#" class="button">Browse for more!</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

p,
ol,
ul {
  margin-top: 0;
}

ol,
ul {
  padding: 0;
  list-style: none;
}

p {
  line-height: 180%;
}
a {
  color: #ee0000;
}

a:hover {
  text-decoration: none;
}

.container {
  overflow: hidden;
  margin: 0em auto;
  width: 1200px;
}

ul.actions li {
  display: inline-block;
  padding: 0em 0.5em;
}

.button {
  display: inline-block;
  padding: 1em 2em 1em 2em;
  letter-spacing: 0.1em;
  margin-top: 2em;
  padding: 1.4em 3em;
  background: #2651a8;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1em;
  color: #fff;
}

.button-alt {
  padding: 1em 2em;
  border-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.boxA,
.boxB,
.boxC {
  width: 384px;
}

.boxA,
.boxB {
  float: left;
  margin-right: 20px;
}

.boxC {
  float: right;
}

.title {
  margin-bottom: 3em;
  color: antiquewhite;
}

.title h2 {
  font-size: 2.7em;
}

.title .byline {
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.6);
}

#wrapper {
  position: relative;
  padding: 5em 0em 7em 0em;
  background: #fff;
}

#header-wrapper {
  position: relative;
  padding: 5em 0em 7em 0em;
  background: #111111 url(../assets/1123012.jpg) no-repeat center;
  background-size: cover;
}

#header {
  position: relative;
  padding: 5em 0em;
}

#banner {
  padding-top: 10em;
  text-align: center;
}

#banner .title h2 {
  font-size: 4em;
}

#banner .title .byline {
  font-size: 2em;
}

#banner .button {
  margin-top: 2em;
  padding: 1.4em 3em;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1em;
}

.banner {
  margin-bottom: 5em;
}

#three-column {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}

#three-column .fa {
  display: block;
  padding: 1em 0em;
  color: rgba(0, 0, 0, 1);
  font-size: 2em;
}

#three-column .title h2 {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
}

#three-column .title .byline {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
</style>
