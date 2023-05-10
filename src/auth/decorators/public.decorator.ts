import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, metadataValue: true)
/*  (...args: string[]) => SetMetadata('public', args); */
