import React from "react";
import { FaCogs, FaBoxOpen, FaChartBar } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white rounded-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Stok Yönetimini Kolaylaştırın
          </h1>
          <p className="text-lg mb-6">
            Ürünlerinizin stok seviyelerini kolayca takip edin ve yönetimini
            zahmetsizce yapın. Hızlı, güvenilir ve verimli stok yönetimi burada!
          </p>
          <a
            href="#stock-list"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0077b6] to-[#74dddd] text-white rounded-lg font-medium text-lg hover:scale-105 transition-transform"
          >
            Ürünleri Yönet
          </a>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kolay Stok Takibi</h3>
            <p className="text-sm text-dark-gray">
              Ürünlerinizin stok seviyelerini gerçek zamanlı olarak takip edin.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaBoxOpen className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ürün Yönetimi</h3>
            <p className="text-sm text-dark-gray">
              Stoklarınızı kolayca ekleyin, düzenleyin ve yönetin.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaChartBar className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Raporlama</h3>
            <p className="text-sm text-dark-gray">
              Satışlar ve stok durumu hakkında detaylı raporlar alın.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-16 bg-light-aqua py-12 rounded-lg">
          <h2 className="text-3xl lg:text-4xl text-white font-extrabold text-center mb-6">
            Nasıl Çalışır?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Adım 1</h3>
              <p className="text-sm text-white">
                Ürünlerinizi sisteme ekleyin.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Adım 2</h3>
              <p className="text-sm text-white">
                Stok seviyelerinizi takip edin.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Adım 3</h3>
              <p className="text-sm text-white">
                Detaylı raporlarla satış performansınızı analiz edin.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section id="stock-list" className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-6">
            Popüler Ürünler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Product A
              </h3>
              <p className="text-lg text-dark-blue mb-4">199.99₺</p>
              <button className="w-full py-2 rounded-lg font-medium bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white hover:bg-blue-600">
                Select
              </button>
            </div>
            {/* Repeat for other products */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
