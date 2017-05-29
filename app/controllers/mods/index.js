import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type'],
  type: null,
  nameSearch: '',

  filteredMods: Ember.computed('type', 'model', function() {
    let type = this.get('type');
    // let nameSearch = this.get('nameSearch');
    let mods = this.get('model');

    if (type) {
      mods = mods.filterBy('type', type);
    }
    // if (nameSearch) {
    //   mods = mods.filterBy('name', nameSearch);
    // }

    return mods;
  }),

  // actions: {
  //   filterMods(param) {
  //     this.nameSearch = param;
  //     let type = this.get('type');
  //
  //     if (type) {
  //       if (param !== '') {
  //         return this.get('store').query('dom-mod', { name: param, type: type });
  //       } else {
  //         return this.get('store').query('dom-mod', { type: type });
  //       }
  //     } else {
  //       if (param !== '') {
  //         return this.get('store').query('dom-mod', { name: param });
  //       } else {
  //         return this.get('store').findAll('dom-mod');
  //       }
  //     }
  //   }
  // }
});
