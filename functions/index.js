const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
})

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
  const options = {
    from: `MrDonald's <${email}>`,
    to: data.email,
    subject: 'Вам заказ',
    html: `
      <div>
      <h2>Добрый день ${data.nameClient}</h2>
      <h3>Ваш заказ:</h3>
      <ul>
        ${data.order.map(({itemName, count, price }) => (
          `<li>${itemName} - ${count} ${price * count} руб.</li>`
        ))}
        <p>Итого ${data.order.reduce((sum, item) => sum + (item.price + item.count), 0)}</p>
      </ul>  
             
      </div>
    `
  }

  transporter.sendMail(options)
}

exports.sendUserEMail = functions.database.ref('orders/{pushID}').onCreate(order => console.log(order.val()));
