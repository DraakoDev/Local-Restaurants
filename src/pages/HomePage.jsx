import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <main className="text-white flex flex-col xl:flex-row-reverse justify-center items-center relative min-h-screen">
        <figure className="w-[350px] sm:w-3/4 lg:w-1/2 h-auto flex justify-center items-center px-20">
          <img src="/image-home-page.png" alt="Hamburger" className="" />
        </figure>
        <div className="w-[95%] lg:w-1/2 flex flex-col justify-center items-center px-24">
          <h1 className="text-4xl font-bold text-center">Rappsody</h1>
          <h2 className="text-3xl font-semibold my-3 text-black-200 text-center">
            Encuentra una de nuestras sucursales
          </h2>
          <hr className="w-11/12 mb-10" />
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam hic
            itaque enim perspiciatis, ab facilis praesentium ullam. Enim labore
            esse blanditiis, nesciunt provident cum corrupti totam, et ut fugit
            obcaecati. Excepturi facere cumque minus tempore dolore? Autem sequi
            id officiis ad consequatur odio, recusandae praesentium dolorum
            officia corrupti saepe fuga cupiditate eum non accusantium magnam
            neque labore! Perspiciatis, dolor minus.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
