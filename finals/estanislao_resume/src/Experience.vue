<template>
<div class="container">
  <div class="details">
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Northgate Technologies, Inc.</div>
            <div class="addr">2-A Big Horseshoe Drive, Horseshoe Village, Quezon City, 1112, Manila, Metro Manila, Philippines</div>
            <div class="duration">April 2024 - October 2025</div>
          </div>
          <div class="right">
            <div class="name">Web Designer</div>
            <div class="desc">Promoted brand identity by creating company logos and delivering attractive, user-friendly and unique website.</div>
          </div>
        </div>
                <div class="section__list-item">
          <div class="left">
            <div class="name">ANSI Information Systems, Inc.</div>
            <div class="addr">Suite 511, Tytana Plaza Building, Plaza Lorenzo Ruiz, Quintin Paredes Rd, Manila, Metro Manila, Philippines</div>
            <div class="duration">December 2025 - Feb 2026</div>
          </div>
          <div class="right">
            <div class="name">Web Designer</div>
            <div class="desc">Delivered services as web developer and webmaster, acting as project manager for platform transition.</div>
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
  name: 'experience',
  data() {
    return {
      msg6: 'My Experience:',
    };
  },
};
</script>