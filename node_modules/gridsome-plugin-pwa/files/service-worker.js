"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createServiceWorker = void 0;

var _path = _interopRequireDefault(require("path"));

var _workboxBuild = require("workbox-build");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appendToServiceWorker = async (config, options) => {
  const skipWaitingPath = _path.default.resolve(__dirname, '../utils/skip-waiting.js');

  const skipWaiting = await _fsExtra.default.readFile(skipWaitingPath, 'utf8');

  const outPath = _path.default.join(config.outputDir, options.serviceWorkerPath);

  await _fsExtra.default.writeFile(outPath, `\n${skipWaiting}`, {
    flag: 'a'
  });
};

const createServiceWorker = async (context, config, queue, options) => {
  if (options.disableServiceWorker) return false;

  const serviceWorkerPath = _path.default.join(config.outputDir, options.serviceWorkerPath);

  await (0, _workboxBuild.generateSW)({
    modifyURLPrefix: {
      '': config.pathPrefix + '/' || ''
    },
    swDest: serviceWorkerPath,
    globDirectory: config.outputDir,
    globPatterns: [`**\/*.{${options.cachedFileTypes}}`, "**\/*.json"],
    globIgnores: [options.serviceWorkerPath, '**\/*client.json', '**\/*server.json'],
    templatedURLs: queue.reduce((urls, page) => {
      const url = page.path.substring(1);

      const file = _path.default.relative(config.outputDir, page.htmlOutput);

      if (!options.disableTemplatedUrls) {
        // Don't add url to templatedURLs if it has dynamic routes #29
        if (url && url.indexOf('/:') === -1) urls[url] = file;
      }

      return urls;
    }, {})
  });
  await appendToServiceWorker(config, options);
  return true;
};

exports.createServiceWorker = createServiceWorker;