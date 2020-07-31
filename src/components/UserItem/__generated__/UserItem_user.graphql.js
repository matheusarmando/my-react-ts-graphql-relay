/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserItem_user$ref: FragmentReference;
declare export opaque type UserItem_user$fragmentType: UserItem_user$ref;
export type UserItem_user = {|
  +id: string,
  +avatarUrl: any,
  +login: string,
  +name: ?string,
  +location: ?string,
  +email: string,
  +url: any,
  +viewerIsFollowing: boolean,
  +$refType: UserItem_user$ref,
|};
export type UserItem_user$data = UserItem_user;
export type UserItem_user$key = {
  +$data?: UserItem_user$data,
  +$fragmentRefs: UserItem_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserItem_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "location",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerIsFollowing",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '37e5f5150349f4def2f57909ee345e63';

module.exports = node;
