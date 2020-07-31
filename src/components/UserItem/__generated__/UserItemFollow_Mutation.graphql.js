/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowUserInput = {|
  userId: string,
  clientMutationId?: ?string,
|};
export type UserItemFollow_MutationVariables = {|
  input: FollowUserInput
|};
export type UserItemFollow_MutationResponse = {|
  +followUser: ?{|
    +user: ?{|
      +viewerIsFollowing: boolean
    |}
  |}
|};
export type UserItemFollow_Mutation = {|
  variables: UserItemFollow_MutationVariables,
  response: UserItemFollow_MutationResponse,
|};
*/


/*
mutation UserItemFollow_Mutation(
  $input: FollowUserInput!
) {
  followUser(input: $input) {
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
    "name": "UserItemFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "name": "UserItemFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "cacheID": "4a72b3b8dfa3872240aee50ed3ed0805",
    "id": null,
    "metadata": {},
    "name": "UserItemFollow_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserItemFollow_Mutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    user {\n      viewerIsFollowing\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e95ec5a9c292df11dfa9fc948d0d2fe';

module.exports = node;
