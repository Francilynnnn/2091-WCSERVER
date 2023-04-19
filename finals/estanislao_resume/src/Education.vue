<template>
<div class="container">
  <div class="details">
    <div class="section">
      <div class="section__list">
      </div>
    </div>
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Don Antonio Lee Chi Uan Integrated School</div>
            <div class="addr">Calle Uno, Xevera Bacolor, Pampanga</div>
            <div class="duration">2007 - 2014</div>
          </div>
          <div class="right">
            <div class="name">Elementary</div>
            <div class="desc">Grade 1 - 6</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Holy Angel University</div>
            <div class="addr">#1 Holy Angel St, Angeles, 2009 Pampanga</div>
            <div class="duration">2015 - 2025</div>
          </div>
          <div class="right">
            <div class="name">JHS, SHS, College</div>
            <div class="desc">Grade 7-10, 11-12, BSIT</div>
          </div>
        </div>

      </div>
      
  </div>
</div>
</div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;  
}

body {
  min-height: 100%;  
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;   
  background: #fff;
  margin: 0px auto 0px; 
  box-shadow: 1px 1px 2px #DAD7D7;
  border-radius: 3px;  
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
  
  .full-name {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .first-name {
    font-weight: 700;
  }
  
  .last-name {
    font-weight: 300;
  }
  
  .contact-info {
    margin-bottom: 20px;
  }
  
  .email ,
  .phone {
    color: #999;
    font-weight: 300;
  } 
  
  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  
  .position {
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
  }
}


.details {
  line-height: 20px;
  
  .section {
    margin-bottom: 40px;  
  }
  
  .section:last-of-type {
    margin-bottom: 0px;  
  }
  
  .section__title {
    letter-spacing: 2px;
    color: #54AFE4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .section__list-item {
    margin-bottom: 40px;
  }
  
  .section__list-item:last-of-type {
    margin-bottom: 0;
  }
  
  .left ,
  .right {
    vertical-align: top;
    display: inline-block;
  }
  
  .left {
    width: 60%;    
  }
  
  .right {
    tex-align: right;
    width: 39%;    
  }
  
  .name {
    font-weight: bold;
  }
}
  
</style>

<script>
export default {
  name: 'profile',
  data() {
    return {
      msg6: 'My profile:',
    };
  },
};
</script>