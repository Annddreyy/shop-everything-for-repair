import { emailAdapter } from '@/internal/infrastructure/email';
import { EmailDTORequest, EmailDTOResponse } from '../dto/email';

export const emailController = {
    async sendEmail(
        req: RequestWithBody<EmailDTORequest>,
        res: BaseResponse<EmailDTOResponse>,
    ) {
        const { accepted } = await emailAdapter.sendEmail(req.body);

        if (accepted) {
            res.json({
                status: 'success',
                data: {
                    status: 'ok',
                },
            });
            return;
        }
        
        res.json({
            status: 'error',
            messages: ['Не удалось отправить email'],
        });
    },
};
