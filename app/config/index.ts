import BaseConfig from "./config.base";
import { DevConfig } from "./config.dev";
import { ProdConfig } from "./config.prod";

let ExtraConfig = ProdConfig;

if (__DEV__) {
  ExtraConfig = DevConfig;
}

const Config = { ...BaseConfig, ...ExtraConfig };

export default Config;
