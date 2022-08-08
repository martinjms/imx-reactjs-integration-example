module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"process": require.resolve("process/browser"), 
      }) 
   config.resolve.fallback = fallback; 
   return config; 
}