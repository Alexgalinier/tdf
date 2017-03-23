function AbstractModel(data) {
	for (var key in data) {
		this[key] = data[key]
	}
}

// Static builder
AbstractModel.create = function (data) {
	return new this(data)
}