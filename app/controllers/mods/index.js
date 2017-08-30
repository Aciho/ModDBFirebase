import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type'],
  type: null,
  nameSearch: '',
  uploading: false,

  filteredMods: Ember.computed('type', 'model', function() {
    let type = this.get('type');
    let mods = this.get('model');

    if (type) {
      mods = mods.filterBy('type', type);
    }

    return mods;
  }),
});
