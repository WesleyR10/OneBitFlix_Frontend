import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderAuth from "@/components/common/headerAuth";
import courseService, { CourseType } from "@/services/courseService";

const CoursePage = function () {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter();
  const { id } = router.query

  const getCourse = async () => {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id)

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse(); //Chama a função de buscar curso sempre que o id alterar
  }, [id])

  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <p>{course?.name}</p>
      </main>
    </>
  );
};

export default CoursePage;