/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UnfollowUserInput = {|
  userId: string,
  clientMutationId?: ?string,
|};
export type UserItemUnFollow_MutationVariables = {|
  input: UnfollowUserInput
|};
export type UserItemUnFollow_MutationResponse = {|
  +unfollowUser: ?{|
    +user: ?{|
      +viewerIsFollowing: boolean
    |}
  |}
|};
export type UserItemUnFollow_Mutation = {|
  variables: UserItemUnFollow_MutationVariables,
  response: UserItemUnFollow_MutationResponse,
|};
*/


/*
mutation UserItemUnFollow_Mutation(
  $input: UnfollowUserInput!
) {
  unfollowUser(input: $input) {
    user {
      viewerIsFollowing
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsFollowing",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserItemUnFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserItemUnFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7cc422ac404835c88fbe430628f5356a",
    "id": null,
    "metadata": {},
    "name": "UserItemUnFollow_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserItemUnFollow_Mutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    user {\n      viewerIsFollowing\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11a0c92ed2c1c8efbc8b22b2404f104f';

module.exports = node;
