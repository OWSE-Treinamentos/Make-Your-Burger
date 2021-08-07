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
				<tr class="burger-table-row">
					<td id="order-number">1</td>
					<td>Gabriel</td>
					<td>Pão de Trigo</td>
					<td>Maminha</td>
					<td>
						<ul>
							<li>Salame</li>
							<li>Tomate</li>
						</ul>
					</td>
					<td>
						<select name="status" class="status">
							<option value="">Selecione</option>
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
};
</script>

<style scoped>
#burger-table {
	width: 100%;
	margin: 0 auto;
  border-collapse:collapse;
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
  color: #FCBA03;
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