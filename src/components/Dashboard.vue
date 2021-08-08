<template>
	<table id="burger-table">
		<thead>
			<tr id="burger-table-heading">
				<th id="order-id">#:</th>
				<th>Cliente</th>
				<th>Pão</th>
				<th>Carne</th>
				<th>Opcionais</th>
				<th>Ações</th>
			</tr>
		</thead>
		<tbody id="burger-table-rows">
			<tr class="burger-table-row" v-for="burger in burgers" :key="burger.id">
				<td id="order-number">{{ burger.id }}</td>
				<td>{{ burger.nome }}</td>
				<td>{{ burger.pao }}</td>
				<td>{{ burger.carne }}</td>
				<td>
					<ul>
						<li v-for="(opcional, index) in burger.opcionais" :key="index">
							{{ opcional }}
						</li>
					</ul>
				</td>
				<td>
					<select name="status" class="status">
						<option value=""  disabled>Selecione</option>
						<option v-for="s in status" :key="s.id" value="s.tipo" :selected="burger.status == s.tipo">
							{{ s.tipo }}
						</option>
					</select>
					<button class="delete-btn">Cancelar</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: "Dashboard",
	data() {
		return {
			burgers: null,
			burger_id: null,
			status: [],
		};
	},
	methods: {
		async getPedidos() {
			const req = await fetch("http://localhost:3000/burgers");

			const data = await req.json();

			this.burgers = data;

			// Regatar os Status
			this.getStatus();
		},
		async getStatus() {
			const req = await fetch("http://localhost:3000/status");

			const data = await req.json();

			this.status = data;
		},
	},
	mounted() {
		this.getPedidos();
	},
};
</script>

<style scoped>
#burger-table {
	width: 100%;
	margin: 0 auto;
	border-collapse: collapse;
}

#burger-table-heading th,
#burger-table-row td {
	width: 19%;
	text-align: left;
	border-bottom: 3px solid #333;
}

.burger-table-row td {
	border-bottom: 1px solid #333;
}

th#order-id,
td#order-number {
	width: 5%;
}

select {
	padding: 12px 6px;
	margin-right: 12px;
}

.delete-btn {
	background-color: #222;
	color: #fcba03;
	font-weight: bold;
	border: 2px solid #222;
	padding: 10px;
	margin: 0 auto;
	cursor: pointer;
	transition: 0.5s;
}

.delete-btn:hover {
	background-color: transparent;
	color: #222;
}
</style>