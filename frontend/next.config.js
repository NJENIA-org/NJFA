// module.exports = {
//   trailingSlash: true,
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       oneOf: [
//         {
//           resourceQuery: /@mui\/markdown/,
//           use: require.resolve('@mui/markdown/loader'),
//         },
//         {
//           // used in some /getting-started/templates
//           type: 'asset/source',
//         },
//       ],
//     });
//     return config;
//   }
// };