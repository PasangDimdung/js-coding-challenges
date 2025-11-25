function mergeConfig(defaultConfig, userConfig){
    return {...defaultConfig, ...userConfig};
}

config1 = { dark: false, lang: "en"};
config2 = { dark: true };

console.log(mergeConfig(config1, config2));



