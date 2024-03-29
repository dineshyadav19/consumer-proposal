function getDaySuffix(day: any) {
  if (day < 1 || day > 31) {
    throw new Error('Invalid day');
  }

  if (day >= 11 && day <= 13) {
    return 'th';
  }

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export const getProposalDates = (date: Date) => {
  const today = new Date(date);
  const futureDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const presentDay = today.getUTCDate();
  const presentMonth = today.toLocaleDateString(undefined, {
    month: 'long',
  });
  const day = futureDate.getUTCDate();
  const month = futureDate.toLocaleString('default', {
    month: 'long',
  });
  const futureFormattedDate = `${day}${getDaySuffix(day)} ${month}`;

  const generatedOn = `${presentDay}${getDaySuffix(
    presentDay
  )} ${presentMonth}`;

  return {
    generatedOn,
    futureFormattedDate,
  };
};
