export interface IDotEnv {
  NEXT_PUBLIC_SITE_NAME?: string;
  // NEXT_PUBLIC_BUILD_DATA?: IBuild;
}

export interface IBuild {
  MODE: string;
  VERSION: string;
  VERSION_DASH: string;
  VERSION_NUMBER: string;
  VERSION_HASH: string;
  BUILDTIME: string;
}
