Backbone.Collection.prototype._addWithIdCheck = function(model, options) {
  if (model === undefined) return false;

  if ((!model || model.id === undefined || this.get(model.id) === undefined) || (options && options.merge)) {
    this._addWithoutIdCheck(model, options);
  }
};

Backbone.Collection.prototype._addWithoutIdCheck = Backbone.Collection.prototype.add;
Backbone.Collection.prototype.add = Backbone.Collection.prototype._addWithIdCheck;
