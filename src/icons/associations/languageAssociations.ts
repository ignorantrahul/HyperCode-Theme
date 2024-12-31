// Programming Languages
export const programmingLanguages = {
    typescript: 'source-ts',
    javascript: 'source-js',
    javascriptreact: 'source-jsx',
    typescriptreact: 'source-tsx',
    vue: 'source-vue',
    python: 'source-python',
    java: 'source-java',
    go: 'source-go',
    rust: 'source-rust',
    cpp: 'source-cpp',
    c: 'source-c',
    swift: 'source-swift',
    kotlin: 'source-kotlin',
    php: 'source-php',
    ruby: 'source-ruby'
};

// Web Technologies
export const webLanguages = {
    html: 'html',
    css: 'css',
    scss: 'scss',
    less: 'less',
    stylus: 'stylus'
};

// Configuration Languages
export const configLanguages = {
    json: 'settings-json',
    yaml: 'settings-yaml',
    toml: 'settings-toml'
};

// Combine all language IDs
export const languageIds = {
    ...programmingLanguages,
    ...webLanguages,
    ...configLanguages
}; 