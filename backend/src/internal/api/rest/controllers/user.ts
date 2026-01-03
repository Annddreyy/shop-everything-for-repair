import { jwtService } from '@/internal/pkg/jwt';
import { userService } from '@/internal/domain/user';
import {
    ConfirmEmailDTORequest,
    UserDTORequest,
    UserLoginDTORequest,
    ConfirmEmailDTOResponse,
    UserLoginDTOResponse,
} from '../dto/user';

export const userController = {
    async registration(
        req: RequestWithBody<UserDTORequest>,
        res: BaseResponse<WithId>,
    ) {
        const id = await userService.createUser(req.body);

        if (!id) {
            res.json({
                status: 'error',
                messages: ['Не удалось создать нового пользователя'],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async confirmEmail (
        req: RequestWithBody<ConfirmEmailDTORequest>,
        res: BaseResponse<ConfirmEmailDTOResponse>,
    ) {
        const isConfirmed = await userService.confirmEmail(req.body);

        if (isConfirmed) {
            res.json({
                status: 'success',
                data: { isConfirmed },
            });
            return;
        }

        res.json({
            status: 'error',
            messages: ['Не удалось пройти подтверждение почты'],
        });
    },

    async login (
        req: RequestWithBody<UserLoginDTORequest>,
        res: BaseResponse<UserLoginDTOResponse>,
    ) {
        const user = await userService.checkCredentials(req.body);

        if (user) {
            const token = await jwtService.createJWT(user);
            res.json({
                status: 'success',
                data: { token },
            });
            return;
        }

        res.json({
            status: 'error',
            messages: ['Пользователь не найден!'],
        });
    },
};
