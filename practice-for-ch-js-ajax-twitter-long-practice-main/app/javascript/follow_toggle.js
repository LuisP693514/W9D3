import { API, broadcast } from "./util";

export default class FollowToggle {

  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this))
  }
  
  async handleClick(event) {
    // Your code here

    event.preventDefault();
    const followState = this.toggleButton.getAttribute('data-follow-state');

    switch (followState) {
      case 'Follow!':
        // debugger
          this.follow()
        break;
      case 'Unfollow!':
        // debugger
        this.unfollow();
        break;
      default:
        console.log("error");
        break;
    }

  }

  async follow() {
    // Your code here
    // debugger
    await API.followUser(this.toggleButton.getAttribute("data-user-id"));
  }

  async unfollow() {
    // Your code here
    // debugger
    await API.unfollowUser(this.toggleButton.getAttribute("data-user-id"));
  }

  render() {
    switch (this.followState) {
      // Your code here
      case 'Follow!':

        break;
      case 'Unfollow!':

        break;
      default:
        console.log("error: no follow state");
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}