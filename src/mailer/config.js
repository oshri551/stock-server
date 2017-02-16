const config = {
    from: 'yourGmail@gmail.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "gmailAccount",
        pass: "password"
    }
}

export default config;