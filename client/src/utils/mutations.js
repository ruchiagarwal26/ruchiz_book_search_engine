import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//for SAVE_BOOK

export const SAVE_BOOK = gql `
    mutation saveBook($bookInput: BookInput!) {
        saveBook(bookInput: $bookInput) {
            _id
            username
            email
            savedBooks {
              bookId
              authors
              image
              description
              title
              link
            }
          }
        }
    `;
    
//remove book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;