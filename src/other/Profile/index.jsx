import Nothing from "../../assets/animation/Nothing.json";
import Lottie from "lottie-react";

const Profile = () => {
  return (
    <div class="Page ProfilePage">
      <div class="PageHeader PageHeader--blur">
        <div class="PageHeader__inner">
          <div class="PageHeader__top"></div>
          <div class="ProfilePage__header">
            <div
              class="LibraryVerticalCell LibraryVerticalCell--size-class-large"
              data-color-scheme="overlay"
              style={{ maxWidth: "200px" }}
            >
              <div class="LibraryVerticalCell__avatar">
                <div class="Avatar Avatar--size-112 Avatar--type-circe-image">
                  {/* <img
                    src="https://ddejfvww7sqtk.cloudfront.net/user-media/gems/72.webp"
                    class="LibraryImage LibraryImage--loaded Avatar__image"
                  /> */}
                </div>
              </div>
              <div class="LibraryVerticalCell__children">
                <div class="CellChildren CellChildren--text-align-center">
                  <div class="CellTitle">
                    <div class="CellTitle__container">
                      <div class="Typography Typography--ellipsis LibraryHeadline LibraryHeadline--w-medium CellTitle__label">
                        player
                      </div>
                    </div>
                  </div>
                  <div class="CellChildren__subtitle">
                    <div class="CellChildren__container">
                      <div
                        style={{ color: "var(--foreground_secondary)" }}
                        class="Typography LibraryCaption LibraryCaption--l-1 LibraryCaption--w-regular"
                      >
                        0 wins
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ProfilePage__top-buttons">
              <div class="LibraryButton LibraryButton--sz-m LibraryButton--st-contrast LibraryButton--type- LibraryButton--or-horizontal">
                <div class="LibraryButton__inner">
                  <div class="LibraryButton__before">
                    <div class="LibraryIcon LibraryIcon--s-24">
                      <svg
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.83333 4.5C7.16396 4.5 5 6.66396 5 9.33333V18.6667C5 21.336 7.16396 23.5 9.83333 23.5H19.1667C21.836 23.5 24 21.336 24 18.6667V9.33333C24 6.66396 21.836 4.5 19.1667 4.5H9.83333ZM3 9.33333C3 5.55939 6.05939 2.5 9.83333 2.5H19.1667C22.9406 2.5 26 5.55939 26 9.33333V18.6667C26 22.4406 22.9406 25.5 19.1667 25.5H9.83333C6.05939 25.5 3 22.4406 3 18.6667V9.33333Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.8732 11.5427C20.2639 11.9331 20.2641 12.5662 19.8737 12.9569L16.376 16.4569C16.0391 16.7941 15.5109 16.8465 15.1142 16.5822L12.2939 14.7033L10.5401 16.4571C10.1496 16.8476 9.51643 16.8476 9.1259 16.4571C8.73538 16.0666 8.73538 15.4334 9.1259 15.0429L11.4592 12.7096C11.7962 12.3726 12.3242 12.3202 12.7208 12.5844L15.5408 14.4632L18.459 11.5431C18.8494 11.1525 19.4826 11.1523 19.8732 11.5427Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="Typography LibraryButton__text LibraryCaption LibraryCaption--l-1 LibraryCaption--w-semi-bold">
                    Stats
                  </div>
                </div>
              </div>
              <div class="LibraryButton LibraryButton--sz-m LibraryButton--st-contrast LibraryButton--type- LibraryButton--or-horizontal">
                <div class="LibraryButton__inner">
                  <div class="LibraryButton__before">
                    <div class="LibraryIcon LibraryIcon--s-24">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.89963 11.4867C3.93165 12.5221 4.22189 13.5331 4.74407 14.4279C5.26844 15.3264 6.00992 16.079 6.90057 16.6166C7.25052 16.8279 7.41416 17.2484 7.29902 17.6406C7.1106 18.2824 6.81467 18.8876 6.42382 19.4304L6.4183 19.4381C6.4063 19.4544 6.39973 19.474 6.39961 19.4943C6.39949 19.5145 6.40579 19.5343 6.41759 19.5507C6.4294 19.5672 6.44611 19.5795 6.46533 19.5858C6.48306 19.5917 6.5021 19.5922 6.52009 19.5874C7.54726 19.2336 8.51303 18.7218 9.38258 18.0704C9.58747 17.917 9.84802 17.858 10.099 17.9083C10.7252 18.0338 11.3622 18.0979 12.0008 18.0996C16.6344 18.0991 20.0996 14.9977 20.0996 11.4996C20.0996 8.00119 16.6337 4.89961 11.9996 4.89961C7.37117 4.89961 3.90813 7.99357 3.89963 11.4867ZM2.09961 11.4996C2.09961 6.71373 6.69259 3.09961 11.9996 3.09961C17.3066 3.09961 21.8996 6.71373 21.8996 11.4996C21.8996 16.2855 17.3066 19.8996 11.9996 19.8996L11.9973 19.8996C11.3744 19.898 10.7528 19.8463 10.1386 19.745C9.20048 20.4012 8.17448 20.923 7.09032 21.2948L7.07219 21.3008C6.69063 21.4227 6.28027 21.4205 5.89998 21.2947C5.5197 21.1689 5.18904 20.9259 4.95543 20.6005C4.72182 20.2752 4.59727 19.8841 4.59965 19.4836C4.60201 19.0849 4.72999 18.6972 4.96531 18.3755C5.11014 18.174 5.23617 17.9602 5.34208 17.7367C4.47136 17.0918 3.7382 16.2755 3.18944 15.3351C2.51324 14.1764 2.13865 12.8666 2.09998 11.5255C2.09973 11.5169 2.09961 11.5083 2.09961 11.4996Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="Typography LibraryButton__text LibraryCaption LibraryCaption--l-1 LibraryCaption--w-semi-bold">
                    Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="ProfilePage__banner">
        <div
          style={{background: "rgba(147, 97, 255, 0.08)"}}
          class="LibraryCellContainer LibraryCellContainer--spacing-16px LibraryCellContainer--surface-shadow-card"
        >
          <div class="LibraryCell LibraryCell--align-center LibraryCell--sizeClass-regular">
            <div class="LibraryCell__main">
              <div class="CellChildren CellChildren--text-align-start">
                <div class="CellTitle">
                  <div class="CellTitle__container">
                    <div class="Typography CellTitle__label LibraryLabel LibraryLabel--l-1 LibraryLabel--w-medium">
                      Show my Telegram username to&nbsp;other players
                    </div>
                  </div>
                </div>
                <div class="CellChildren__subtitle">
                  <div class="CellChildren__container">
                    <div
                      style={{color: "var(--foreground_secondary)"}}
                      class="Typography LibraryCaption LibraryCaption--l-1 LibraryCaption--w-regular"
                    >
                      While this allows opponents to send you messages to
                      discuss the game, it also means that other players can
                      connect your Telegram account to your TON wallet address.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="LibraryCell__after">
              <label class="Switch">
                <input type="checkbox" class="Switch__self" checked="" />
                <span class="Switch__pseudo"></span>
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <div class="ProfilePage__content">
        <div class="LibraryPlaceholderContainer LibraryPlaceholderContainer--spacing-32px">
          <div class="LibraryPlaceholder LibraryPlaceholder--orientation-vertical">
            <div class="LibraryPlaceholder__inner">
              <div class="LibraryPlaceholder__content">
                <div class="NotFoundDuckAnimation">
                  <div class="NotFoundDuckAnimation__lottie">
                    <Lottie animationData={Nothing} />
                  </div>
                </div>
              </div>
              <div class="LibraryPlaceholder__text">
                <div class="Typography LibraryPlaceholder__subtitle LibraryText LibraryText--l-1 LibraryText--w-regular">
                  There is nothing here yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
