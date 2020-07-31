/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserItem_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserList_query$ref: FragmentReference;
declare export opaque type UserList_query$fragmentType: UserList_query$ref;
export type UserList_query = {|
  +users: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id?: string,
        +$fragmentRefs: UserItem_user$ref,
      |},
    |}>,
    +userCount: number,
    +pageInfo: {|
      +startCursor: ?string,
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
    |},
  |},
  +$refType: UserList_query$ref,
|};
export type UserList_query$data = UserList_query;
export type UserList_query$key = {
  +$data?: UserList_query$data,
  +$fragmentRefs: UserList_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    },
    {
      "kind": "RootArgument",
      "name": "query"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "users"
        ]
      }
    ]
  },
  "name": "UserList_query",
  "selections": [
    {
      "alias": "users",
      "args": [
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        },
        {
          "kind": "Literal",
          "name": "type",
          "value": "USER"
        }
      ],
      "concreteType": "SearchResultItemConnection",
      "kind": "LinkedField",
      "name": "__UserList_users_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SearchResultItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "UserItem_user"
                    }
                  ],
                  "type": "User",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "userCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f1d98254d773ad7a2cdf85c224b04c06';

module.exports = node;
