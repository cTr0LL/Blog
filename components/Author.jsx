import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        unoptimized
        alt={author.name}
        height={100}
        width={100}
        className="rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-lg">{author.bio}</p>
  </div>
);

export default Author;