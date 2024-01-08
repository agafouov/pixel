import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

const Rating = () => {
  const navigate = useNavigate();
  return (
    <div class="Page RatingPage">
      <div class="PageHeader PageHeader--blur" data-color-scheme="overlay">
        <div class="PageHeader__inner">
          <div class="PageHeader__top">
            <div class="PageHeader__left">
              <div class="Typography PageHeader__title LibraryDisplay LibraryDisplay--l-1 LibraryDisplay--w-extra-bold">
                Rating
              </div>
            </div>
          </div>
          <div class="LibrarySegmentedControl LibrarySegmentedControl--state-fixed LibrarySegmentedControl--glider">
            <a
              class="LibrarySegmentedControlItem__link LibrarySegmentedControlItem__link--active"
              // href="/rating#wins"
            >
              <div class="LibrarySegmentedControlItem LibrarySegmentedControlItem--active">
                <div class="Typography Typography--ellipsis LibrarySegmentedControlItem__inner LibraryLabel LibraryLabel--l-1 LibraryLabel--w-semi-bold">
                  Wins
                </div>
              </div>
            </a>
            <a class="LibrarySegmentedControlItem__link"
            // href="/rating#winrate"
            >
              <div class="LibrarySegmentedControlItem">
                <div class="Typography Typography--ellipsis LibrarySegmentedControlItem__inner LibraryLabel LibraryLabel--l-1 LibraryLabel--w-semi-bold">
                  Win Rate
                </div>
              </div>
            </a>
            <a class="LibrarySegmentedControlItem__link"
            // href="/rating#games"
            >
              <div class="LibrarySegmentedControlItem">
                <div class="Typography Typography--ellipsis LibrarySegmentedControlItem__inner LibraryLabel LibraryLabel--l-1 LibraryLabel--w-semi-bold">
                  Games
                </div>
              </div>
            </a>
            <div
              class="LibrarySegmentedControl__glider"
              style={{width: "calc(33.3333% - 5.33333px)", transform: "translateX(calc(0% + 0px))"}}
            ></div>
          </div>
          <div class="RatingPage__top-three">
            <div class="RatingPage__top-three-item" onClick={() => navigate("/profile")}>
              <div
                class="LibraryVerticalCell LibraryVerticalCell--size-class-compact LibraryVerticalCell--hoverable"
                data-color-scheme="overlay"
              >
                <div class="LibraryVerticalCell__avatar">
                  <div class="Avatar Avatar--size-88 Avatar--type-circe-image">
                    {/* <img
                      src="https://ddejfvww7sqtk.cloudfront.net/user-media/gems/60.webp"
                      class="LibraryImage LibraryImage--loaded Avatar__image"
                    /> */}
                    <div class="Avatar__badge">
                      <div class="Counter Counter--style-primary Counter--size-medium">
                        <div class="Typography Counter__inner LibraryCaption LibraryCaption--l-1 LibraryCaption--w-semi-bold">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="LibraryVerticalCell__children">
                  <div class="CellChildren CellChildren--text-align-center">
                    <div class="CellTitle">
                      <div class="CellTitle__container">
                        <div class="Typography Typography--ellipsis CellTitle__label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                          @player1
                        </div>
                      </div>
                    </div>
                    <div class="CellChildren__subtitle">
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 wins
                        </div>
                      </div>
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 games
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="RatingPage__top-three-item" onClick={() => navigate("/profile")}>
              <div
                class="LibraryVerticalCell LibraryVerticalCell--size-class-compact LibraryVerticalCell--hoverable"
                data-color-scheme="overlay"
              >
                <div class="LibraryVerticalCell__avatar">
                  <div class="Avatar Avatar--size-112 Avatar--type-circe-image">
                    {/* <img
                      src="https://ddejfvww7sqtk.cloudfront.net/user-media/gems/72.webp"
                      class="LibraryImage LibraryImage--loaded Avatar__image"
                    /> */}
                    <div class="Avatar__badge">
                      <div class="Counter Counter--style-primary Counter--size-medium">
                        <div class="Typography Counter__inner LibraryCaption LibraryCaption--l-1 LibraryCaption--w-semi-bold">
                          1
                        </div>
                      </div>
                    </div>
                    <div class="RatingPage__crown"></div>
                  </div>
                </div>
                <div class="LibraryVerticalCell__children">
                  <div class="CellChildren CellChildren--text-align-center">
                    <div class="CellTitle">
                      <div class="CellTitle__container">
                        <div class="Typography Typography--ellipsis CellTitle__label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                          @player2
                        </div>
                      </div>
                    </div>
                    <div class="CellChildren__subtitle">
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 wins
                        </div>
                      </div>
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 games
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="RatingPage__top-three-item" onClick={() => navigate("/profile")}>
              <div
                class="LibraryVerticalCell LibraryVerticalCell--size-class-compact LibraryVerticalCell--hoverable"
                data-color-scheme="overlay"
              >
                <div class="LibraryVerticalCell__avatar">
                  <div class="Avatar Avatar--size-88 Avatar--type-circe-image">
                    {/* <img
                      src="https://ddejfvww7sqtk.cloudfront.net/user-media/gems/3.webp"
                      class="LibraryImage LibraryImage--loaded Avatar__image"
                    /> */}
                    <div class="Avatar__badge">
                      <div class="Counter Counter--style-primary Counter--size-medium">
                        <div class="Typography Counter__inner LibraryCaption LibraryCaption--l-1 LibraryCaption--w-semi-bold">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="LibraryVerticalCell__children">
                  <div class="CellChildren CellChildren--text-align-center">
                    <div class="CellTitle">
                      <div class="CellTitle__container">
                        <div class="Typography Typography--ellipsis CellTitle__label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                          @player3
                        </div>
                      </div>
                    </div>
                    <div class="CellChildren__subtitle">
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 wins
                        </div>
                      </div>
                      <div class="CellChildren__container">
                        <div
                          style={{color: "var(--foreground_secondary)"}}
                          class="Typography LibraryCaption LibraryCaption--l-2 LibraryCaption--w-regular"
                        >
                          0 games
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="RatingPage__description">
        <div class="Typography LibraryText LibraryText--l-1 LibraryText--w-regular">
          The ranking takes into account games with second or
          higher
        </div>
      </div>
      <div class="LibrarySeparator LibrarySeparator--solid">
        <div class="LibrarySeparator__inner"></div>
      </div>
      <div class="BottomContent RatingPage__bottom" onClick={() => navigate("/profile")}>
        <div class="LibraryCellContainer RatingPage__user-cell LibraryCellContainer--spacing-8px LibraryCellContainer--surface-none LibraryCellContainer--hoverable">
          <div class="LibraryCell LibraryCell--align-center LibraryCell--sizeClass-regular">
            <div class="LibraryCell__before">
              <div class="Avatar Avatar--size-48 Avatar--type-circe-image">
                {/* <img
                  src="https://ddejfvww7sqtk.cloudfront.net/user-media/gems/49.webp"
                  class="LibraryImage LibraryImage--loaded Avatar__image"
                /> */}
              </div>
            </div>
            <div class="LibraryCell__main">
              <div class="CellChildren CellChildren--text-align-start">
                <div class="CellTitle">
                  <div class="CellTitle__container">
                    <div class="Typography Typography--ellipsis CellTitle__label LibraryLabel LibraryLabel--l-1 LibraryLabel--w-regular">
                      You
                    </div>
                  </div>
                </div>
                <div class="RatingPage__cell-subtitle">
                  <div
                    style={{color: "rgb(147, 97, 255)"}}
                    class="Typography LibraryCaption LibraryCaption--l-1 LibraryCaption--w-medium"
                  >
                    0 wins
                  </div>
                  <div
                    style={{color: "var(--foreground_tertiary)"}}
                    class="Typography RatingPage__cell-extra LibraryCaption LibraryCaption--l-1 LibraryCaption--w-regular"
                  >
                    0 games
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
