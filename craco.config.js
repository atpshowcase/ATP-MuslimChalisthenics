const WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
  webpack: {
    plugins: [
      new WebpackObfuscator(
        {
          compact: true,
          rotateStringArray: true,
          stringArray: true,
          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
        },
        []
      ),
    ],
  },
};
