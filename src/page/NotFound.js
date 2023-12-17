import { Helmet } from "react-helmet"

export default function PageNotFound(){
    return (
      <section>
        <Helmet>
            <title> 404 </title>
        </Helmet>

        <section className=" bg-[#05386b] m-auto  p-10 ">
        <h1 className=" text-[#fff] " > 404 Page Not Found</h1>

        </section>
       

      </section>
    )
  }