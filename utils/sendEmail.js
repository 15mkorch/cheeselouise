import fetch from 'node-fetch'

const SENDGRID_API_KEY = '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'
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ email, f_name, l_name, number, message }) => {
    try{
      await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: "chosenbird1@gmail.com",
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'chosenbird1@gmail.com',
            name: 'Contact Form'
          },
          content: [
            {
              type: 'text/html',
              value: `Message from <b>${f_name} ${l_name}</b>:<br><br>${message}<br><br>Email Address: ${email}<br>Phone Number: ${number}`
            }
          ]
        })
      });
    }catch (e){
      console.log(e);
    }
}

export { sendEmail };