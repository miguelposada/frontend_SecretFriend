// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FriendPairs, Users } = initSchema(schema);

export {
  FriendPairs,
  Users
};