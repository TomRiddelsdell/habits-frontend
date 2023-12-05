/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHabit = /* GraphQL */ `
  subscription OnCreateHabit(
    $filter: ModelSubscriptionHabitFilterInput
    $owner: String
  ) {
    onCreateHabit(filter: $filter, owner: $owner) {
      id
      Name
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateHabit = /* GraphQL */ `
  subscription OnUpdateHabit(
    $filter: ModelSubscriptionHabitFilterInput
    $owner: String
  ) {
    onUpdateHabit(filter: $filter, owner: $owner) {
      id
      Name
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteHabit = /* GraphQL */ `
  subscription OnDeleteHabit(
    $filter: ModelSubscriptionHabitFilterInput
    $owner: String
  ) {
    onDeleteHabit(filter: $filter, owner: $owner) {
      id
      Name
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
