import styles from "../../../../styles/slideCategory.module.scss"
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";
import courseService from "@/services/courseService";
import PageSpinner from "@/components/common/spinner";


const NewestCategory = function () {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses)
  if (error) return error
  if (!data) {
    return <PageSpinner />
  }

  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  )
};

export default NewestCategory