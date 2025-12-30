import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

const Breadcrumbs = ({ items }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Default breadcrumbs generation if items not provided
    const breadcrumbItems = items || [
        { label: 'Home', path: '/' },
        ...pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            // Formatting the label (e.g., "about-us" -> "About Us")
            let label = name
                .replace(/-/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Special cases
            if (name === 'contact') label = 'Contact Us';

            return {
                label: label,
                path: isLast ? null : routeTo,
            };
        }),
    ];

    return (
        <RevealOnScroll>
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 py-4 px-4 md:px-8 lg:px-12 max-w-1440px mx-auto">
                {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;

                    return (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="opacity-50">/</span>}

                            {item.path && !isLast ? (
                                <Link
                                    to={item.path}
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-slate-600 dark:text-slate-300"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">
                                    {item.label}
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>
        </RevealOnScroll>
    );
};

export default Breadcrumbs;
