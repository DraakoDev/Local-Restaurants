const HomePage = () => {
  return (
    <>
      <main className="flex items-center h-screen bg-black-600 p-12 text-white">
        <div className="h-full">
          <h2 className="font-bold text-3xl mb-4">
            Encuentra tus Restaurantes mas Cercanos
          </h2>
          <hr />
          <h2 className="font-bold text-2xl mt-12 mb-4">
            Restaurantes en Bogota
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            aliquam neque dolorem unde. Dolorem error provident sapiente
            suscipit delectus autem, accusamus quod quisquam at reprehenderit
            consequatur facere iusto earum sequi!
          </p>
        </div>
        <img src="/image-home-page.png" alt="Fast-Food" className="w-3/5" />
      </main>
    </>
  );
};

export default HomePage;
