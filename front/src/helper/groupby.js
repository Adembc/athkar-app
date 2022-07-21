function groupBy(arr, field) {
  const groups = arr.reduce(
    (groups, item) => ({
      ...groups,
      [item[field]]: [...(groups[item[field]] || []), item],
    }),
    {}
  );
  return groups;
}
export default groupBy;
