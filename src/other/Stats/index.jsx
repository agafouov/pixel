import Crystal from "../../assets/animation/Crystal.json";
import Lottie from "lottie-react";

const Stats = () => {
  return (
    <div class="Page StatsPage">
      <div class="PageHeader PageHeader--blur">
        <div class="PageHeader__inner">
          <div class="PageHeader__top">
            <div class="PageHeader__left">
              <div class="Typography PageHeader__title LibraryDisplay LibraryDisplay--l-1 LibraryDisplay--w-extra-bold">
                Stats
              </div>
            </div>
          </div>
          <div class="StatsPage__stats" data-color-scheme="overlay">
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                PX in the game
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                0
              </div>
            </div>
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                Lost PX
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                0
              </div>
            </div>
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                Sales (PX)
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                <div class="StatsPage__line">
                  <div class="LibraryIcon LibraryIcon--s-28">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.231 2.833H19.77c.738 0 1.377 0 1.885.047.516.047 1.102.155 1.608.52a3 3 0 0 1 1.226 2.096c.07.62-.123 1.184-.335 1.657-.208.466-.521 1.023-.883 1.666L15.09 23.362a1.25 1.25 0 0 1-2.179 0L4.731 8.82c-.363-.643-.676-1.2-.884-1.666-.212-.473-.405-1.037-.335-1.657A3 3 0 0 1 4.738 3.4c.506-.365 1.092-.473 1.608-.52.508-.047 1.147-.047 1.885-.047zM6.188 5.436a.5.5 0 0 0-.19.326c.003.023.022.128.13.37.156.348.411.804.81 1.51l5.813 10.336V5.333H8.288c-.811 0-1.333.001-1.714.036a1.563 1.563 0 0 0-.386.067zm9.063-.103v12.645l5.813-10.335c.398-.707.652-1.163.808-1.511.109-.242.128-.347.131-.37a.5.5 0 0 0-.19-.326 1.565 1.565 0 0 0-.386-.067c-.38-.035-.903-.036-1.714-.036H15.25z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                Sales (#)
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                0
              </div>
            </div>
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                The most popular move
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                <div class="StatsPage__line">
                  <Lottie style={{height: "28px", weight: "28px"}} animationData={Crystal}/>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div class="StatsPage__stat-item">
              <div class="Typography StatsPage__stat-item-label LibrarySubhead LibrarySubhead--l-1 LibrarySubhead--w-medium">
                Users
              </div>
              <div class="Typography StatsPage__stat-item-value LibraryDisplay LibraryDisplay--l-2 LibraryDisplay--w-semi-bold">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
