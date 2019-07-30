<template>
    <div>

    </div>
</template>

<script>
  import WebSocket from '~/util/chart'

  const initWS = () => {
    new WebSocket((ws) => {
      ws.onmessage((data) => {
        console.log('%c%s', 'color:green;', data);
      });
    });
  };

  export default {
    name: "chart",
    data() {
          return {

          }
    },
    mounted () {
      const data = {
        'data': '连接'
      }
      new WebSocket((ws) => {
        ws.onmessage((data) => {
          console.log('%c%s', 'color:green;', data);
        });
      });
    }
  }
</script>

<style scoped lang="scss">

</style>
