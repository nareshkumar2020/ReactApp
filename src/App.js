import "./App.css";

function App() {
  return (
    <div className="App">
      <span className="SideBar">
        <span className="SideBarMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-grid-1x2-fill"
            viewBox="0 0 16 16"
            className="SideBarIconActive"
          >
            <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-bar-graph"
            viewBox="0 0 16 16"
            className="SideBarIcon"
          >
            <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
            className="SideBarIcon"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </span>
        <span className="SideBarAvatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
            className="SideBarAvatarIcon"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </span>
      </span>
      <span className="Main">
        <div className="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
            className="SearchIcon"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <span className="SearchText">Search for data, users..</span>
        </div>
        <div className="ApplicationsPane">
          <span className="Applications">
            <div>
              <span className="StatusText">ACTIVE</span>
              <div className="ApplicationsTitle">
                <span className="ApplicationTitle">RR</span>
                <span className="ApplicationTitle">AB</span>
                <span className="ApplicationTitleActive">JS</span>
                <span className="ApplicationTitle">AM</span>
                <span className="ApplicationTitle">BS</span>
                <span className="ApplicationTitle">KW</span>
                <span className="ApplicationTitle">FM</span>
                <span className="ApplicationTitle">TW</span>
                <span className="ApplicationTitle">JB</span>
              </div>
            </div>
            <div>
              <span className="StatusText">INACTIVE</span>
            </div>
            <div>
              <span className="StatusText">CLOSED</span>
            </div>
          </span>
          <span className="ApplicationView">
            <div className="ApplicationActivity">
              <span className="ActivityLog">
                Last activity Christina Largarde on 24 Sep 2021, 18:34
              </span>
              <span className="ActivityProgress">
                <span className="ActivityProgressPercent">70%</span>
                <span className="ActivityProgressText">Overall progress</span>
              </span>
              <span className="ActivityLeft">
                <span className="ActivityLeftDays">
                  <span>24</span>
                  <span className="ActivityLeftIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1dc91d"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                </span>
                <span className="ActivityLeftText">Days to progress</span>
              </span>
            </div>
            <div className="ApplicantDetails">
              <span className="ApplicantInfo">
                <span className="ApplicantInfoName">Joydeep Sengupta</span>
                <span className="ApplicantInfoEmail">
                  joydeep.roni@gmail.com // +917205851389
                </span>
              </span>
              <span className="ApplicantLoanRequested">
                <span className="ApplicationsCount">03</span>
                <span className="ApplicationCountText">Loans Requested</span>
              </span>
              <span className="ApplicantLoan">
                <span className="ApplicantLoanAmount">$23,523,000</span>
                <span className="ApplicantLoanAmountText">Loan Amount</span>
              </span>
            </div>
            <div className="DocumentPane">
              <div className="SelectionPane">
                <select
                  name="property"
                  id="property-selection"
                  placeholder="Select Property (4)"
                >
                  <option value="">Select Property (4)</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <button className="EditButton">Edit Property</button>
              </div>
              <div className="Details">
                <span className="Detail">
                  <span class="TextBold">3008 Alexander Road</span>
                  <span class="TextNormal">New York, NY 21130</span>
                </span>

                <span className="Detail">
                  <span class="Condition">Good</span>
                </span>

                <span className="Detail">
                  <span class="TextNormal">Units</span>
                  <span class="TextBold">03</span>
                </span>

                <span className="Detail">
                  <span class="TextNormal">Loan</span>
                  <span class="TextBold">$1,000,000</span>
                </span>

                <span className="Detail">
                  <span class="TextNormal">Value</span>
                  <span class="TextBold">$1,934,662</span>
                </span>

                <span className="Detail">
                  <span class="TextNormal">Rent</span>
                  <span class="TextBold">$25,000</span>
                </span>

                <span className="Detail">
                  <span class="TextNormal">Interest</span>
                  <span class="TextBold">14.3%</span>
                </span>

                <span className="Locate">
                  <span class="LocateIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  <span class="TextBold">View on Map</span>
                </span>
              </div>
              <div className="Display">
                <span className="LeftBlock">
                  <div className="BlockHeader">
                    <span className="TextBold">Documents</span>
                    <span>
                      <span className="Icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-paperclip"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                        </svg>
                      </span>
                      <span className="Icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="LeftBody">
                    <span className="Section1">
                      <input
                        id=""
                        type="text"
                        name=""
                        placeholder="Subject Property LLC Documents"
                        className="Input1"
                      />
                      <button className="AddButton">Add +</button>
                    </span>
                    <span className="LineItem">
                      Operating Agreement
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                    <span className="LineItem">
                      Certificate of Good Standing
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="LineItem">
                      Filing Receipt
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="LineItem">
                      EIN/SS-4
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="LineItem">
                      Attorney Opinion Letter
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#F33A6A"
                            class="bi bi-x-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="Section1">
                      <input
                        id=""
                        type="text"
                        name=""
                        placeholder="Loading Documents"
                        className="Input1"
                      />
                      <button className="AddButton">Add +</button>
                    </span>

                    <span className="LineItem">
                      Credit Report
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="LineItem">
                      Credit Supplement
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#F33A6A"
                            class="bi bi-x-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="LineItem">
                      Fraud Report
                      <span>
                        <span className="ActivityLeftIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1dc91d"
                            class="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span className="RightBlock">
                  <div className="BlockHeader">
                    <span className="TextBold">Articles of Organization</span>
                    <span>
                      <span className="Icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </span>
                      <span className="Icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                          />
                        </svg>
                      </span>
                      <span className="Icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-clockwise"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                          />
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="RightBody"></div>
                </span>
              </div>
              <div className="Status">
                <span className="StatusBlocks">
                  <span className="StatusBlock">
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value="Started"
                      disabled
                    />
                    <label for="" class="TextBold">
                      {" "}
                      Started
                    </label>
                  </span>
                  <span className="StatusBlock">
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value="Started"
                      checked
                    />
                    <label for="" class="TextBold">
                      {" "}
                      Submitted
                    </label>
                  </span>
                  <span className="StatusBlock">
                    <input type="checkbox" id="" name="" value="Started" />
                    <label for="" class="TextBold">
                      {" "}
                      Appraisal Ordered
                    </label>
                  </span>
                  <span className="StatusBlock">
                    <input type="checkbox" id="" name="" value="Started" />
                    <label for="" class="TextBold">
                      {" "}
                      Approved
                    </label>
                  </span>
                  <span className="StatusBlock">
                    <input type="checkbox" id="" name="" value="Started" />
                    <label for="" class="TextBold">
                      {" "}
                      Closed
                    </label>
                  </span>
                </span>
                <span className="ProgressBlock">
                  <label for="" class="TextBold">
                    77% from progress
                  </label>
                  <progress id="file" value="77" max="100">
                    {" "}
                    77%{" "}
                  </progress>
                </span>
              </div>
              <br></br>
              <br></br>
            </div>
          </span>
        </div>
      </span>
    </div>
  );
}

export default App;
