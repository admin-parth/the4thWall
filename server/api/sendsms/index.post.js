const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const sms_response = await $fetch('https://control.msg91.com/api/v5/flow', {
        method: 'post',
        body: body,
        headers: {
            'authkey': config.public.msg91Auth,
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    })
    console.log(sms_response)
    return sms_response
})