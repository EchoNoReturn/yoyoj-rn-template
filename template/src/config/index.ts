import { ENVType } from './types';
import { default as devConfig } from './dev';
import { default as testConfig } from './test';
import { default as prodConfig } from './prod';

// 如果需要使用 local 配置，取消下面的注释并设置 __ENV__ 为 'local'
// 然后创建 src/config/local.ts 文件。此文件已经添加到 gitignore 中，不会被提交到版本库。
// 这样可以方便地在本地进行配置而不影响其他环境的配置。
// import { default as localConfig } from './local';

const __ENV__: ENVType = 'development';

const _config = (function () {
  switch (__ENV__ as ENVType) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    case 'production':
      return prodConfig;
    default:
    // case 'local':
    //   return localConfig;
    // default:
      return prodConfig;
  }
})();

export default _config;
