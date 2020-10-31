"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createManifest = void 0;

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _sharp = _interopRequireDefault(require("sharp"));

var _rename = _interopRequireDefault(require("rename"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createManifest = async (context, config, queue, options) => {
  const manifestDest = _path.default.join(config.outputDir, options.manifestPath);

  const iconsDir = _path.default.join(config.outputDir, 'assets/static/');

  const iconName = options.icon.split('/').slice(-1)[0]; // Generate all size images from options.icon

  const sizes = [512, 384, 192, 180, 152, 144, 128, 120, 96, 72, 48, 16];

  const iconDir = _path.default.relative(config.outputDir, iconsDir);

  const icons = [];
  await Promise.all(sizes.map(size => {
    const sizes = `${size}x${size}`;

    const imagePath = _path.default.join(iconsDir, (0, _rename.default)(iconName, {
      suffix: `-${sizes}`
    }));

    const src = _path.default.relative(config.outputDir, imagePath);

    const type = 'image/' + iconName.split('.').slice(-1)[0];
    icons.push({
      src,
      type,
      sizes,
      purpose: options.maskableIcon ? 'maskable any' : 'any'
    });
    return (0, _sharp.default)(options.icon).resize(size, size).toFile(imagePath);
  }));
  await _fsExtra.default.outputFile(manifestDest, JSON.stringify({
    name: options.title,
    short_name: options.shortName,
    description: options.description,
    lang: options.lang,
    dir: options.dir,
    categories: options.categories,
    start_url: options.startUrl,
    display: options.display,
    theme_color: options.themeColor,
    background_color: options.backgroundColor,
    screenshots: options.screenshots,
    scope: options.scope,
    gcm_sender_id: options.gcmSenderId,
    icons
  }, null, 2));
};

exports.createManifest = createManifest;