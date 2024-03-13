export const usePropertyStore = defineStore('property' , {
    state: () => ({
        property_name: '',
        property_type: '',
        property_bhk: '',
        property_area: '',
        property_city: '',
        property_state: '',
        property_pincode: '',
        floor_plan: null
    }),
    actions: {
        SET_floorPlan(value: any) {
            this.floor_plan = value
        }
    }
})