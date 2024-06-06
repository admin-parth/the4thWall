import sendgrid from '@sendgrid/mail'
const config = useRuntimeConfig()

// sendgrid.setApiKey()
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const message = `<html>
        <head>
            <style>
                a {
                    color: unset;
                    text-decoration: unset;
                }
                .body {
                    padding: 100px;
                    background-color: #ED1E2620;
                }
                .content {
                    font-family: Helvetica;
                    background-color: #fff;
                    padding: 15px;
                    box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.3) !important;
                    border-radius: 5px;
                    width: fit-content;
                    margin: 0 auto;
                }
                h3 {
                    color: #ED1E26;
                    text-decoration: underline;
                    font-weight: 900;
                }
                ul {
                    list-style: none;
                    gap: 15px;
                }
                button {
                    width: 100%;
                    background: linear-gradient(to bottom right, #1967d2, #222293);
                    border: 0;
                    border-radius: 12px;
                    color: #FFFFFF;
                    cursor: pointer;
                    display: inline-block;
                    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 2.5;
                    outline: transparent;
                    padding: 0 1rem;
                    text-align: center;
                    text-decoration: none;
                    transition: box-shadow .2s ease-in-out;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
                    white-space: nowrap;
                }
                button:not([disabled]):focus {
                    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.1rem -.1rem .1rem rgba(25, 103, 210, 0.3), .1rem .1rem .1rem rgba(34, 34, 147, 0.3);
                }
                button:not([disabled]):hover {
                    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.1rem -.1rem .1rem rgba(25, 103, 210, 0.3), .1rem .1rem .1rem rgba(34, 34, 147, 0.3);
                }
            </style>
        </head>
        <body>
            <div class="body">
                <div class="content" style="box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.3);">
                    <h3>New Message Details:</h3>
                    <ul>
                        <li><strong>Name: </strong> ${ body.name } </li>
                        <li><strong>Email: </strong> ${ body.email }</li>
                        <li><strong>Phone number: </strong> ${ body.phonenumber }</li>
                        <li><strong>message: </strong> ${ body.message }</li>
                    </ul>
                </div>
        </div>
        </body>
    </html>`
    const inquiry = `<html>
    <head>
        <style>
            a {
                color: unset;
                text-decoration: unset;
            }
            .body {
                padding: 100px;
                background-color: #ED1E2620;
            }
            .content {
                font-family: Helvetica;
                background-color: #fff;
                padding: 15px;
                box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.3) !important;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
            }
            h3 {
                color: #ED1E26;
                text-decoration: underline;
                font-weight: 900;
            }
            ul {
                list-style: none;
                gap: 15px;
            }
            button {
                width: 100%;
                background: linear-gradient(to bottom right, #1967d2, #222293);
                border: 0;
                border-radius: 12px;
                color: #FFFFFF;
                cursor: pointer;
                display: inline-block;
                font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                font-size: 16px;
                font-weight: 500;
                line-height: 2.5;
                outline: transparent;
                padding: 0 1rem;
                text-align: center;
                text-decoration: none;
                transition: box-shadow .2s ease-in-out;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                white-space: nowrap;
            }
            button:not([disabled]):focus {
                box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.1rem -.1rem .1rem rgba(25, 103, 210, 0.3), .1rem .1rem .1rem rgba(34, 34, 147, 0.3);
            }
            button:not([disabled]):hover {
                box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.1rem -.1rem .1rem rgba(25, 103, 210, 0.3), .1rem .1rem .1rem rgba(34, 34, 147, 0.3);
            }
        </style>
    </head>
    <body>
        <div class="body">
            <div class="content" style="box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.3);">
                <h3>New Inquiry Details:</h3>
                <ul>
                    <li><strong>Name: </strong> ${ body.name } </li>
                    <li><strong>Email: </strong> ${ body.email }</li>
                    <li><strong>Phone number: </strong> ${ body.phone }</li>
                    <li><strong>Property Name: </strong> ${ body.property_name }</li>
                    <li><strong>Property Type: </strong> ${ body.property_type }</li>
                    <li><strong>Property BHK: </strong> ${ body.property_bhk }</li>
                    <li><strong>Property Area: </strong> ${ body.property_area }</li>
                    <li><strong>Property City: </strong> ${ body.property_city }</li>
                    <li><strong>Property State: </strong> ${ body.property_state }</li>
                    <li><strong>Property Pincode: </strong> ${ body.property_pincode }</li>
                </ul>
            </div>
    </div>
    </body>
    </html>`
    const options = {
        from: "support@globaluphire.com",
        to: 'parthchauhan05@gmail.com',
        subject: body.subject,
        attachments: body.attachments,
        html: body.type == 'contact-us' ? message : inquiry,
    }
    
    await sendgrid.send(options)
    return { message: 'Email sent' }
})