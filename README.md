# Apollo Bridge Link

When you don't have GraphQL server (yet) and want to use GraphQL on the client.

[_Demo: working example with source code and server._](https://github.com/dacz/apollo-bridge-link-example)

[_Article about how to use it with dataloaders and authentication._](https://medium.com/@dadc/using-graphql-client-with-rest-api-9c332e5c8eb3)

Use your own resolvers to non-graphql endpoints (like REST API, querying
filesystem in electron app etc.).

[![current version](https://img.shields.io/npm/v/apollo-bridge-link.svg?style=flat-square)](https://www.npmjs.com/package/apollo-bridge-link)
[![travis.ci](https://img.shields.io/travis/dacz/apollo-bridge-link.svg?style=flat-square)](https://travis-ci.org/dacz/apollo-bridge-link)
[![codecov](https://codecov.io/gh/dacz/apollo-bridge-link/branch/master/graph/badge.svg)](https://codecov.io/gh/dacz/apollo-bridge-link)
[![Greenkeeper badge](https://badges.greenkeeper.io/dacz/apollo-bridge-link.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/dacz/apollo-bridge-link.svg)](https://github.com/dacz/apollo-bridge-link/blob/master/LICENSE)

## Idea

GraphQL client side development is great experience. But more then often company
doesn't have GraphQL server (yet). Bridge allows you to resolve GraphQL queries
and mutations the way you want (facing REST API eg.)

Allows gradual implementing of GraphQL within your project and doesn't require
to change backend. Schema created along the way will be corner stone for full
adoption of GraphQL on the backend.

## Implementation

We created this tool for us to deliver web and native app. We use Apollo tools
and therefore this is implemented as Apollo Link.

The basic implementation is simple: this link allows you to create link that
accepts your schema and your resolvers. You can even mock the schema on the
client.

[_Demo: working example with source code and server._](https://github.com/dacz/apollo-bridge-link-example)

## How to use

### Install

```
npm install apollo-client@beta apollo-bridge-link apollo-cache-inmemory@beta
```

### create Apollo client

```javascript
import { ApolloClient } from 'apollo-client';
import { BridgeLink } from 'apollo-bridge-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

// your prepared schema (as txt or parsed)
import schema from './schema';

// your resolvers (see example)
import resolvers from './resolvers';

// if you want to mock anything in the schema (that has not resolver or doesn't return data)
const mock = true;

// if you want to push something down to the resolvers in context
const context = {
  graphQl: 'is cool',
};

// do something with actual context and operation of gql operation
// and return object that will be shallow merged to context
// use for init dataloader with token for example
// see example... https://github.com/dacz/apollo-bridge-link-example
const contextware = (ctx, operation) => ({ inContext: 'from contextware' });

export const client = new ApolloClient({
  link: BridgeLink({ schema, resolvers, mock, context, contextware });
  cache: new InMemoryCache({ addTypename: true }),
});
```

Then use your graphQl queries and mutation as you would be facing GraphQL
server.

[_Demo: working example with source code and server._](https://github.com/dacz/apollo-bridge-link-example)

## Need help, want help?

I eat my dog (cat, actually) food - I use this for client's projects. I do not
have enough time to put all enhancements into this library, but I am catching
up.

If you are developer, please submit issue or PR.

If you are company and want to help with implementing GraphQL (server/web
app/react native apps) and need help, ask me. I'm passionate programmer (Node,
React, GraphQl, ... ) and usually working in a team with more skills like
ReactNative.

## To Do

* [x] make example (against REST, with dataloader) - see
      [here](https://github.com/dacz/apollo-bridge-link-example)
* [ ] make better build

## Sponsors

**LiveAndCode** - passionate group of javascript developers (contact
juraj@liveandcode.cz). Thanks!
