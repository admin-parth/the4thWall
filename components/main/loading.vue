<template>
  <div class="modal-container">
    <div class="modal-content">
      <span class="modal-loader"></span>
      <p>Processing your request</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.modal-content {
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  flex-direction: row;
}

.modal-content p {
    margin-bottom: 0;
}

.modal-loader {
  display: block;
  border: 5px solid #E74B3B50;
  border-left-color: #E74B3B;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  animation: spin 1.25s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
