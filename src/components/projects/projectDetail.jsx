import React from 'react';

const ProjectDetail = ({
    heroImage,
    title,
    description,
    timePeriod,
    contributors = [],
}) => {
    return (
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
            {/* Hero Image */}
            {heroImage && (
                <div style={{ marginBottom: 32 }}>
                    <img
                        src={heroImage}
                        alt={title}
                        style={{
                            width: '100%',
                            maxHeight: 400,
                            objectFit: 'cover',
                            borderRadius: 12,
                            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                        }}
                    />
                </div>
            )}

            {/* Title */}
            <h1 style={{ fontSize: 36, marginBottom: 12 }}>{title}</h1>

            {/* Time Period */}
            <div style={{ color: '#888', marginBottom: 24, fontSize: 16 }}>
                {timePeriod}
            </div>

            {/* Description */}
            <p style={{ fontSize: 20, lineHeight: 1.6, marginBottom: 40 }}>
                {description}
            </p>

            {/* Contributors */}
            <section>
                <h2 style={{ fontSize: 24, marginBottom: 12 }}>Contributors</h2>
                {contributors.length > 0 ? (
                    <ul>
                        {contributors.map((contributor, idx) => (
                            <li key={idx} style={{ fontSize: 18, marginBottom: 6 }}>
                                {contributor}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div style={{ color: '#aaa', fontSize: 16 }}>No contributors listed.</div>
                )}
            </section>
        </div>
    );
};

export default ProjectDetail;