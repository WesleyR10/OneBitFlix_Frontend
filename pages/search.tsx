/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import courseService, { CourseType } from "@/services/courseService";
import SearchCard from "@/components/searchCard";
import Footer from "@/components/common/footer";

const Search = function () {
  const router = useRouter();
  const searchName: any = router.query.name; // Pegar a pesquisa através da url
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  const searchCourses = async function () {
    const res = await courseService.getSearch(searchName);
    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Onebitflix - {searchName}</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={styles.searchResult}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((course) => (
                <SearchCard key={course.id} course={course} />
              ))}
            </Container>
          </div>
        ) : (
          <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
        )}
        <div className={styles.headFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;