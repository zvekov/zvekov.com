const svgConfig = [
  {
    use: "gridsome-plugin-svg",
    options: {
      // default options below
      goesBothWays: true,
      svgo: [
        {
          removeTitle: false,
        },
        // {
        //   prefixIds: {
        //     prefix: (_, {path}) => basename(path, '.svg'),
        //     delim: '-',
        //   },
        // },
        {
          removeDesc: false,
        },
        {
          removeViewBox: false,
        },
        {
          removeDimensions: true,
        },
        {
          sortAttrs: true,
        },
      ],
    },
  },
]
module.exports = svgConfig
