export interface IDotEnv {
  // PUBLIC_URL: string;
  //
  NEXT_PUBLIC_APP_NAME: string;
}

export interface IBuild {
  MODE: string;
  VERSION: string;
  VERSION_DASH: string;
  VERSION_NUMBER: string;
  VERSION_HASH: string;
  BUILDTIME: string;
}
