import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration du transporteur de messagerie
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'support@code-v.fr',
        pass: ''
      }
    });

    // Options de l'e-mail
    const mailOptions = {
      from: email,
      to: 'support@code-v.fr',
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
      } else {
        console.log('E-mail envoyé: ' + info.response);
        res.status(200).send('Votre message a été envoyé avec succès.');
      }
    });
  } else {
    res.status(405).send('Méthode non autorisée.');
  }
}
