const amqplib = require('amqplib');

module.exports = async (message) => {
    try {
        console.time('publisher');
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
        await channel.sendToQueue('test', Buffer.from(JSON.stringify(message)), { persistent: true });
        // await connect.close();
        console.timeEnd('publisher');
        // console.log('Message produced: ', message);
    } catch (error) {
        console.log(error)
    }
}
