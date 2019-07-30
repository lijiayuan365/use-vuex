<template>
  <div>
    <h1>模块B 的 bName：{{bName}}</h1>
    <h1>{{name}}</h1>
    <button @click="setBname({name:'QQ'})">修改 bName</button>
    <button @click="setAsyncBname">异步修改 bName</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },

    methods: {
      // setBname() {
      //   this.$store.commit("moduleB/SET_B_NAME", {
      //     name: "QQ"
      //   });
      // },
      ...mapMutations({
        setBname: 'moduleB/SET_B_NAME'
      }),
      setAsyncBname() {
        this.$store.dispatch('moduleB/ASYNC_SET_NAME', {name: 'JJ'});
      }
    },
    computed: {
      bName() {
        return this.$store.state.moduleB.bName;
      },
      bGetter() {
        return this.$store.getters['moduleB/bFullName'];
      },
      ...mapGetters({
        bGetter2: 'moduleB/bFullName'
      }),
      // moduleB 模块内的 bName
      ...mapState('moduleB', {
        name: state => state.bName
      })
      // ...mapState({
      //   name: state => state.moduleB.bName
      // })
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
