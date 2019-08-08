<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  // ES6
  data() {
    return {
      message: "login component"
    };
  }
  //ES6 arrow function
  // data: () => {
  //   return {
  //     message: "login component"
  //   };
  // },

  // ES5
  // data: function() {
  //   return {
  //     message: "login component"
  //   };
  // }
};
</script>

<style>
</style>


