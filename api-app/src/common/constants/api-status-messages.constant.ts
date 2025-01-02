import { ApiStatusEnum } from '../enums/api-status.enum';

export const ApiStatusMessages: { [key in ApiStatusEnum]: string } = {
  [ApiStatusEnum.SUCCESS]:
    'Success! Your request has safely landed back to Earth.',
  [ApiStatusEnum.CREATED]: 'New entity launched into the cosmos.',
  [ApiStatusEnum.NO_CONTENT]:
    "Mission complete, but there's nothing left to transmit. Silence in the cosmic void.",
  [ApiStatusEnum.BAD_REQUEST]:
    "Your request veered off course and couldn't escape Earth's gravity!",
  [ApiStatusEnum.UNAUTHORIZED]:
    "Your credentials don't pass the cosmic gatekeeper!",
  [ApiStatusEnum.FORBIDDEN]:
    'Your request violates the Sacred Timeline and cannot be fulfilled!',
  [ApiStatusEnum.NOT_FOUND]:
    "The data you're seeking is beyond the bounds of space!",
  [ApiStatusEnum.CONFLICT]:
    'Collision in the cosmic pathways! Your request encountered a space-time conflict.',
  [ApiStatusEnum.UNPROCESSABLE_ENTITY]:
    'Data anomaly detected. Unable to process your request in this dimension!',
  [ApiStatusEnum.INTERNAL_SERVER_ERROR]:
    'Galactic disruption. An unexpected cosmic event occurred!',
};
