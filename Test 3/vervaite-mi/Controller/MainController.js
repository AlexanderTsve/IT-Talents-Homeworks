window.addEventListener("load", router.controlHashChange);
window.addEventListener("load", handleViewChange);
window.addEventListener("hashchange", router.controlHashChange);
window.addEventListener("hashchange", handleViewChange);

const homePage = document.getElementById("homePage");
const detailsPage = document.getElementById("detailsPage");
function renderCards(container, arrOfParties) {
  container.innerHTML = "";
  const allDivEl = document.createElement("div");
  allDivEl.classList.add("all-parties");

  arrOfParties.forEach((party) => {
    const partyDivEl = document.createElement("div");
    const partyImgEl = document.createElement("img");
    const partyBodyEl = document.createElement("div");
    const partyNameEl = document.createElement("h5");
    const partySloganEl = document.createElement("p");
    const partyDivElFooter = document.createElement("div");
    const btnVoteEl = document.createElement("button");
    const btnDetailsEl = document.createElement("button");

    partyImgEl.src = party.picture;
    partyNameEl.innerText = party.name;
    partySloganEl.innerText = party.slogan;
    btnDetailsEl.innerText = "Details";
    btnVoteEl.innerText = "Vote";

    partyDivEl.classList.add("card");
    partyDivEl.style = "width: 15rem;";
    partyImgEl.classList.add("card-img-top");
    partyImgEl.alt = "Card image cap";
    partyBodyEl.classList.add("card-body");
    partyNameEl.classList.add("card-title");
    partySloganEl.classList.add("card-text");
    btnDetailsEl.classList.add("btn", "btn-primary", "me-5");
    btnVoteEl.classList.add("btn", "btn-primary", "vote");
    partyDivElFooter.classList.add("card-footer");

    btnVoteEl.addEventListener("click", function () {
      voting(party.id).then((resp) => {
        if (resp.ok) {
          localStorage.setItem(VOTE_FOR_PARTY, party.id);
          btnsDeactivate();
        } else {
          btnsDeactivate();
        }
      });
    });

    btnDetailsEl.addEventListener("click", function () {
      detailsPage.innerHTML = "";
      location.hash = "#detailsPage";
      const myInit = {
        method: "GET",
        headers: { identity: `${localStorage.getItem(ACTIVE_USER_KEY)}` },
      };
      fetch(
        `https://itt-voting-api.herokuapp.com/party/${party.id}`,
        myInit
      ).then((resp) => {
        if (resp.ok) {
          const partyData = resp.json();
          partyData.then((obj) => {
            const partyDetailsDivEl = document.createElement("div");
            const partyDetailsRowDivEl = document.createElement("div");
            const partyDetailsColDivEl = document.createElement("div");
            const partyDetailsColSecondDivEl = document.createElement("div");
            const partyDetailsBodyDivEl = document.createElement("div");
            const partyDetailsImgEl = document.createElement("img");
            const partySloganH5El = document.createElement("h5");
            const partyLeaderH5El = document.createElement("h5");
            const newRow = document.createElement("br");
            const partyAgitationsSpanEl = document.createElement("span");
            const btnsDiv = document.createElement("div");
            const btnVoteForUsEl = document.createElement("button");
            const btnViewResEl = document.createElement("button");
            const partyDetailsDivFooter = document.createElement("div");

            partyDetailsImgEl.src = obj.picture;
            partySloganH5El.innerText = `Slogan: ${obj.slogan}`;
            partyLeaderH5El.innerText = `Leader: ${obj.leader}`;
            partyAgitationsSpanEl.innerText = obj.agitation;
            btnVoteForUsEl.innerText = "Vote for us";
            btnViewResEl.innerText = "View results";

            btnVoteForUsEl.classList.add("btn", "btn-primary", "me-5", "vote");
            btnViewResEl.classList.add("btn", "btn-primary");
            partyDetailsImgEl.classList.add("img-fluid", "rounded-start");
            partyDetailsDivEl.classList.add("card", "mb-3");
            partyDetailsDivEl.style = "max-width: 700px;";
            partyDetailsRowDivEl.classList.add("row", "g-0");
            partyDetailsColDivEl.classList.add("col-md-4");
            partyDetailsColSecondDivEl.classList.add("col-md-8");
            partyDetailsBodyDivEl.classList.add("card-body");
            partySloganH5El.classList.add("card-text");
            partyLeaderH5El.classList.add("card-text");
            partyAgitationsSpanEl.classList.add("card-text");
            partyDetailsDivFooter.classList.add("card-footer");
            btnsDiv.classList.add("text-end");

            btnVoteForUsEl.addEventListener("click", function () {
              voting(party.id).then((resp) => {
                const messageReVoting = document.createElement("p");
                if (resp.ok) {
                  localStorage.setItem(VOTE_FOR_PARTY, party.id);
                  btnsDeactivate();
                  messageReVoting.innerText = "You have voted successfully!";
                } else if (resp.status === 406) {
                  btnsDeactivate();
                  messageReVoting.innerText =
                    "You have voted already! You cannot vote twice!";
                }
                detailsPage.append(messageReVoting);
              });
            });

            btnViewResEl.addEventListener("click", function () {
              const resultsPage = document.getElementById("resultsPage");
              resultsPage.innerHTML = "";
              const myInit = {
                method: "GET",
                headers: {
                  identity: `${localStorage.getItem(ACTIVE_USER_KEY)}`,
                },
              };
              fetch(
                "https://itt-voting-api.herokuapp.com/results",
                myInit
              ).then((resp) => {
                if (resp.ok) {
                  const data = resp.json();
                  location.hash = "#resultsPage";
                  data.then((arr) => {
                    const newArrOfParties = partyManager.allParties.map(
                      (el) => {
                        arr.forEach((party) => {
                          if (el.id === party.partyId) {
                            el.voters = party.voters;
                          }
                        });
                        if (!el.voters) {
                          el.voters = 0;
                        }
                        return el;
                      }
                    );

                    const totalResult = arr.reduce((sum, el) => {
                      return (sum += el.voters);
                    }, 0);

                    newArrOfParties.sort(
                      (party1, party2) => party2.voters - party1.voters
                    );

                    const tableEl = document.createElement("table");
                    const tHeadEl = document.createElement("thead");
                    const trHeadEl = document.createElement("tr");
                    const thNumPartyVoters = document.createElement("th");
                    const thPartyNameEl = document.createElement("th");
                    const thResultsEl = document.createElement("th");
                    const tBodyEl = document.createElement("tbody");

                    tableEl.classList.add("table", "table-striped");
                    tHeadEl.classList.add("table-dark");

                    thNumPartyVoters.innerText = "Party Number";
                    thPartyNameEl.innerText = "Party Name";
                    thResultsEl.innerText = "Results %";

                    trHeadEl.append(
                      thNumPartyVoters,
                      thPartyNameEl,
                      thResultsEl
                    );
                    tHeadEl.append(trHeadEl);
                    newArrOfParties.forEach((party) => {
                      const trPartyEl = document.createElement("tr");
                      const thPartyNumEl = document.createElement("th");
                      const tdNameEl = document.createElement("td");
                      const tdResultsEl = document.createElement("td");

                      // thPartyNumEl.setAttribute("scope", "row");
                      thPartyNumEl.innerText = `${
                        newArrOfParties.indexOf(party) + 1
                      }`;
                      tdNameEl.innerText = `${party.name}`;
                      tdResultsEl.innerText = `${(
                        (party.voters / totalResult) *
                        100
                      ).toFixed(2)} %`;
                      trPartyEl.append(thPartyNumEl, tdNameEl, tdResultsEl);
                      tBodyEl.append(trPartyEl);
                    });
                    tableEl.append(tHeadEl, tBodyEl);
                    resultsPage.append(tableEl);
                  });
                }
              });
            });

            btnsDiv.append(btnVoteForUsEl, btnViewResEl);
            partyDetailsDivFooter.append(partySloganH5El, btnsDiv);
            partyDetailsBodyDivEl.append(
              partyLeaderH5El,
              newRow,
              partyAgitationsSpanEl
            );
            partyDetailsColSecondDivEl.append(partyDetailsBodyDivEl);
            partyDetailsRowDivEl.append(
              partyDetailsColDivEl,
              partyDetailsColSecondDivEl,
              partyDetailsDivFooter
            );
            partyDetailsDivEl.append(partyDetailsRowDivEl);
            partyDetailsColDivEl.append(partyDetailsImgEl);
            detailsPage.append(partyDetailsDivEl);

            if (localStorage.getItem(VOTE_FOR_PARTY)) {
              btnsDeactivate();
            }
          });
        }
      });
    });

    partyDivElFooter.append(btnDetailsEl, btnVoteEl);
    partyBodyEl.append(partyNameEl, partySloganEl);
    partyDivEl.append(partyImgEl, partyBodyEl, partyDivElFooter);
    allDivEl.append(partyDivEl);
  });
  container.append(allDivEl);
  if (localStorage.getItem(VOTE_FOR_PARTY)) {
    btnsDeactivate();
  }
}
function handleViewChange() {
  let handleHash = location.hash.slice(1);
  if (handleHash === "homePage") {
    partyManager.allParties = [];
    partyManager.getAllParties().then((resp) => {
      if (resp.ok) {
        const data = resp.json();
        data.then((arr) => {
          renderCards(homePage, arr);
          if (!partyManager.allParties.length) {
            arr.forEach((party) => {
              partyManager.allParties.push(party);
            });
          }
        });
      }
    });
  }
}

function welcoming(userName) {
  const headerMenuEl = document.querySelector(".header-menu");
  const logoutEl = document.getElementById("logout-element");
  const liWelcome = document.createElement("li");
  liWelcome.innerText = `Hi, ${userName}! Welcome to the E-lections!`;
  const oldWelcome = document.querySelector(".welcome-message");
  if (oldWelcome) {
    oldWelcome.remove();
  }
  liWelcome.classList.add("welcome-message");
  liWelcome.classList.add("header-item");
  headerMenuEl.insertBefore(liWelcome, logoutEl);
}

function btnsDeactivate() {
  const btnsCollection = document.querySelectorAll(".vote");
  btnsCollection.forEach((btn) => btn.setAttribute("disabled", ""));
}
function voting(partyId) {
  const myInit = {
    method: "POST",
    headers: {
      identity: `${localStorage.getItem(ACTIVE_USER_KEY)}`,
      "Content-Type": "application/json",
    },
  };
  return fetch(`https://itt-voting-api.herokuapp.com/vote/${partyId}`, myInit);
}
