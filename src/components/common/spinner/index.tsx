import { Triangle } from "react-loader-spinner";

const PageSpinner = function () {
  return (
    <>
      <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          visible={true}
        />
      </div>
    </>
  )
}

export default PageSpinner;