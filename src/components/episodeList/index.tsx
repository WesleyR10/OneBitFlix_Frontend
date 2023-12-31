import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { CourseType, EpisodeType } from "@/services/courseService";

interface props {
  episode: EpisodeType;
  course: CourseType;
}

const EpisodeList = function ({ episode, course }: props) {
  const router = useRouter();

  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60; //o que sobrou é transformado em segundos

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;
    return result;
  };

  const handleEpisodePlayer = () => {
    router.push(`/course/episode/${episode.order - 1}?courseid=${course.id}&episodeid=${episode.id}`);
  }

  return (
    <>
      <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
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