import React from 'react';

const Destinations = () => {
    return (
        <section id="destinations" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dubai" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">Dubai</span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1643856555886-76dca68e5322?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Maldives" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">Maldives</span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1580063952955-9319880b5f74?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mumbai" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">Mumbai</span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1640774328301-cb95cdc3a8d6?q=80&w=3364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Islamabad" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">Islamabad</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;

