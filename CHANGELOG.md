# Changelog

## [4.0.0] - 2018-04-09: Webpack 4

### Added
- Updated to webpack 4. There are no breaking changes if you didn't use a `create-frontend.conf.js` file to modify the webpack config directly.

    If you did, then some things changed: notably, there is no longer an extract-text-plugin, instead, we are using mini-css-extract-plugin. Custom plugins also need to be updated to use the new webpack 4 API.

## [3.1.0] - 2018-03-22
### Added
- Added `mergeDevServerConfig` property to the create-frontend.conf.js configuration file. This can be used to customize the webpack dev server.

## [3.0.1] - 2018-03-21
### Fixed
- Fixed issue where static files were not being served properly in the dev server: https://github.com/optimistdigital/create-frontend/pull/1

## [3.0.0] - 2018-01-05
### Fixed
- Fixed html plugin not maintaining nested directory structure when building for production

### Changed
- Copy plugin now has to be opted into manually (`copyPath` in options). This fixes an error that occured when the user didn't have a `client/copy` directory. This error is now acceptable because the user opted in manually and has to be notified about broken configuration. 
- `appendRules` has been renamed to `prependRules`. "Append" was misleading, because the webpack rules are actually added to the beginning of the `oneOf` array, and will take precendence over the default rules. 

### Upgrading
- If you used create-frontend.conf.js file with `appendRules`, change it to `prependRules` (logic is same)
- If you used the default copy path, add `"copyPath": "client/copy"` to your create-frontend configuration in package.json
- If you relied on nested .html files being flattened into the public directory, they must now be flat in the source as well

## [2.4.0] - 2017-01-31
### Added
- Files from `client/copy` are now automatically copied into the public directory. Path is customizable in settings

## [2.3.0] - 2018-01-31
### Added
- Added more data to the `opts` object that is passed to the mergeConfig/appendRules/appendPlugins callbacks.
It now additionally contains `paths` and `config` objects

## [2.2.2] - 2018-01-09
### Added
- Added globals into eslint config, which are injected into the app by webpack : `__DEVELOPMENT__`, `__PRODUCTION__`, `__DEBUG__`

## [2.2.1] - 2018-01-08
### Fixed
- Fixed React transforms that were throwing errors during development due to missing dependencies

## [2.2.0] - 2018-01-05
### Added
- html-loader for html-webpack-plugin. This resolves the issue where <img src="../images/filename.ext"> wasn't properly
copying the assets over. PS! Absolute URL's here still don't work. 

## [2.1.0] - 2018-01-04
### Added
- html-webpack-plugin is now built-in. Customizable through options (more info in readme)

## [2.0.0] - 2018-01-02
### Added
- Added .vue and .jsx to resolve.extensions by default. They can now be imported in js without adding the extension

### Changed
- Refactored `create-frontend.conf.js` API. getPlugins and getRules have been replaced with the following (more info in readme):
    - `mergeConfig` - allows user to override any configuration
    - `appendRules` and `appendPlugins` - same as old getPlugins/getRules. Allows user to add new functionality without replacing the entire rules/plugins array
