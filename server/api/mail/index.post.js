import sendgrid from '@sendgrid/mail'
const config = useRuntimeConfig()

sendgrid.setApiKey(config.public.sendgridApiKey)
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const message = `
    <!doctype html>
    <html lang="en-US">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>New message email - The 4th Wall</title>
        <meta name="description" content="New mesasage email - The 4th Wall">
    </head>
    <style>
        a:hover {text-decoration: underline !important;}
    </style>
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <!-- Logo -->
                        <tr>
                            <td style="text-align:center;">
                              <a href="https://the4thwall.in" title="logo" target="_blank">
                                <img width="150" src="https://i.imgur.com/UfAaSUK.png" title="logo" alt="logo">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <!-- Email Content -->
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <!-- Title -->
                                    <tr>
                                        <td style="padding:0 15px; text-align:center;">
                                            <h1 style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">New Message</h1>
                                            <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; 
                                            width:100px;"></span>
                                        </td>
                                    </tr>
                                    <!-- Details Table -->
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0"
                                                style="width: 100%; border: 1px solid #ededed">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Name:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Email:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Phone number:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.phonenumber}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Message:</td>
                                                        <td style="padding: 10px; color: #455056;">${body.message}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                    <p style="font-size:14px; color:#455056bd; line-height:18px; margin:0 0 0;">&copy; <strong>the4thwall.in</strong></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>`
    const inquiry = `
    <!doctype html>
    <html lang="en-US">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>New message email - The 4th Wall</title>
        <meta name="description" content="New mesasage email - The 4th Wall">
    </head>
    <style>
        a:hover {text-decoration: underline !important;}
    </style>
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <!-- Logo -->
                        <tr>
                            <td style="text-align:center;">
                              <a href="https://the4thwall.in" title="logo" target="_blank">
                                <img width="150" src="https://i.imgur.com/UfAaSUK.png" title="logo" alt="logo">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <!-- Email Content -->
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <!-- Title -->
                                    <tr>
                                        <td style="padding:0 15px; text-align:center;">
                                            <h1 style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">New Inquiry for The 4th Wall</h1>
                                            <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; 
                                            width:100px;"></span>
                                        </td>
                                    </tr>
                                    <!-- Details Table -->
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0"
                                                style="width: 100%; border: 1px solid #ededed">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Name:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Email:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)">
                                                            Phone number:</td>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">
                                                            ${body.phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property Name:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property Type:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property BHK:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_bhk}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property Area:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_area}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property City:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_city}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property State:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_state}</td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)">
                                                            Property Pincode:</td>
                                                        <td style="padding: 10px; border-bottom: 1px solid #ededed; color: #455056;">${body.property_pincode}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                    <p style="font-size:14px; color:#455056bd; line-height:18px; margin:0 0 0;">&copy; <strong>the4thwall.in</strong></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`
    const options = {
        from: "contact@the4thwall.in",
        to: 'the4thwall.inquiry@gmail.com',
        subject: body.subject,
        attachments: body.attachments,
        html: body.type == 'contact-us' ? message : inquiry,
    }

    await sendgrid.send(options)
    return { message: 'Email sent' }
})