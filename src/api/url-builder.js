module.exports = (board, thread, useHttps = false) => {
	let baseUrl

	if (useHttps) {
		baseUrl = 'https://2ch.hk'
	} else {
		baseUrl = 'http://2ch.hk'
	}

	if (board && !thread) {
		baseUrl += `/${board}/catalog.json`
	}
	else if (board && thread) {
		baseUrl += `/${board}/thread/${thread}.json`
	}

	return baseUrl
}
