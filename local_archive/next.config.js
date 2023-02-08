/**
 * This is a configuration file for the Next.js framework.
 *
 */

const nextConfig = {
    // The reactStrictMode property is set to true which enables Strict Mode in all components.
    reactStrictMode : true, webpack : ( config, { isServer } ) => {
        const prefix = config.assetPrefix ?? config.basePath ?? "";
        // The webpack function configures the webpack compiler to handle the loading of files with the .mp4 extension.
        config.module.rules.push( {
                                      test : /\.mp4$/, use : [ {
                // The publicPath and outputPath options are set to the specified prefix and the name option is set to the name, hash, and
                // extension of the file.
                loader : "file-loader", options : {
                    publicPath : `${ prefix }/_next/static/media/`,
                    outputPath : `${ isServer ? "../" : "" }static/media/`,
                    name       : "[name].[hash].[ext]"
                }
            } ]
                                  } );
        return config;
    }, paths        : {
        "contentlayer/generated" : [ "./.contentlayer/generated" ]
    },
    
    // The incremental and experimental properties are both set to true.
    // The incremental property enables incremental compilation which speeds up build times while the experimental allows the appDir
    // feature to be used.
    incremental : true, experimental : {
        appDir : true,
    }, compiler : {
        // The compiler property is set to true which enables Styled Components to be used.
        styledComponents : true,
    },
};

module.exports = nextConfig;
