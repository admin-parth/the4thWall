export const useUserStore = defineStore('user' , {
    state: () => ({
        name: '',
        phone: '',
        email: '',
        password: '',
        getBuildingDetails: false,
        verified: false,
    }),
    actions: {
        resetUser() {
            this.name =''
            this.phone =''
            this.email =''
            this.password =''
            this.getBuildingDetails = false
            this.verified = false
        },
        setBuildingDetails(val: boolean) {
            this.getBuildingDetails = val
        },
        setUserVerified(val: boolean) {
            this.verified = val
        }
    }
})