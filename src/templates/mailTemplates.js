
module.exports = ({ to, name, template, empresa }) => {
    const from = process.env.MAILFROM
    const templates = {
        "contratacao": {
            subject: 'Sending with SendGrid is Fun',
            html: `Olá, ${name} 
            Estamos aqui em nome de toda a ${empresa} para parabenizar você! 
            Agora você faz parte do nosso time, que nesse sua nova jornada tenha muito conhecimento e realizações. 
            Obrigado(a) por estar conosco.`
        },
        "bemvindo": {
            subject: 'Sending with SendGrid is Fun',
            html: '<h1>hello bemvindo </br>'
        },
        "aniversario": {
            subject: 'Sending with SendGrid is Fun',
            html: '<h1>hello aniversario</br>'
        },
    }

    mensage = templates[template]
    mensage.to = to
    mensage.from = from
    return mensage
}