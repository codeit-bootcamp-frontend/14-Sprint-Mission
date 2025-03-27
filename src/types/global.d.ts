declare module "*.module.css" {
  const content: { [key: string]: string };
  export = content;
}

declare module "*.png";
declare module "*.svg";
