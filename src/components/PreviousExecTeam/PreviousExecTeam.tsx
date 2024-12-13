import React, { useEffect, useState } from "react";
import * as S from "./PreviousExecTeam.styles";
import {prevExecTeamList, PrevExecTeam} from "./PreviousExecTeamsInfo";
// https://react-slick.neostack.com/docs/example/
import Divider from "components/Divider";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const PAGINATION_VISIBLE_YEARS = 1;

// interface of the prop
interface PreviousExecTeamProps {
  desktopView: boolean;
}
const PreviousExecTeam = ({desktopView} : PreviousExecTeamProps) => {
  const [selectedYear, setSelectedYear] = useState(prevExecTeamList[prevExecTeamList.length - 1].year);
  const [visibleYears, setVisibleYears] = useState<PrevExecTeam[]>([]);
  
  useEffect(() => {
    updateVisibleYears();
  }, [desktopView]); // only run on inital render or when view changes

  // Function to set the visible years
  function updateVisibleYears() {
    const selectedYearIndex = getSelectedYearIndex();

    // Calculate startIndex based on the selectedYearIndex
    let startIndex = Math.max(0, prevExecTeamList.length - PAGINATION_VISIBLE_YEARS);
    // If the selected year is near the beginning, adjust startIndex to show available years
    if (selectedYearIndex < startIndex) {
      startIndex = Math.max(0,selectedYearIndex - Math.floor(PAGINATION_VISIBLE_YEARS / 2));
    }

    // Calculate endIndex based on startIndex
    const endIndex = Math.min(prevExecTeamList.length,startIndex + PAGINATION_VISIBLE_YEARS);

    setVisibleYears(prevExecTeamList.slice(startIndex, endIndex));
  }

  const getSelectedYearIndex = (): number =>
    prevExecTeamList.findIndex((data) => data.year === selectedYear);

  const handleLeftArrow = () => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex > 0) {
      setSelectedYear(prevExecTeamList[selectedYearIndex - 1].year);

      // Recalculate visible years only if necessary
      const currentStartIndex = prevExecTeamList.findIndex(
        (data) => data.year === visibleYears[0].year
      );

      // if the selectedyear index less that the start of the visible year array
      if (selectedYearIndex - 1 < currentStartIndex) {
        // Only shift the visible years by 1 year to the left so we don't introduce any unnecssary years
        const newStartIndex = Math.max(0, currentStartIndex - 1);
        const newEndIndex = Math.min(
          prevExecTeamList.length,
          newStartIndex + PAGINATION_VISIBLE_YEARS
        );
        setVisibleYears(prevExecTeamList.slice(newStartIndex, newEndIndex));
      }
    }
  };
  const handleRightArrow = () => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex < prevExecTeamList.length - 1) {
      setSelectedYear(prevExecTeamList[selectedYearIndex + 1].year);

      // Recalculate visible years only if necessary
      const currentStartIndex = prevExecTeamList.findIndex(
        (data) => data.year === visibleYears[0].year
      );

      // If the selected year moves beyond the currently visible years
      if (selectedYearIndex + 1 >= currentStartIndex + PAGINATION_VISIBLE_YEARS) {
        // Shift the visible years by one to the right
        const newStartIndex = Math.min(
          prevExecTeamList.length - PAGINATION_VISIBLE_YEARS,
          currentStartIndex + 1
        );
        const newEndIndex = Math.min(
          prevExecTeamList.length,
          newStartIndex + PAGINATION_VISIBLE_YEARS
        );
        setVisibleYears(prevExecTeamList.slice(newStartIndex, newEndIndex));
      }
    }
  };

  return (
    <S.PrevTeamSection>
      <Divider />
      <S.SectionHeader>Previous Executives</S.SectionHeader>
      <S.PaginationControl>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleLeftArrow}
          disabled={getSelectedYearIndex() === 0}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="sm"
            style={{ color: getSelectedYearIndex() === 0 ? 'grey' : "black" }}
          />
        </S.ArrowButton>
        <S.YearPagination>
          {visibleYears.map((data) => (
            <S.YearButton
              key={data.year}
            >
              {data.year}
            </S.YearButton>
          ))}
        </S.YearPagination>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleRightArrow}
          disabled={getSelectedYearIndex() === prevExecTeamList.length - 1}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            style={{ color: getSelectedYearIndex() === prevExecTeamList.length - 1 ? "grey" : "black" }}
          />
        </S.ArrowButton>
      </S.PaginationControl>

        {prevExecTeamList
          .filter((team) => team.year === selectedYear)
          .map((team: PrevExecTeam) => {
            const totalMember = team.members.length;
            const membersPerRow = desktopView ? 3 : 1; // based on the view, how many columns
            const lastRowStartIndex =
              Math.floor((totalMember - 1) / membersPerRow) * membersPerRow; // index of element that will be on the last row
            return (
              <>
                    <S.Carousel>
        {team.picture ? (
          <img 
            src={team.picture}
            style={{width:"100%", height:"auto",borderRadius: "0.75rem", objectFit:"cover", boxShadow: "0rem 1.5rem 2rem -1.5rem rgba(0, 0, 0, 0.7)"}}
          />
        ): (
          <p>No picture available</p>
        )}
      </S.Carousel>
                    <S.TeamList>

                {team.members.length > 0 && (
                  <>
                    {team.members.map((member, index) => (
                      <S.TeamMember
                        key={index}
                        lastRow={index >= lastRowStartIndex ? true : false} // if index is greater or equal, than we are on last row
                      >
                        <S.TeamHeader
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.name}
                        </S.TeamHeader>
                        <S.TeamRole>{member.role}</S.TeamRole>
                      </S.TeamMember>
                    ))}
                  </>
                )}
                      </S.TeamList>

              </>
            );
          })}
    </S.PrevTeamSection>
  );
};

export default React.memo(PreviousExecTeam);
