"use client"
import PublicLayout from '@/app/(landing-page)/layout';
import Header from '@/components/layout/header/page';
import Footer from '@/app/(landing-page)/footer/page'

export default function PublicPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <PublicLayout>
            <main>{children}</main>
        </PublicLayout>
    );
}