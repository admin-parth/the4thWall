
export const  usepropertyStore= defineStore('property' , () => {
    let alldata = ref([])
    function getdata(data){
        alldata.value = data
        
    }
    return{
        alldata,
        getdata
    }
})