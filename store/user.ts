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
            this.getBuildingDetails = val
        }
    }
})