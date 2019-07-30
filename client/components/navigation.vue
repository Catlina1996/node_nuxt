<template>
  <div class="head">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">格菲研究平台</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/yuntai">研报云台</b-nav-item>
          <b-nav-item href="/news">最新动态</b-nav-item>
          <b-nav-item href="/write">写研报</b-nav-item>
          <b-nav-item href="/acticle">看研报</b-nav-item>
          <b-nav-item href="/chart">研报云交流</b-nav-item>
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="/mine">我的云台</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">退出登录</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    mounted() {

    }
  }
</script>

<style scoped>
  .head {
    position: sticky;
    top: 0;
    z-index: 22;
  }
</style>
