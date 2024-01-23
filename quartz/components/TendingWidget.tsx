import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

const tendedTypes = {
  'sprout': '🌱',
  'sapling': '🌾',
  'evergreen': '🌲',
  'fruit': '🥭',
  'signpost': '🗺️'
}

export default (() => {

  function TendingWidget({ cfg, fileData }: QuartzComponentProps) {

    if (typeof fileData.frontmatter === "undefined") return <span></span>;

    let daysOld = Math.abs(new Date().getTime() - new Date(fileData.frontmatter!.created).getTime());
    let lastTended = Math.abs(new Date().getTime() - new Date(fileData.frontmatter!.updated).getTime());


    return <small>Esta {tendedTypes['sprout']} tiene {time2Str(daysOld)} de vida, y fué atendida hace {time2Str(lastTended)}.</small>;
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