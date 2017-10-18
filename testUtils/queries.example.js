import gql from 'graphql-tag';

export const POSTS = gql`
  query posts {
    posts {
      id
      title
      body
      author {
        id
        username
        email
      }
    }
  }
`;
