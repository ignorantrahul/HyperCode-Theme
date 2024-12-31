import { IconDefinitions } from '../../types/icon';

// Default Icons
const defaultIcons: IconDefinitions = {
    'default-file': { iconPath: './icons/file.svg' },
    'default-folder': { iconPath: './icons/folder.svg' },
    'default-folder-expanded': { iconPath: './icons/folder.svg' },
    'default-root-folder': { iconPath: './icons/folder.svg' },
    'default-root-folder-expanded': { iconPath: './icons/folder.svg' }
};

// Programming Language Icons
const languageIcons: IconDefinitions = {
    'source-ts': { iconPath: './icons/typescript.svg' },
    'source-js': { iconPath: './icons/javascript.svg' },
    'source-jsx': { iconPath: './icons/react.svg' },
    'source-tsx': { iconPath: './icons/react_ts.svg' },
    'source-vue': { iconPath: './icons/vue.svg' },
    'source-python': { iconPath: './icons/python.svg' },
    'source-java': { iconPath: './icons/java.svg' },
    'source-go': { iconPath: './icons/go.svg' },
    'source-rust': { iconPath: './icons/rust.svg' },
    'source-cpp': { iconPath: './icons/cpp.svg' },
    'source-c': { iconPath: './icons/c.svg' },
    'source-swift': { iconPath: './icons/swift.svg' },
    'source-kotlin': { iconPath: './icons/kotlin.svg' },
    'source-php': { iconPath: './icons/php.svg' },
    'source-ruby': { iconPath: './icons/ruby.svg' }
};

// Web Technology Icons
const webIcons: IconDefinitions = {
    'html': { iconPath: './icons/html.svg' },
    'css': { iconPath: './icons/css.svg' },
    'scss': { iconPath: './icons/scss.svg' },
    'less': { iconPath: './icons/less.svg' },
    'stylus': { iconPath: './icons/stylus.svg' },
    'svg': { iconPath: './icons/svg.svg' }
};

// Configuration File Icons
const configIcons: IconDefinitions = {
    'settings-json': { iconPath: './icons/settings.svg' },
    'settings-yaml': { iconPath: './icons/yaml.svg' },
    'settings-toml': { iconPath: './icons/toml.svg' },
    'settings-ini': { iconPath: './icons/ini.svg' },
    'settings-env': { iconPath: './icons/env.svg' }
};

// Version Control Icons
const versionControlIcons: IconDefinitions = {
    'git-file': { iconPath: './icons/git.svg' },
    'git-ignore': { iconPath: './icons/git.svg' },
    'git-config': { iconPath: './icons/git.svg' }
};

// Package Manager Icons
const packageManagerIcons: IconDefinitions = {
    'package-json': { iconPath: './icons/npm.svg' },
    'package-lock': { iconPath: './icons/npm.svg' },
    'yarn-lock': { iconPath: './icons/yarn.svg' },
    'pnpm-lock': { iconPath: './icons/pnpm.svg' }
};

// Build Tool Icons
const buildToolIcons: IconDefinitions = {
    'webpack': { iconPath: './icons/webpack.svg' },
    'rollup': { iconPath: './icons/rollup.svg' },
    'vite': { iconPath: './icons/vite.svg' },
    'babel': { iconPath: './icons/babel.svg' },
    'tsconfig': { iconPath: './icons/tsconfig.svg' }
};

// Testing Icons
const testingIcons: IconDefinitions = {
    'test-js': { iconPath: './icons/test.svg' },
    'test-ts': { iconPath: './icons/test_ts.svg' },
    'test-jsx': { iconPath: './icons/test_jsx.svg' },
    'jest': { iconPath: './icons/jest.svg' },
    'cypress': { iconPath: './icons/cypress.svg' }
};

// Folder Icons
const folderIcons: IconDefinitions = {
    'folder-src': { iconPath: './icons/folder_src.svg' },
    'folder-src-expanded': { iconPath: './icons/folder_src.svg' },
    'folder-dist': { iconPath: './icons/folder_dist.svg' },
    'folder-dist-expanded': { iconPath: './icons/folder_dist.svg' },
    'folder-test': { iconPath: './icons/folder_test.svg' },
    'folder-test-expanded': { iconPath: './icons/folder_test.svg' },
    'folder-node': { iconPath: './icons/folder_node.svg' },
    'folder-node-expanded': { iconPath: './icons/folder_node.svg' },
    'folder-public': { iconPath: './icons/folder_public.svg' },
    'folder-public-expanded': { iconPath: './icons/folder_public.svg' },
    'folder-assets': { iconPath: './icons/folder_assets.svg' },
    'folder-assets-expanded': { iconPath: './icons/folder_assets.svg' },
    'folder-components': { iconPath: './icons/folder_components.svg' },
    'folder-components-expanded': { iconPath: './icons/folder_components.svg' },
    'folder-utils': { iconPath: './icons/folder_util.svg' },
    'folder-utils-expanded': { iconPath: './icons/folder_util.svg' },
    'folder-docs': { iconPath: './icons/folder_docs.svg' },
    'folder-docs-expanded': { iconPath: './icons/folder_docs.svg' }
};

// Combine all icon definitions
export const iconDefinitions: IconDefinitions = {
    ...defaultIcons,
    ...languageIcons,
    ...webIcons,
    ...configIcons,
    ...versionControlIcons,
    ...packageManagerIcons,
    ...buildToolIcons,
    ...testingIcons,
    ...folderIcons
}; 