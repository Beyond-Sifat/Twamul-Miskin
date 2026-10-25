import Navbar from '@/components/Navbar';
import React from 'react';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar/>
            <div className='min-h-[calc(100vh-228.85px)]'>
                {children}

            </div>
            {/* <Footer /> */}
        </>
    );
}