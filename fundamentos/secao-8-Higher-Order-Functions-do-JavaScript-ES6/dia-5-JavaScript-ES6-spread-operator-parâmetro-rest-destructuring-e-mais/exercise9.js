
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.

  const yearMonth = ({ spring, summer, autumn, winter }) => {
    return [...spring, ...summer, ...autumn, ...winter]
  }

  console.log(yearMonth(yearSeasons))