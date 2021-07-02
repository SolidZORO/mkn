export interface IRouteItem {
  name: string;
  path: string;
  //
  when?: 'forward' | 'back' | 'always'; // default 'forward'
  auth?: boolean;
  exact?: boolean;
  icon?: any;
  children?: IRouteItem[];
  bodyClassName?: string;
  alwaysDarkMode?: boolean;
  LazyComp?: any;
}

export interface IRouteProps extends IRouteItem {
  // name?: string;
}
