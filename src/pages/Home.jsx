import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setServices, setLoading, setError } from '../store/serviceSlice';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import PopularServices from '../components/PopularServices';
import JoinBanner from '../components/JoinBanner';
import ProBanner from '../components/ProBanner';
import GuidesSection from '../components/GuidesSection';
import FingertipsBanner from '../components/FingertipsBanner';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector(state => state.service);

  useEffect(() => {
    const fetchServices = async () => {
      dispatch(setLoading(true));
      try {
        const response = await api.get('/services');
        dispatch(setServices(response.data.services));
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchServices();
  }, [dispatch]);

  const SkeletonCard = () => (
    <div className="bg-white border border-[#e4e5e7] rounded-xl overflow-hidden animate-pulse">
      <div className="w-full h-[180px] bg-gray-200"></div>
      <div className="p-4 flex flex-col gap-3">
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        <div className="pt-3 border-t border-[#efeff0] flex justify-between">
          <div className="w-10 h-4 bg-gray-200 rounded"></div>
          <div className="w-20 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      {/* <CategorySection /> */}
      <PopularServices />
      <ProBanner />
      <JoinBanner />
      <GuidesSection />
      <FingertipsBanner />

      {/* <main className="flex-1 max-w-[1400px] mx-auto px-4 md:px-12 py-16 w-full">
        <h2 className="text-3xl font-bold text-[#404145] mb-10">Explore Our Services</h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No services available at the moment.</p>
          </div>
        )}
      </main> */}

      <Footer />
    </div>
  );
};

export default Home;
