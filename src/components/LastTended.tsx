interface LastTendedProps {
  created: string;
  modified: string;
}

export default function LastTended({ created, modified }: LastTendedProps) {
  const getTimeDifference = (dateString: string) => {
    const date = new Date(dateString);
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
