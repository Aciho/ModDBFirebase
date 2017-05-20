export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';

  this.get('/dom-mods', function() {
    return {
      data: [
        {
          id: 1,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation',
            subtitle: 'Source of the mods',
            age: 'EA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 0.9,
            ratings: [{id: 1, rating: 3}, {id: 52, rating: 4}]
          }
        },
        {
          id: 2,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation',
            subtitle: 'Power of the mods',
            age: 'MA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 0.1,
            ratings: [{id: 1, rating: 3}, {id: 22, rating: 5}, {id: 662, rating: 5}]
          }
        },
        {
          id: 3,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation',
            subtitle: 'Death of the mods',
            age: 'LA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 2.2,
            ratings: [{id: 1, rating: 3}, {id: 52, rating: 4}]
          }
        },
        {
          id: 4,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation2',
            subtitle: 'Source of the mods2',
            age: 'EA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 0.9,
            ratings: [{id: 1, rating: 3}, {id: 52, rating: 4}]
          }
        },
        {
          id: 5,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation2',
            subtitle: 'Power of the mods2',
            age: 'MA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 0.1,
            ratings: [{id: 1, rating: 3}, {id: 22, rating: 5}, {id: 662, rating: 5}]
          }
        },
        {
          id: 6,
          type: 'dom-mod',
          attributes: {
            title: 'Moddonation2',
            subtitle: 'Death of the mods2',
            age: 'LA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula lobortis libero, nec congue eros ultricies dapibus. Fusce vel faucibus felis. Fusce sagittis fermentum mauris sed eleifend. Donec finibus magna eu ante consectetur cursus. Aliquam erat volutpat. Donec molestie quam magna, in eleifend est sodales et. Pellentesque varius ipsum ac imperdiet euismod. Sed a lacus varius, pulvinar augue a, mollis justo. Donec purus lectus, ornare in tortor auctor, bibendum fringilla massa. Donec tristique diam quis scelerisque tempus. Morbi iaculis ante odio, sit amet vulputate nisl viverra in.',
            version: 2.2,
            ratings: [{id: 1, rating: 3}, {id: 52, rating: 4}]
          }
        }
      ]
    }
  })
}
