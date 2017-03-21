function Data() {
	this.data = {}
}

Data.prototype = {
	set: function(key, bindClass, data) {
		var bindData = []

		data.forEach(function(element) {
			bindData.push(bindClass.create(element))
		})

		this.data[key] = bindData
	},

	get: function(key, data) {
		return (key in this.data) ? this.data[key] : null
	}
}

window.Data = new Data()