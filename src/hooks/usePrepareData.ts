import { useMemo, useState } from "react";
import { User } from "../api/apiSlice";

type SortingDirection = "ascending" | "descending";

const dispatchDir: {
  [K in SortingDirection]: SortingDirection;
} = {
  ascending: "descending",
  descending: "ascending",
};

function usePrepareUserData(data: User[] | undefined, filterValue: string) {
  const [sortDirection, setSortDirection] =
    useState<SortingDirection>("ascending");

  const preparedData = useMemo(() => {
    if (!data) return [];
    const sortableData = [
      ...data.filter((v) =>
        v.username.toLowerCase().includes(filterValue.toLowerCase())
      ),
    ];

    sortableData.sort((a, b) =>
      sortDirection === "ascending" ? a.id - b.id : b.id - a.id
    );

    return sortableData;
  }, [data, filterValue, sortDirection]);

  const requestSort = () => {
    setSortDirection(dispatchDir[sortDirection]);
  };

  return [preparedData, requestSort, sortDirection] as const;
}

export default usePrepareUserData;
