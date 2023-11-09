import styles from "./styles.module.scss";
import { EpisodeType } from "@/services/courseService";

interface props {
  episode: EpisodeType;
}

const EpisodeList = function ({ episode }: props) {

  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60; //o que sobrou é transformado em segundos

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;
    return result;
  };

  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
          <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>{episode.synopsis} Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident vel alias commodi sed molestias nihil doloribus quas enim consequatur eius, mollitia odit sequi numquam placeat, nostrum sunt! Odit modi repellat quaerat saepe. Magnam dolore suscipit vel, quaerat consequatur fugiat. Voluptas, eum iste ducimus officia recusandae reprehenderit vitae iusto distinctio. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam?</p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;