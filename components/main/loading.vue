<template>
    <div class='modal-container'>
        <div class="modal-content">
        <span class='modal-loader'></span>
            <p>Processing your request</p>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Loading'
}
</script>
<style scoped>
*{box-sizing: border-box;}

.modal-container {
	display: flex;
	align-items: center;
  	justify-content: center;
	position: fixed;
	top: 0;
	width: 100%; 
	height: 100%;
	background-color: rgba(0,0,0,0.4);
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
}


.modal-loader {
  display: block;
  border: 5px solid #d3d3d380;
  border-left-color: #a9a9a994;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  animation: spin 1.25s linear infinite;
}

@keyframes spin {
    to{transform: rotate(360deg);}
}
</style>