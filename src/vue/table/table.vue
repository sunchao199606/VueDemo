<template>
  <div>
    <table>
      <tr>
        <th v-bind:key="key" v-for="(value,key) in stocks[0]">{{key}}</th>
      </tr>
      <tr v-bind:key="index" v-for="(item ,index) in stocks">
        <td v-bind:key="key" v-for="(value,key) in item">{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stocks: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      this.$http
        .get("/sz-sh-stock-history", {
          params: {
            begin: "2019-08-01",
            code: 600183,
            end: "2019-08-24"
          }
        })
        .then(response => {
          let stocks = response.data.showapi_res_body.list;
          Array.prototype.sort.call(stocks, (a, b) => {
            let d1 = Date.parse(a.date);
            let d2 = Date.parse(b.date);
            return d1 > d2 ? 1 : d1 === d2 ? 0 : -1;
          });
          this.stocks = stocks;
          // console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="css" scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
  align-content: center;
}
</style>