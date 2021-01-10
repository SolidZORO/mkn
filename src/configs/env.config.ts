import { IDotEnv } from '@/interfaces';

// can't pass { ...env } parsing, MUST correspond to 1 to 1
export const envConfig: IDotEnv = {
  NEXT_PUBLIC_SITE_NAME: (process.env as IDotEnv).NEXT_PUBLIC_SITE_NAME,
};
