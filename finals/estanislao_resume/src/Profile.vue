<template>
<div class="container">
  <div class="header">
    <div class="full-name">
      <span class="first-name">Francilyn</span> 
      <span class="last-name">Estanislao</span>
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">estanislaofrancilyn@gmail.com</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">09605644785</span>
    </div>
    
    <div class="about">
      <span class="position">Front-End Developer </span>
      <span class="desc">
        I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
      </span>
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
    padding-bottom: 10px;
  }
  
  .last-name {
    margin-top: 10px;
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