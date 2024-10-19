import React, { useEffect, useState } from "react";
import * as S from "./PreviousExecTeam.styles";
import prevTeamsData from "./PreviousExecTeamsInfo.json";
// https://react-slick.neostack.com/docs/example/

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

// interface of the prop
interface PreviousExecTeamProps {
  desktopView: boolean;
}
const PreviousExecTeam = (props: PreviousExecTeamProps) => {
  const [selectedYear, setSelectedYear] = useState(prevTeamsData[prevTeamsData.length - 1].year);
  const [visibleYears, setVisibleYears] = useState<yearData[]>([]);

  useEffect(() => {
    updateVisibleYears();
  }, [props.desktopView]);// only run on inital render or when view changes

  // Function to set the visible years
  function updateVisibleYears() {
    const selectedYearIndex = getSelectedYearIndex();
    const numOfVisibleYears = props.desktopView ? VISIBLE_YEARS_DESKTOP : VISIBLE_YEARS_MOBILE;

    // Calculate startIndex based on the selectedYearIndex
    let startIndex = Math.max(0, prevTeamsData.length - numOfVisibleYears);
    // If the selected year is near the beginning, adjust startIndex to show available years
    if (selectedYearIndex < startIndex) {
      startIndex = Math.max(0, selectedYearIndex - Math.floor(numOfVisibleYears / 2));
    }

    // Calculate endIndex based on startIndex
    const endIndex = Math.min(prevTeamsData.length, startIndex + numOfVisibleYears);

    setVisibleYears(prevTeamsData.slice(startIndex, endIndex));
  }

  const getSelectedYearIndex = (): number => {
    return prevTeamsData.findIndex((data) => data.year === selectedYear);
  }

  const handleLeftArrow = () => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex > 0) {
      setSelectedYear(prevTeamsData[selectedYearIndex - 1].year);

      // Recalculate visible years only if necessary
      const currentStartIndex = prevTeamsData.findIndex((data) => data.year === visibleYears[0].year);

      // if the selectedyear index less that the start of the visible year array
      if (selectedYearIndex - 1 < currentStartIndex) {
        // Only shift the visible years by 1 year to the left so we don't introduce any unnecssary years
        const newStartIndex = Math.max(0, currentStartIndex - 1);
        const newEndIndex = Math.min(prevTeamsData.length, newStartIndex + (props.desktopView ? VISIBLE_YEARS_DESKTOP : VISIBLE_YEARS_MOBILE));
        setVisibleYears(prevTeamsData.slice(newStartIndex, newEndIndex));
      }
    }
  };
  const handleRightArrow = () => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex < prevTeamsData.length - 1) {
      setSelectedYear(prevTeamsData[selectedYearIndex + 1].year);

      // Recalculate visible years only if necessary
      const currentStartIndex = prevTeamsData.findIndex((data) => data.year === visibleYears[0].year);
      const numOfVisibleYears = props.desktopView ? VISIBLE_YEARS_DESKTOP : VISIBLE_YEARS_MOBILE;

      // If the selected year moves beyond the currently visible years
      if (selectedYearIndex + 1 >= currentStartIndex + numOfVisibleYears) {
        // Shift the visible years by one to the right
        const newStartIndex = Math.min(prevTeamsData.length - numOfVisibleYears, currentStartIndex + 1);
        const newEndIndex = Math.min(prevTeamsData.length, newStartIndex + numOfVisibleYears);
        setVisibleYears(prevTeamsData.slice(newStartIndex, newEndIndex));
      }
    }
  };


  return (
    <S.PrevTeamSection>
      <S.p>Previous Exec Team</S.p>
      <S.PaginationControl>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleLeftArrow}
          disabled={getSelectedYearIndex() === 0}
        >
          &lt;
        </S.ArrowButton>
        <S.YearPagination>
          {visibleYears.map((data) => (
            <S.YearButton
              key={data.year}
              className={selectedYear === data.year ? 'selected' : ''}
              onClick={() => setSelectedYear(data.year)}
            >
              {data.year}
            </S.YearButton>
          ))}
        </S.YearPagination>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleRightArrow}
          disabled={getSelectedYearIndex() === prevTeamsData.length - 1}
        >
          &gt;
        </S.ArrowButton>
      </S.PaginationControl>

      <S.TeamList>
        {prevTeamsData
          .filter((team) => team.year === selectedYear)
          .map((team) => (
            <>
              {team.members.length > 0 && (
                <>
                  {team.members.map((member, index) => (
                    <div key={index} className="team-member">
                      <h1>{member.name}</h1>
                      <p>{member.role}</p>
                      <a href={member.linkedIn_url} target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                      </a>
                    </div>
                  ))}
                </>
              )}
            </>
          ))}
      </S.TeamList>

    </S.PrevTeamSection>
  );
};

export default React.memo(PreviousExecTeam);
