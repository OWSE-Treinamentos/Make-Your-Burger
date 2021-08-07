<template>
	<div id="main-banner">
		<h1>Make Your Burger</h1>
	</div>
</template>

<script>
export default {
	name: "Banner",
};
</script>

<style scoped>
#main-banner {
	background-image: url("/burger.jpg");
	background-position: 0 -250px;
	background-size: cover;
  background-repeat: no-repeat;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
#main-banner h1 {
  color: #FFF;
  text-align: center;
  font-size: 3rem;
  background-color: #222;
  padding: 20px 40px;
}

@media screen and (max-width: 1000px) {
	#main-banner {
		background-position: 0 -150px;
		height: 350px;
	}
	#main-banner h1 {
		font-size: 2.4rem;
	}
}

@media screen and (max-width: 700px) {
	#main-banner {
		background-position: 0 -80px;
		height: 250px;
	}
	#main-banner h1 {
		font-size: 1.5rem;
	}
}

@media screen and (max-width: 500px) {
	#main-banner {
		background-position: 0 -50px;
		height: 180px;
	}
	#main-banner h1 {
		font-size: 0.9rem;
	}
}
</style>