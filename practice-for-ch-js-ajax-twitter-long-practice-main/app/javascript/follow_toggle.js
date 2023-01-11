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
          this.unfollow()
        break;
      case 'Unfollow!':
        this.follow();
        break;
      default:
        console.log("error");
        break;
    }

  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
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