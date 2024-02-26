export const useUserStore = defineStore('user' , {
    state: () => ({
        name: '',
        phone: '',
        email: '',
        password: '',
        getBuildingDetails: false,
    }),
    actions: {
        resetUser() {
            this.name =''
            this.phone =''
            this.email =''
            this.password =''
            this.getBuildingDetails = false
        },
        setBuildingDetails(val: boolean) {
            console.log(1)
            this.getBuildingDetails = val
            console.log(this.getBuildingDetails)
        }
    }
})