const amqplib = require('amqplib');

module.exports = async (hannleMessage) => {
    try {
        const connect = await amqplib.connect({
            protocol: 'amqp',
            hostname: 'localhost',
            port: 32775,
            username: 'guest',
            password: 'guest',
            locale: 'en_US',
            frameMax: 0,
            heartbeat: 0,
            vhost: '/',
        })
        
        const channel = await connect.createChannel();
        
        await channel.assertQueue('test', { durable: true });
        await channel.consume('test', hannleMessage(channel), { noAck: false });
    } catch (error) {
        console.log(error)
    }
}
