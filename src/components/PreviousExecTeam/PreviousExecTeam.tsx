import React, { useState } from "react";
import * as S from "./PreviousExecTeam.styles";
import prevTeamsData from "./PreviousExecTeamsInfo.json";

interface yearData {
  year: string;
  members: prevMembers[];
}
interface prevMembers {
  name: string;
  role: string;
  linkedIn_url: string;
}

const VISIBLE_YEARS_DESKTOP = 4;
const VISIBLE_YEARS_MOBILE = 2;

const PreviousExecTeam = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const handleLeftArrow = () => {
    setCurrentYearIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleRightArrow = () => {
    if (currentYearIndex < prevTeamsData.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };
    // Calculate the number of visible years based on screen size
  const visibleYearsCount =
    window.innerWidth <= 768 ? VISIBLE_YEARS_MOBILE : VISIBLE_YEARS_DESKTOP;

  // Slicing the year array to only show visible years
  const visibleYears = prevTeamsData.slice(
    currentYearIndex,
    currentYearIndex + visibleYearsCount
  );
  
  return (
    <S.PrevTeamSection>
      <S.p>Previous Exec Team</S.p>
      <div className="pagination-controls">
        <button
          className="arrow-button"
          onClick={handleLeftArrow}
          disabled={currentYearIndex === 0}
        >
          &lt;
        </button>
        <div className="year-pagination">
            {visibleYears.map((data,index) => (
                <button
                key={data.year}
                className={`year-button ${currentYearIndex === index ? 'selected' : ''}`}
                onClick={() => setCurrentYearIndex(index)}
                >
                    {data.year}
                </button>
            ))}
        </div>
        <button
          className="arrow-button"
          onClick={handleRightArrow}
          disabled={currentYearIndex === prevTeamsData.length - 1}
        >
          &gt;
        </button>
      </div>

      <div className="teamList">
        {prevTeamsData[currentYearIndex].members.length > 0 && (
            <>
            {prevTeamsData[currentYearIndex].members.map((member, index) => (
                <div key={index} className="team-member">
                <h1>{member.name}</h1>
                <p>{member.role}</p>
                <p>{member.linkedIn_url}</p>
              </div>
            ))}
            </>
        )}
      </div>
    </S.PrevTeamSection>
  );
};

export default React.memo(PreviousExecTeam);
