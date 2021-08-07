<template>
	<main>
		<Navbar :logo="logo_src" :alt="alt_text" />
		<router-view />
		<Footer />
	</main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Navbar,
		Footer,
	},
	data() {
		return {
			logo_src: "/logo.png",
			alt_text: "Make Your Burger",
		};
	},
};
</script>

<style>
* {
  font-family: Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 30px;
  color: #222;
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 15px;
  }
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 14px;
  }
}
</style>
