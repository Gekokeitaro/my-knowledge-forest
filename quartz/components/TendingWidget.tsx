import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

const validTendings: { [key: string]: string } = {
  sprout: '🌱',
  sapling: '🌾',
  evergreen: '🌲',
  fruit: '🥭',
  signpost: '🗺️'
}

export default (() => {

  const TYPE_TAG = "type/";

  function TendingWidget({ fileData }: QuartzComponentProps) {

    const noteType = fileData.frontmatter?.tags.find((tag) => { return tag.startsWith(TYPE_TAG) })?.split("/").pop();
    const tendingType = noteType && validTendings[noteType] ? validTendings[noteType] : undefined;

    const createdTime = fileData.frontmatter?.created;
    const updatedTime = fileData.frontmatter?.updated;

    if (tendingType === undefined || createdTime === undefined || updatedTime === undefined) return <span></span>

    const daysOld = Math.abs(new Date().getTime() - new Date(createdTime).getTime());
    const lastTended = Math.abs(new Date().getTime() - new Date(updatedTime).getTime());


    return <small>Esta {tendingType} tiene {time2Str(daysOld)} de vida, y fué atendida hace {time2Str(lastTended)}.</small>;
  }

  function time2Str(t: number) {
    const time = t / (60 * 60 * 24 * 1000);
    if (time / (12 * 30) >= 1) return (time / 12 * 30).toFixed(1) + " año/s"; // a anhos
    if (time / 30 >= 1) return (time / 30).toFixed(1) + " mes/es"; // a meses
    if (time <= 0.1) return "un momento";
    return time.toFixed(1) + " dia/s";
  }

  return TendingWidget;
}) satisfies QuartzComponentConstructor