import Component from '../components/collections';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

import { Collection } from '/imports/infrastructure/collections/collections';

export const composer = ({ context /*, param */ }, onData) => {
  const collectionHandler = Meteor.subscribe('collection.template');

  const subHandlers = [
    collectionHandler,
  ];

  Tracker.autorun(() => {
    const subHandlersReady = _.every(subHandlers, (handle) => handle.ready());

    if (subHandlersReady) {
      const collectionList = Collection.find().fetch();
      onData(null, {
        collectionList,
      });
    }
  });
};

export const depsMapper = (context, actions) => ({
  example: actions.example.example,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
