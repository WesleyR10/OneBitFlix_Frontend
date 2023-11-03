import styles from "../../../../styles/slideCategory.module.scss"
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";
import courseService from "@/services/courseService";


const NewestCategory = function () {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses)
  if (error) return error
  if (!data) return (
    <>
      <p>Loading...</p>
    </>
  );

  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  )
};

export default NewestCategory