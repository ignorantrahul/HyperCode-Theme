// TypeScript Files
export const typescriptExtensions = {
    'ts': 'source-ts',
    'tsx': 'source-tsx',
    'mts': 'source-ts',
    'cts': 'source-ts',
    'd.ts': 'source-ts'
};

// JavaScript Files
export const javascriptExtensions = {
    'js': 'source-js',
    'jsx': 'source-jsx',
    'mjs': 'source-js',
    'cjs': 'source-js'
};

// Web Files
export const webExtensions = {
    'html': 'html',
    'htm': 'html',
    'xhtml': 'html',
    'css': 'css',
    'scss': 'scss',
    'sass': 'scss',
    'less': 'less',
    'styl': 'stylus',
    'svg': 'svg',
    'vue': 'source-vue'
};

// Python Files
export const pythonExtensions = {
    'py': 'source-python',
    'pyw': 'source-python',
    'ipynb': 'source-python'
};

// Java Files
export const javaExtensions = {
    'java': 'source-java',
    'jar': 'source-java',
    'class': 'source-java'
};

// Go Files
export const goExtensions = {
    'go': 'source-go'
};

// Rust Files
export const rustExtensions = {
    'rs': 'source-rust',
    'rlib': 'source-rust'
};

// C/C++ Files
export const cppExtensions = {
    'c': 'source-c',
    'h': 'source-c',
    'cpp': 'source-cpp',
    'hpp': 'source-cpp',
    'cc': 'source-cpp',
    'cxx': 'source-cpp'
};

// Swift Files
export const swiftExtensions = {
    'swift': 'source-swift'
};

// Kotlin Files
export const kotlinExtensions = {
    'kt': 'source-kotlin',
    'kts': 'source-kotlin'
};

// PHP Files
export const phpExtensions = {
    'php': 'source-php'
};

// Ruby Files
export const rubyExtensions = {
    'rb': 'source-ruby',
    'erb': 'source-ruby'
};

// Config Files
export const configExtensions = {
    'json': 'settings-json',
    'yaml': 'settings-yaml',
    'yml': 'settings-yaml',
    'toml': 'settings-toml',
    'ini': 'settings-ini',
    'env': 'settings-env',
    'env.local': 'settings-env',
    'env.development': 'settings-env',
    'env.production': 'settings-env'
};

// Combine all file extensions
export const fileExtensions = {
    ...typescriptExtensions,
    ...javascriptExtensions,
    ...webExtensions,
    ...pythonExtensions,
    ...javaExtensions,
    ...goExtensions,
    ...rustExtensions,
    ...cppExtensions,
    ...swiftExtensions,
    ...kotlinExtensions,
    ...phpExtensions,
    ...rubyExtensions,
    ...configExtensions
};

// Git Files
export const gitFiles = {
    '.gitignore': 'git-ignore',
    '.gitattributes': 'git-file',
    '.gitmodules': 'git-file',
    '.gitconfig': 'git-config'
};

// Package Files
export const packageFiles = {
    'package.json': 'package-json',
    'package-lock.json': 'package-lock',
    'yarn.lock': 'yarn-lock',
    'pnpm-lock.yaml': 'pnpm-lock'
};

// Config Files
export const configFiles = {
    'webpack.config.js': 'webpack',
    'webpack.config.ts': 'webpack',
    'rollup.config.js': 'rollup',
    'rollup.config.ts': 'rollup',
    'vite.config.js': 'vite',
    'vite.config.ts': 'vite',
    '.babelrc': 'babel',
    'babel.config.js': 'babel',
    'tsconfig.json': 'tsconfig',
    'jest.config.js': 'jest',
    'jest.config.ts': 'jest',
    'cypress.config.js': 'cypress',
    'cypress.config.ts': 'cypress'
};

// Combine all file names
export const fileNames = {
    ...gitFiles,
    ...packageFiles,
    ...configFiles
}; 