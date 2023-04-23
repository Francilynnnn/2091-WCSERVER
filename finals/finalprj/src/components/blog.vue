<template>
    <div class="blog">
        <div id="welcome">
	<div class="container">
		<div class="title">
			<h2>Liyue Harbor</h2>
			<span class="byline">By Francilyn Estanislao</span>
		</div>
		<p>Liyue is the nation of Stone and Contracts, under the patronage of the Geo Archon, Rex Lapis. A harbor-city located in eastern Teyvat, Liyue had been ruled by Rex Lapis for several millennia, who grew the nation into a bustling trade hub, and the most prosperous of the seven nations.
            Though formally ruled by Rex Lapis, the Rex only makes one annual public appearance at the Rite of Descension to dictate his policies. Daily governance is instead conducted by the Qixing, a committee of seven business leaders sworn to uphold the Rex's laws. Rex Lapis's ultimate vision for Liyue is one of order—the creation of a nation where gods, immortals, and men can organize themselves through contracts.
</p>
		<ul class="actions">
			<li><a href="#" class="button">Etiam posuere</a></li>
		</ul>
	</div>
</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'blog',
    data () {
      return {
        title: 'Blog'
      }
    }
  }
  </script>
  
  <style scoped>
	html, body
	{
		height: 100%;
	}
	
	
	h1, h2, h3
	{
		margin: 0;
		padding: 0;
	}
	
	p, ol, ul
	{
		margin-top: 0;
	}
	
	ol, ul
	{
		padding: 0;
		list-style: none;
	}
	
	p
	{
		line-height: 180%;
	}
	
	strong
	{
	}
	
	a
	{
		color: #ee0000;
	}
	
	a:hover
	{
		text-decoration: none;
	}
	
	.container
	{
		overflow: hidden;
		margin: 0em auto;
		width: 1200px;
	}
	
	.button
	{
		display: inline-block;
		padding: 1em 2em 1em 2em;
		letter-spacing: 0.10em;
		margin-top: 2em;
		padding: 1.40em 3em;
		background: #2651a8;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1em;
		color: #FFF;
	}
	
	.button-alt
	{
		padding: 1em 2em;
		border-color: rgba(0,0,0,.8);
		color: #FFF;
	}
		

	.title
	{
		margin-bottom: 3em;
	}
	
	.title h2
	{
		font-size: 2.7em;
	}
	
	.title .byline
	{
		font-size: 1.3em;
		color: rgba(255,255,255,0.60);
	}


	#welcome
	{
		position: relative;
		padding: 7em 0em 7em 0em;
		background: url(../assets/1177188.png);
		background-size: cover;
		text-align: center;
	}
	
	#welcome .container
	{
		width: 1000px;
		padding: 0px 100px;
		color: rgba(255,255,255,0.8);
	}
	
	#welcome a
	{
		color: rgba(255,255,255,1);
	}
	
	#welcome .button
	{
		background: #FFF;
		color: #2651a8;
	}
</style>

  