import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerFriendPairs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendPairs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly loggedUserId?: string | null;
  readonly friend?: string | null;
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendPairsUsersId?: string | null;
}

type LazyFriendPairs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendPairs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly loggedUserId?: string | null;
  readonly friend?: string | null;
  readonly Users: AsyncItem<Users | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendPairsUsersId?: string | null;
}

export declare type FriendPairs = LazyLoading extends LazyLoadingDisabled ? EagerFriendPairs : LazyFriendPairs

export declare const FriendPairs: (new (init: ModelInit<FriendPairs>) => FriendPairs) & {
  copyOf(source: FriendPairs, mutator: (draft: MutableModel<FriendPairs>) => MutableModel<FriendPairs> | void): FriendPairs;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}