export interface AnyCardContent {
  header?: {
    title: string;
    subtitle?: string;
  };
  image?: {};
  text: string;
  actions?: [
    {
      label: string;
      action: { type: string; payload?: any };
    }
  ];
}
