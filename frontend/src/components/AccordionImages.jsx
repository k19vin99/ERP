import { Disclosure } from '@headlessui/react';

const images = [
  'https://source.unsplash.com/random/800x400?tech',
  'https://source.unsplash.com/random/800x400?office',
  'https://source.unsplash.com/random/800x400?data',
];

export default function AccordionImages() {
  return (
    <div className="max-w-4xl mx-auto my-8">
      {images.map((src, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full bg-gray-200 px-4 py-2 text-left font-medium mb-2 rounded">
                Imagen {index + 1}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-4">
                <img src={src} alt={`Imagen ${index + 1}`} className="rounded shadow" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
