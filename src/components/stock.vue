<template>
  <div>
    <div id="inputarea">
      <label for="code">请输入股票代码：</label>
      <input type="text" name="stockcode" id="code" v-model="code" />
      <label for="date">请选择股票起日期：</label>
      <input type="date" name="stockstartdate" id="startdate" v-model="startdate" />到
      <input type="date" name="stockenddate" id="enddate" v-model="enddate" />
      <button v-on:click="fetchData">查询股票详情</button>
    </div>

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
      code: 600063,
      startdate: "2020-06-01",
      enddate: "2020-06-08",
      stocks: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      console.log(parseInt(this.code));
      this.$http
        .get("/sz-sh-stock-history", {
          params: {
            begin: this.startdate,
            code: parseInt(this.code),
            end: this.enddate
          }
        })
        .then(response => {
          let body = response.data.showapi_res_body;
          if (body.ret_code === 0) {
            let stocks = response.data.showapi_res_body.list;
            Array.prototype.sort.call(stocks, (a, b) => {
              let d1 = Date.parse(a.date);
              let d2 = Date.parse(b.date);
              return d1 > d2 ? 1 : d1 === d2 ? 0 : -1;
            });
            this.stocks = stocks;
          }
        })
        .catch(err => {
          console.log(`server 返回数据失败`);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
table {
  text-align: center;
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