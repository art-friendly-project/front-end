function changeMinAndMaxTerm(date: string) {
  date = date.replace(/\s+/g, '');
  const dates = date.split('~');

  const minTerm = `20${dates[0].replace(/\./g, '-')}`;
  const maxTerm = `20${dates[1].replace(/\./g, '-')}`;

  return { minTerm, maxTerm };
}

export default changeMinAndMaxTerm;
