export const sortData = (data) => {
    // const sortedData = [...data];
    return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
}