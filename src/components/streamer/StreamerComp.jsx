import styles from "../streamer/StreamerComp.module.css";

function StreamerComp({ name, platformName ,description,upVotesCount,downVotesCount}) {
  return (
    <div className={styles["streamer-wrapper"]}>
      <p>{name}</p>
      <p>{platformName}</p>
      <p>{description}</p>
      <p>UpVotes: {upVotesCount}</p>
      <p>DownVotes: {downVotesCount}</p>
    </div>
  );
}
export default StreamerComp;
