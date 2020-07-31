/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserList_query$ref = any;
export type SearchUser_QueryVariables = {|
  count?: ?number,
  cursor?: ?string,
  query: string,
|};
export type SearchUser_QueryResponse = {|
  +$fragmentRefs: UserList_query$ref
|};
export type SearchUser_Query = {|
  variables: SearchUser_QueryVariables,
  response: SearchUser_QueryResponse,
|};
*/


/*
query SearchUser_Query(
  $count: Int
  $cursor: String
  $query: String!
) {
  ...UserList_query
}

fragment UserItem_user on User {
  id
  avatarUrl
  login
  name
  location
  email
  url
  viewerIsFollowing
}

fragment UserList_query on Query {
  users: search(first: $count, after: $cursor, query: $query, type: USER) {
    edges {
      cursor
      node {
        __typename
        ... on User {
          id
          ...UserItem_user
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
    userCount
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchUser_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchUser_Query",
    "selections": [
      {
        "alias": "users",
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
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
                      (v2/*: any*/),
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
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
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
      },
      {
        "alias": "users",
        "args": (v1/*: any*/),
        "filters": [
          "query",
          "type"
        ],
        "handle": "connection",
        "key": "UserList_users",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "2565ced5a992e2ce5c66ef11baf44b70",
    "id": null,
    "metadata": {},
    "name": "SearchUser_Query",
    "operationKind": "query",
    "text": "query SearchUser_Query(\n  $count: Int\n  $cursor: String\n  $query: String!\n) {\n  ...UserList_query\n}\n\nfragment UserItem_user on User {\n  id\n  avatarUrl\n  login\n  name\n  location\n  email\n  url\n  viewerIsFollowing\n}\n\nfragment UserList_query on Query {\n  users: search(first: $count, after: $cursor, query: $query, type: USER) {\n    edges {\n      cursor\n      node {\n        __typename\n        ... on User {\n          id\n          ...UserItem_user\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    userCount\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce4aa79e95952c3f3387d48be8d93e60';

module.exports = node;
