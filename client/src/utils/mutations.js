import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    addUser(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_WINE = gql`
  mutation saveWine($wineId: ID!, $userId: ID!) {
    saveWine(wineId: $wineId, userId: $userId)
  }
`;

export const SAVE_REVIEW = gql`
  mutation saveReview(
    $wineId: ID!
    $userId: ID!
    $rating: Int
    $experience: String
  ) {
    saveReview(
      wineId: $wineId
      userId: $userId
      rating: $rating
      experience: $experience
    ) {
      wine {
        _id
      }
      user {
        _id
      }
      rating
      experience
    }
  }
`;
