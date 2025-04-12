import React from 'react';
const HollywoodSpotlight = () => 
  {

  return (
    <div className="bg-[#929baf] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16">
        <div className='text-left w-full mb-12'>
          <h2 className="text-3xl font-bold mb-4">Hollywood Spotlight</h2>
          <p className="text-[#ffffffc2]">
            Dive into the world of Hollywood with exclusive content and exciting details.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 col-span-2">
          <div class="grid gap-4">
            <div>
              <img
                class="h-full w-full max-w-full rounded-lg object-cover object-center "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3rqvQ3hhrPqrbsVQoaeMLIjeL5_ae482Og&s"
                alt="gallery-photo"
              />
            </div>
            <div className="h-44">
              <img
                class="h-full w-full max-w-full rounded-lg object-cover object-center"
                src="data:image/jpeg;base64,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"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full  w-full max-w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToofjeoZaeZZNDXCOwA0qgOGRFIYgfN0PD0J-DQa94YjspENHaRo0EeeGZoQGXlYnilQ&usqp=CAU"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-full  w-full max-w-full rounded-lg object-cover object-center "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0WPu77e1jKQRUb-KfjQOL9hGn7edSCoUUw&s"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full  w-full max-w-full rounded-lg object-cover object-center "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbacuu4COhDHuo02cXslM_0qMkf6sWTD1Jw&s"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-full  w-full max-w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYln1VYeEAkUk50uYBt0pjMhwlvOu1XNle3Q&s"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full  w-full max-w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZegUDqTqUs1QQ1yWUniDd5mVdReRY_gu4qQ&s"
                alt="gallery-photo"
              />
            </div>
            <div className="h-44">
              <img
                class="h-full w-full max-w-full rounded-lg object-cover object-center"
                src="https://www.listchallenges.com/f/items/4ba46ca7-4ecd-4aca-98bf-936ba114ffcd.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HollywoodSpotlight;