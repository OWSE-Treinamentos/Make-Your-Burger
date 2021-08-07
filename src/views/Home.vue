<template>
	<main>
		<Banner />
		<div class="main-container">
			<h1>Monte o seu burger</h1>
			<BurgerForm />
		</div>
	</main>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import BurgerForm from "@/components/BurgerForm.vue";

export default {
	name: "Home",
	components: {
		Banner,
		BurgerForm,
	},
};
</script>
