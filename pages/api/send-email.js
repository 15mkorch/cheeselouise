import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
    const { email, f_name, l_name, number, message } = req.body;
    await sendEmail({ email, f_name, l_name, number, message });

    return res.status(200).end();
}
