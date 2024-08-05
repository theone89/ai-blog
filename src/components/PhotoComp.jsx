import React, { Fragment } from 'react';
import Image from 'next/image';

const PhotoComp = ({ photo, size, style }) => {
    const { user, urls, description } = photo;

    return (
        <Fragment>
            <Image
                height={size.height}
                width={size.width}
                className={style}
                src={urls.regular}
                alt={description}
            />
            <a
                className=""
                target="_blank"
                href={`https://unsplash.com/@${user.username}`}
            >
                {user.name}
            </a>
        </Fragment>
    );
};

export default PhotoComp;