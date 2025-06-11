interface LastTendedProps {
  created: Date;
  modified: Date;
}

export default function LastTended({ created, modified }: LastTendedProps) {
  const getTimeDifference = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    return (
      (diffDays < 30 && `${diffDays} día${diffDays === 1 ? '' : 's'}`) ||
      (diffDays < 365 &&
        `${Math.floor(diffDays / 30)} mes${Math.floor(diffDays / 30) === 1 ? '' : 'es'}`) ||
      `${Math.floor(diffDays / 365)} año${Math.floor(diffDays / 365) === 1 ? '' : 's'}`
    );
  };

  const age = getTimeDifference(created);
  const lastTended = getTimeDifference(modified);

  return (
    <span className="text-center">
      se plantó hace {age} y fué regado hace {lastTended}
    </span>
  );
}
