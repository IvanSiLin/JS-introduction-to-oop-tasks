// BEGIN
export const getMutualFriends = (userOne, userTwo) =>{

  const mutualFriends = [];
  const userTwoFriends = new Set(userTwo.getFriends().map(friend => friend.id));

  for(let friend of userOne.getFriends()){

    if (userTwoFriends.has(friend.id)){

      mutualFriends.push(friend);
    }
  }

  return mutualFriends;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});