import axios from 'axios'
import { ZUWINDA_TOKEN, ZUWINDA_INSTANCES_ID } from '../../utils/constants';

class Zuwinda {

    private static instance: Zuwinda;

    to: string = '';
    message: string | object = '';
    base_url = ''

    constructor() {
        this.base_url = 'https://api.zuwinda.com'
    }

    static get(): Zuwinda {
        if (!Zuwinda.instance) {
            Zuwinda.instance = new Zuwinda();
        }
        return Zuwinda.instance;
    }
    
    setTo(to: string) {
        this.to = to
        return this
    }

    setMessage(message: string | object) {
        this.message = message
        return this
    }

    async sendSMS() {
        await axios.post(`${this.base_url}/v1.2/message/sms/send-text`, {
            to: this.to,
            message: this.message
        }, {
            headers: {
                'x-access-key' : ZUWINDA_TOKEN,
            }
        })
    }

    async sendWhatsapp() {
        await axios.post(`${this.base_url}/v1.2/message/whatsapp/send-text`, {
            instances_id: ZUWINDA_INSTANCES_ID,
            to: this.to,
            message: this.message
        }, {
            headers: {
                'x-access-key' : ZUWINDA_TOKEN,
            }
        })
    }
}

const zuwinda = Zuwinda.get();

export { zuwinda as Zuwinda }