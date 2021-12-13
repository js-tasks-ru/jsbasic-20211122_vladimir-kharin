function makeFriendsList(friends) {
  // ваш код...
  let myPart =  document.createElement("ul");
     
  for (let i=0; i < friends.length; i++) {

    const friend = document.createElement("li");
    friend.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    myPart.append(friend);

  }

  return myPart
 
}
