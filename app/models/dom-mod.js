import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subtitle: DS.attr(),
  image: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  version: DS.attr(),
  ratings: DS.attr()
});
