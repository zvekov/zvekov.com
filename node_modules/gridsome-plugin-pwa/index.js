"use strict";

var _path = _interopRequireDefault(require("path"));

var _manifest = require("./files/manifest.js");

var _serviceWorker = require("./files/service-worker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = message => {
  process.stdout.write(message);
};

function Plugin(api, options) {
  api.afterBuild(async ({
    context,
    config,
    queue
  }) => {
    log("Scaffolding PWA assets\n");
    log(` - ${options.manifestPath}..`);
    await (0, _manifest.createManifest)(context, config, queue, options);
    log("..done\n");
    log(` - ${options.serviceWorkerPath}..`);
    const response = await (0, _serviceWorker.createServiceWorker)(context, config, queue, options);
    if (response) log("..done\n");else log("..skipped\n");
  });
  const pathPrefix = api._app.config.pathPrefix ? api._app.config.pathPrefix + "/" : "/";
  api.setClientOptions({
    title: options.title,
    serviceWorkerPath: _path.default.join(pathPrefix, options.serviceWorkerPath),
    manifestPath: _path.default.join(pathPrefix, options.manifestPath),
    statusBarStyle: options.statusBarStyle,
    themeColor: options.themeColor,
    icon: options.icon,
    appleMaskIcon: options.appleMaskIcon,
    appleMaskIconColor: options.appleMaskIconColor,
    msTileColor: options.msTileColor,
    svgFavicon: options.svgFavicon
  });
}

Plugin.defaultOptions = () => ({
  title: "Gridsome",
  startUrl: "/",
  display: "standalone",
  statusBarStyle: "default",
  manifestPath: "manifest.json",
  disableServiceWorker: false,
  serviceWorkerPath: "service-worker.js",
  cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,gif",
  shortName: "Gridsome",
  themeColor: "#666600",
  backgroundColor: "#ffffff",
  icon: "",
  msTileImage: "",
  msTileColor: "#666600"
});

module.exports = Plugin;