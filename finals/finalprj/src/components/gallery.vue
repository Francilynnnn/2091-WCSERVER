<template>
    <div class="gallery">
        <p class="heading">Genshin Impact Gallery</p>
  <div class="gallery-image">
    <div class="img-box">
      <img src="../assets/1156263.png" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Library</p>
          <p class="opacity-low">Architect Design</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="../assets/1107810.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Night Sky</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="../assets/1123012.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Tea Talk</p>
          <p class="opacity-low">Composite</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="../assets/1123014.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Road</p>
          <p class="opacity-low">Landscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="../assets/1169181.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Sea</p>
          <p class="opacity-low">Cityscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="../assets/1177188.png" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Vintage</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div> 
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'gallery',
    data () {
      return {
        title: 'Gallery'
      }
    }
  }
  </script>
  
<style scoped>

.gallery {
    background-image: url(../assets/1105694.jpg);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.heading {
    text-align: center;
    font-size: 2.0em;
    letter-spacing: 1px;
    padding: 40px;
    color: white;
}

.gallery-image {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  height: 250px;
  width: 350px;
  transform: scale(1.0);
  transition: transform 0.4s ease;
}

.img-box {
  box-sizing: content-box;
  margin: 10px;
  height: 250px;
  width: 350px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
}

.caption {
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0.0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box {
  height: 250px;
  width: 350px;
  background-color:rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.img-box:hover img { 
  transform: scale(1.1);
}

.img-box:hover .transparent-box {
  background-color:rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1.0;
}

.img-box:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}
  </style>
  