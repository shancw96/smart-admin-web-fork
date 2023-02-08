<template>
  <div ref="containerRef" class="container-card">
    <div id="inner" ref="innerRef" class="inner-card">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  const containerRef = ref(null);
  const innerRef = ref(null);
  onMounted(() => {
    // Init
    const container = containerRef.value;
    const inner = innerRef.value;

    // Mouse
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return '(' + this.x + ', ' + this.y + ')';
      },
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    let onMouseEnterHandler = function (event) {
      container.style = 'transform: scale(1.1);transition: transform 0.2s ease-in-out;';
      update(event);
    };

    let onMouseLeaveHandler = function () {
      inner.style = '';
      container.style = 'transform: scale(1);transition: transform 0.2s ease-in-out;';
    };

    let onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    let update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
    };

    let updateTransformStyle = function (x, y) {
      let style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  });
</script>

<style scoped>
  .container-card {
    perspective: 50px;
  }

  .inner-card {
    transition: transform 0.2s;
    -webkit-transition: transform 0.2s;
  }
</style>
